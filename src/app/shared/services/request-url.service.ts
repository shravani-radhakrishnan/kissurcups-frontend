import { Injectable } from '@angular/core';
import { AppDataService } from './app-data.service';
import { from } from 'rxjs';


export type URL_KEYS =
	//account
	'login' | 'signup' | 'resetPassword'|
	// outlets
	'getOutlets' | 'getOutletTables';
const UrlMapping = {

	login: { url: AppDataService.devUrl + '/kissUrCups/account/login', showMsg: true },
	signup: { url: AppDataService.devUrl + '/kissUrCups/account/signUp', showMsg: false },
	resetPassword: { url: AppDataService.devUrl + '/kissUrCups/account/resetPassword', showMsg: true },
	getOutlets: { url: AppDataService.devUrl + '/kissUrCups/outlet/getOutlets', showMsg: false },
	getOutletTables:{url:AppDataService.devUrl + '/kissUrCups/outlet/getOutletTables',showMsg:false},
};

export class RequestUrl {

	static get(key: URL_KEYS): any {
		return UrlMapping[key];
	}
}
