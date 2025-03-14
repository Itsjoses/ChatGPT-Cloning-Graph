import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiModule } from './openai/openai.module';
import { Neo4jModule } from './neo4j/neo4j.module';

@Module({
  imports: [OpenaiModule, Neo4jModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
