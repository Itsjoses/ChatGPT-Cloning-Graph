import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { Neo4jService } from './neo4j.service';

@Controller()
export class Neo4jController {
  constructor(private readonly neo4jService: Neo4jService) {}

  @Get('users')
  async getUsers() {
    const result = await this.neo4jService.runQuery(
      'MATCH (u:Node) RETURN u LIMIT 10',
    );
    return result.records.map((record) => record.get('u').properties);
  }

  @Get('graph')
  async getGraph() {
    return this, this.neo4jService.getAllData();
  }

  @Delete('delete-all')
  async deleteAllNodes() {
    return this.neo4jService.runQuery('MATCH (n) DETACH DELETE n');
  }

  @Post('save')
  async saveGraph(@Body() data: any[]) {
    return this.neo4jService.saveGraph(data);
  }
}
