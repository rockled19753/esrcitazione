/* eslint-disable prettier/prettier */
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ServiceController } from './service/service.controller';
import { ReportModule } from './report/report.module';



@Module({
  imports: [ ReportModule],
  controllers: [AppController, ServiceController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    }],
})
export class AppModule { }
