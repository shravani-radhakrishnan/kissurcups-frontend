import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loader;
	constructor(public loadingController: LoadingController) {
		console.log('LOADER CONST');
	 }

	async showLoader(message = '') {
		console.log('LOADER START');
		return new Promise((resolve, reject) => {
			if (!this.loader) {
				this.loader = this.loadingController.create({
					message: message,
					cssClass: message === '' ? 'custom-loading' : ''
				}).then((res) => {
					res.present();
					console.log(this.loader);
					res.onDidDismiss().then((dis) => {
						console.log('Loading dismissed!');
					});
					resolve('start');
				}).catch(() => {
					reject('stop');
				});
			} else {
				resolve('start');
			}
		});
	}

	hideLoader() {
		console.log('LOADER END');
		try {
			// if (this.loader !== null) {
				this.loadingController.dismiss();
				this.loader = null;
			// }
		} catch (error) {
			console.log('already dismissed.');
		}
	}
}
