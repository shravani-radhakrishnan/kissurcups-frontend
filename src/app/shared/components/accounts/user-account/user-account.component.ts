import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../core/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent implements OnInit {

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() { }

  getUserType(userType) {
    console.log(userType);
    this.storageService.setItem('userType', userType);
    this.router.navigate(['account/login']);
  }

}
