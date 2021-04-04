import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user/user-model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResisterService {

  private currentUserSubject: BehaviorSubject<UserModel>;
    public currentUser: Observable<UserModel>;

  register(user :UserModel){

    console.log(JSON.stringify(user));
    return this.http.post<UserModel>(`/register`, JSON.stringify(user),{headers: {'Content-Type': 'application/json'} })

  }

  constructor(private http: HttpClient) { }
}
