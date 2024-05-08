import { ReportType, data } from "src/data";
import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid"
import { ReportResponseDto } from "src/dtos/report.dto";
interface Report {
  quantita: number,
  tipo: string
}

interface UpdateReport {
  quantita?: number,
  tipo?: string
}

@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report.filter((report) => report.type === type).map(report => new ReportResponseDto(report));
  }
  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!report) return;
    return new ReportResponseDto(report)
  }
  createReport(type: ReportType, { quantita, tipo }: Report): ReportResponseDto {
    //crea un nuovo rapporto 
    const newReport = {
      //crea una stringa id casuale per la chiamata newReport      
      id: uuid(),
      tipo,
      quantita,
      creato_il: new Date(),
      modificato_il: new Date(),
      type,
    }
    data.report.push(newReport);
    return new ReportResponseDto(newReport);
  }
  updateReport(type: ReportType, id: string, body: UpdateReport): ReportResponseDto {
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!reportToUpdate) return
    const reportIndex = data.report.findIndex((report) => report.id === reportToUpdate.id)
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      modificato_il: new Date(),
    };
    return new ReportResponseDto(data.report[reportIndex]);
  }
  deleteReport(id: string) {

    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    data.report.splice(reportIndex, 1);
    return;
  }
}
