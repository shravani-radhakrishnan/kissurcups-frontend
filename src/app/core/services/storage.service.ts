import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, item: any) {
		sessionStorage.setItem(key, JSON.stringify(item));
	}
	getItem(key: string) {
		return JSON.parse(sessionStorage.getItem(key));
  }

	clearStorage() {
		sessionStorage.clear();
	}

	removeItem(key: string) {
		sessionStorage.removeItem(key);
	}

}
