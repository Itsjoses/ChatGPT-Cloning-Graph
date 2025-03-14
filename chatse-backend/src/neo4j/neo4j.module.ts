import { Module } from '@nestjs/common';
import { Neo4jService } from './neo4j.service';
import neo4j from 'neo4j-driver';
import { Neo4jController } from './neo4j.controller';

@Module({
  providers: [
    {
      provide: 'NEO4J_DRIVER',
      useFactory: () => {
        const driver = neo4j.driver(
          process.env.NEO4J_URI || 'bolt://localhost:7687',
          neo4j.auth.basic(
            process.env.NEO4J_USER || 'neo4j',
            process.env.NEO4J_PASSWORD || 'neo4j',
          ),
        );
        return driver;
      },
    },
    Neo4jService,
  ],
  exports: ['NEO4J_DRIVER', Neo4jService],
  controllers: [Neo4jController],
})
export class Neo4jModule {}
