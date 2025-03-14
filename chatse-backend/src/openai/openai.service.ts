import {
  DefaultAzureCredential,
  getBearerTokenProvider,
} from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { log } from 'console';
import { AzureOpenAI } from 'openai';
import { Neo4jService } from 'src/neo4j/neo4j.service';

@Injectable()
export class OpenaiService {
  private client: AzureOpenAI;
  private deployment;

  constructor(
    private readonly configService: ConfigService,
    private neo4jService: Neo4jService,
  ) {
    const endpoint = this.configService.get<string>('AZURE_OPENAI_ENDPOINT');
    const apiKey = this.configService.get<string>('AZURE_OPENAI_API_KEY');
    const apiVersion = this.configService.get<string>('OPENAI_API_VERSION');
    this.deployment = this.configService.get<string>(
      'AZURE_OPENAI_DEPLOYMENT_NAME',
    );

    this.client = new AzureOpenAI({
      endpoint,
      apiKey,
      apiVersion,
    });
  }

  async generateResponse(prompt: string, type: string) {
    const existingData = await this.neo4jService.getAllData();
    log(JSON.stringify(existingData, null, 2));
    const SYS_PROMPT = `
You are a network graph generator responsible for extracting terms and their relationships from a given context.
Your task is to build and integrate an ontology from the provided context while preserving existing ontology data.

## Instructions:
1. **Extract Key Concepts (Terms):**
   - Identify important entities such as objects, locations, organizations, persons, conditions, acronyms,  
     documents, services, and concepts.
   - Ensure terms are atomic (not overly broad or generalized).

2. **Determine Relationships Between Terms:**
   - Terms found in the same sentence or paragraph are likely related.
   - Each term can have multiple relationships with other terms.

3. **Define Relationship Nature:**
   - Describe each relationship clearly in **one or two sentences**.
   - Avoid redundancy and ensure precision.

## Output Format:
Return a **JSON array** where each object represents a relationship:

\`\`\`json
[
  {
    "node_1": "Concept A",
    "node_2": "Concept B",
    "edge": "Description of the relationship between node_1 and node_2."
  },
  { ... }
]
\`\`\`

## Existing Ontology Integration:
- **Preserve all existing relationships** unless an update is necessary.
- If a new relationship is found, **add it** without removing old ones.
- If modifying a term (e.g., renaming "The Eiffel Tower" to "Steven Santoso"), ensure all occurrences are updated accordingly.

### Existing Ontology Data:
${JSON.stringify(existingData, null, 2)}

Return only the JSON array—no explanations, no additional text. just give me from [ to ] of the data.
`;
    const SYS_PROMPT_2 = "you're a very helpful Virtual Assistant";
    const result = await this.client.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: type == 'General' ? SYS_PROMPT_2 : SYS_PROMPT,
        },
        { role: 'user', content: prompt },
      ],
      model: this.deployment,
    });
    const res: any = result.choices[0].message.content;
    if (type != 'General') {
      await this.neo4jService.deleteAllData();
      try {
        const parsedData = JSON.parse(res);
        await this.neo4jService.saveGraph(parsedData);
      } catch (error) {
        console.log(error);
      }
    }

    return res;
  }
}
