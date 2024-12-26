import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private readonly _httpClinet = inject(HttpClient);

  setRegisterForm(data:object):Observable<any>
  {
    return this._httpClinet.post("https://localhost:7218/api/account/register", data);
  }
  setLoginForm(data:object):Observable<any>
  {
    return this._httpClinet.post("https://localhost:7218/api/account/login", data);
  }
}
