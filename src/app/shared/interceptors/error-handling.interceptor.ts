import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { TosterService } from '../../core/services/toster.service';
import { StorageService } from '../../core/services/storage.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private tosterService: TosterService, public router: Router, private route: ActivatedRoute, private storage: StorageService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (Math.floor(err.status / 100) === 4) {
                //client err handling
                if (err.status === 401) {
                    // Token expired
                    console.log("go to login", err.error.message);
                    this.storage.clearStorage();
                    this.route.params.subscribe(params => {
                        this.router.navigate(['/login']);
                        this.storage.clearStorage();
                    })
                }
                if(err.status === 409){
                    console.log("409",err.status);
                        
                    // if user not registered to app
                    if(err.error.message =="Please sign up for a kissUrCups account"){
                        console.log(err.message);
                        
                        this.route.params.subscribe(params => {
                            this.router.navigate(['/signup']);
                            this.storage.clearStorage();
                        })
                    }else{
                        // if exsiting user trying to signup
                        console.log(err.message);
                        this.route.params.subscribe(params => {
                            this.router.navigate(['/login']);
                            this.storage.clearStorage();
                        })
                    }
                    
                }
                this.tosterService.presentToast(err.error.message,2000);
            }
            if (Math.floor(err.status / 100) === 5) {
                //server err handling
                this.tosterService.presentToast(err.error.message,2000);
            }

            console.log(err);
            return throwError(err);
        }))
    }
}
