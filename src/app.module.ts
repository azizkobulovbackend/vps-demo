import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MetricsModule } from './metrics/metrics.module';
import { LoggerModule } from 'nestjs-pino';
import { pinoConfig } from './logger.config';

@Module({
  imports: [PrismaModule, MetricsModule, LoggerModule.forRootAsync(pinoConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
