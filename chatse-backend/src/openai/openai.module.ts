import { Module } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { ConfigModule } from '@nestjs/config';
import { OpenaiController } from './openai.controller';
import { Neo4jModule } from 'src/neo4j/neo4j.module';

@Module({
  imports: [ConfigModule.forRoot(), Neo4jModule],
  providers: [OpenaiService],
  exports: [],
  controllers: [OpenaiController],
})
export class OpenaiModule {}
