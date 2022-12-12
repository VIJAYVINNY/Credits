import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/details";

  getContacts() {

    let httpHeaders=new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'ContactDetails'
  });

    return this.http.get(this.url,{headers:httpHeaders});
  }

/**POST  */
  postDetails(data: any) {
    return this.http.post(this.url, data)
  }

/**PUT Method Code */

  // updateContact(detailsId, updateBody) {
  //   const endURL = "http://localhost:3000/details/" + detailsId;
  //   return this.http.put(endURL, updateBody);
  // }

/**Delete Method */
   // deleteContact(detailsId) {
  //   const endURL = "http://localhost:3000/details/" + detailsId;
  //   return this.http.put(endURL);
  // }



  // createContact(resourse){
  //   return this.httpClient.post('http://localhost:3000/details',resourse);
  // }
}
