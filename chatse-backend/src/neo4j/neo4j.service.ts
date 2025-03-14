import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { log } from 'console';
import { Driver, Session } from 'neo4j-driver';

@Injectable()
export class Neo4jService implements OnModuleDestroy {
  constructor(@Inject('NEO4J_DRIVER') private readonly driver: Driver) {}

  async runQuery(query: string, params?: Record<string, any>) {
    const session: Session = this.driver.session();
    try {
      return await session.run(query, params);
    } finally {
      await session.close();
    }
  }

  async deleteAllData() {
    this.runQuery('MATCH (n) DETACH DELETE n');
  }

  async getAllData() {
    const query = `
        MATCH (a)-[r]->(b)
        RETURN a, r, b
      `;

    const result = await this.runQuery(query);
    return result.records.map((record) => ({
      node_1: record.get('a').properties.name,
      node_2: record.get('b').properties.name,
      edge: record.get('r').properties.label,
    }));
  }

  async saveGraph(data: any[]) {
    const session: Session = this.driver.session();
    try {
      const tx = session.beginTransaction();

      for (const { node_1, node_2, edge } of data) {
        const query = `
            MERGE (a:Node { name: $node_1 })
            MERGE (b:Node { name: $node_2 })
            MERGE (a)-[:RELATION { label: $edge }]->(b);
          `;
        await tx.run(query, { node_1, node_2, edge });
      }

      await tx.commit();
      return { message: 'Graph data saved successfully!' };
    } catch (error) {
      console.error('Error saving graph data:', error);
      throw error;
    } finally {
      await session.close();
    }
  }

  async onModuleDestroy() {
    await this.driver.close();
  }
}
