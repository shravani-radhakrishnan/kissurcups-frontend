import { Injectable } from '@angular/core';
import { ApiRequestService } from 'src/app/shared/services/api-request.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private apiService:ApiRequestService) { }
  signup(Obj){
    return this.apiService.post('signup', Obj);
  }
}
export interface ResponseObj {
  data: any[];
  status: String;
  errorMessage: string;
}