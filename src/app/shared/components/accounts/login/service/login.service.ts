import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRequestService } from 'src/app/shared/services/api-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private apiService:ApiRequestService) { }
  login(loginObj){
    return this.apiService.post('login', loginObj);
  }
}
export interface ResponseObj {
  data: any[];
  status: String;
  errorMessage: string;
}
