export class ReportServicesHandyman {
    id_handyman: string;
    id_service: string;
    start_date: Date;
    start_time: string;
    end_date: Date;
    end_time: string;
    week: number;


    constructor(id_handyman: string, id_service: string, start_date: Date, start_time: string, end_date: Date, end_time: string, week: number ){
        this.id_handyman = id_handyman;
        this.id_service = id_service;
        this.start_date = start_date;
        this.start_time = start_time;
        this.end_date = end_date;
        this.end_time = end_time;
        this.week =  parseInt(end_time);
    }

}