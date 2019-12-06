import { Injectable } from '@angular/core';
import { AppDataService } from './app-data.service';
import { from } from 'rxjs';


export type URL_KEYS =
	//account
	'login' | 'signup';
const UrlMapping = {

	login: { url: AppDataService.devUrl + '/kissUrCups/account/login', showMsg: true },
	signup: { url: AppDataService.devUrl + '/kissUrCups/account/signUp', showMsg: false },
};

export class RequestUrl {

	static get(key: URL_KEYS): any {
		return UrlMapping[key];
	}
}
