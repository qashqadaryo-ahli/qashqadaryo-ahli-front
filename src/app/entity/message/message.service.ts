import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public http: HttpClient,
    ) { }
  api =  environment.baseUrl + "/api/xabar"

  getAll(): Observable<any>{
    return this.http.get<any>(this.api)
  }
  create(xabar: any): Observable<any>{
    return this.http.post(this.api, xabar)
  }
  update(xabar: any): Observable<any>{
    return this.http.put(this.api, xabar);
  }
  delete(id: number): Observable<any>{
    return this.http.delete(this.api + "/" + id);
  }
}
