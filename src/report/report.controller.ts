/* eslint-disable prettier/prettier */
//decoratori
import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    HttpCode,
    ParseUUIDPipe,
    ParseEnumPipe
} from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportType} from 'src/data';
import { CreateReportDto, UpdateReportDto, ReportResponseDto } from "src/dtos/report.dto";
@Controller('report/:type')
export class ReportController {
        constructor(
        private readonly reportService: ReportService
    ) { }
    @Get()
    getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: string,
    ): ReportResponseDto[] {
        //operatore ternario: se il report è ENTRATE, allora, si avrà la prima opzione 
        //  dell'enum  data.ts altrimenti la seconda
        const reportType =
            type === "income" ? ReportType.ENTRATE: ReportType.USCITE;
        //si assegna il rapporto dello stesso tipo usato
        return this.reportService.getAllReports(reportType)
    }
    @Get(':id')
    getReportById(@Param('type', new ParseEnumPipe(ReportType)) type: string,
        @Param('id', ParseUUIDPipe) id: string,
    ): ReportResponseDto {

        //operatore ternario: se il report è ENTRATE, allora, si avrà la prima opzione 
        //  dell'enum  data.ts altrimenti la seconda
        const reportType =
            type === 'entrate' ? ReportType.ENTRATE: ReportType.USCITE;
        //si assegna il rapporto in base all' id cercato
        return this.reportService.getReportById(reportType, id)

    }
    @Post()
    createReport(@Body() {quantita, tipo }: CreateReportDto,
        @Param('type', new ParseEnumPipe(ReportType)) type: string,
    ): ReportResponseDto {
        const reportType =
            //operatore ternario
            type === 'entrate' ? ReportType.ENTRATE: ReportType.USCITE;
        return this.reportService.createReport(reportType, {quantita, tipo})
    }

    @Put(':id')
    updateReport(
        @Param('type', new ParseEnumPipe(ReportType)) type: string,
        @Param('id', ParseUUIDPipe) id: string,
        @Body() body: UpdateReportDto,
    ): ReportResponseDto {
        console.log(body)
        const reportType =
            //operatore ternario
            type === 'entrate' ? ReportType.ENTRATE: ReportType.USCITE;
        return this.reportService.updateReport(reportType, id, body)
    }

    @HttpCode(204)
    @Delete(':id')
    deleteReport(@Param('id', ParseUUIDPipe) id: string) {
        return this.reportService.deleteReport(id)
    }
}

