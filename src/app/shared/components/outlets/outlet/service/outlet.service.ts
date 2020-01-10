import { Injectable } from '@angular/core';
import { ApiRequestService } from 'src/app/shared/services/api-request.service';


@Injectable({
  providedIn: 'root'
})
export class OutletService {

  constructor(private apiService:ApiRequestService) { }

  getAllOutlets(obj){
    return this.apiService.post('getOutlets',obj);
  }

  getOutletTables(obj){
    return this.apiService.post('getOutletTables',obj);
  }
}
export interface ResponseObj {
  data: any[];
  status: String;
  errorMessage: string;
}
