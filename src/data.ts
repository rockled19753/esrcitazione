//creaziione database tramite array
export enum ReportType {
    ENTRATE = 'entrate',
    USCITE = "uscite",
}

export const data: Data = {
    report: [
        
        {
            id: "uuid1",
            tipo: "Busta Paga",
            quantita: 7500,
            creato_il: new Date(),
            modificato_il: new Date(),
            type: ReportType.ENTRATE
        },
        {
            id: "uuid2",
            tipo: "Secondo Lavoro",
            quantita: 2500,
            creato_il: new Date(),
            modificato_il: new Date(),
            type: ReportType.ENTRATE
        },
        {
            id: "uuid3",
            tipo: "Cibo",
            quantita: 500,
            creato_il: new Date(),
            modificato_il: new Date(),
            type: ReportType.USCITE
        },
        {
            id: "uuid4",
            tipo: "Bollette",
            quantita: 500,
            creato_il: new Date(),
            modificato_il: new Date(),
            type: ReportType.USCITE
        }
    ],
};
interface Data {
    report: {

        id: string;
        tipo: string;
        quantita: number;
        creato_il: Date;
        modificato_il: Date;
        type: ReportType;

    }[];
}


