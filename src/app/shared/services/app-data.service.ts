import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { BehaviorSubject } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  static devUrl = environment.devUrl;

  constructor(private storageService: StorageService) {
  }

}
