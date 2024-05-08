import{IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional}from "class-validator"
import { ReportType } from "src/data";
import { Exclude, Expose } from "class-transformer";


export class CreateReportDto{
    @IsNumber()
    @IsPositive()
    
    quantita: number;
    @IsString()
    @IsNotEmpty()
    tipo: string;
}
export class UpdateReportDto{
    @IsOptional()
    @IsNumber()
    @IsPositive()
    quantita: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    tipo: string;
}
export class ReportResponseDto{
    id: string;
    tipo: string;
    quantita: Number;


    @Expose({name: 'creatoil'}) 
    transformCreatedAt() {
        return this.creato_il;
    }
    @Exclude()
    creato_il: Date;

    @Exclude()
    modificato_il: Date;

    type: ReportType; 

    

    
    constructor(partial: Partial<ReportResponseDto>){
        Object.assign(this, partial);
    }

}