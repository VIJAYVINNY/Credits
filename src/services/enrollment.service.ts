import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user';



@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url='http://localhost:3000/details';
  constructor(private _http:HttpClient) { }
enroll(user:User){
 return this._http.post(this._url,user)
}

}
