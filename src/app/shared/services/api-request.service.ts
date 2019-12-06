import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_KEYS, RequestUrl } from './request-url.service';
import { BehaviorSubject } from 'rxjs';
import { TosterService } from 'src/app/core/services/toster.service';


@Injectable({
	providedIn: 'root'
})
export class ApiRequestService {

	constructor(private httpClient: HttpClient, public tosterService: TosterService,) { }

	get(url: URL_KEYS, query = '', headers?) {
		return new Promise((resolve, reject) => {
			const reqUrlOptions = RequestUrl.get(url);
			this.httpClient.get(reqUrlOptions.url + `${query}`, { observe: 'response', headers }).subscribe((response) => {
				resolve(this.responseHandler(response, reqUrlOptions));
			},(error) => {
				// console.log(error);
				reject(error);
			});
		});

	}

	post(url: URL_KEYS, body, headers?) {
		return new Promise((resolve, reject) => {
			const reqUrlOptions = RequestUrl.get(url);
			this.httpClient.post(reqUrlOptions.url, body, { observe: 'response', headers }).subscribe((response) => {
				resolve(this.responseHandler(response, reqUrlOptions));
			},(error) => {
				reject(error);
			});
		});
	}

	put(url: URL_KEYS, body, headers?) {
		return new Promise((resolve, reject) => {
			// console.log('in PUT function');
			const reqUrlOptions = RequestUrl.get(url);
			return this.httpClient.put(reqUrlOptions.url,body, { observe: 'response', headers }).subscribe((response) => {
				resolve(this.responseHandler(response, reqUrlOptions));
			},(error) => {
				reject(error);
			});
		});
	}

	async responseHandler(response, reqUrlOptions) {
		if (Math.floor(response['status'] / 100) === 2 && reqUrlOptions.showMsg) {
			console.log('HttpResponse::event =', response, ';');
			await this.tosterService.presentToast(response['body']['message'],2000);
		} else {
			console.log('event =', response, ';');
		}
		return response;
	}
}
