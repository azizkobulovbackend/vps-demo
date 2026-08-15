import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { Registry, collectDefaultMetrics } from 'prom-client';

@Controller('metrics')
export class MetricsController {
  private readonly registry = new Registry();

  constructor() {
    collectDefaultMetrics({
      register: this.registry,
    });
  }

  @Get()
  async getMetrics(@Res() response: Response) {
    response.setHeader('Content-Type', this.registry.contentType);

    response.end(await this.registry.metrics());
  }
}
