import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginModel } from 'src/app/models/shared/login-model';
import { UserModel } from 'src/app/models/user/user-model';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private currentUserSubject: BehaviorSubject<UserModel>;
    public currentUser: Observable<UserModel>;
  constructor(private http: HttpClient) {
     this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
     this.currentUser = this.currentUserSubject.asObservable();

   }

   public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }
  login(loginModel :LoginModel) {
    return this.http.post<UserModel>(`/users/authenticate`, {loginModel})
      /*  .pipe(
         map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.getToken()) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        })); */
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

}
