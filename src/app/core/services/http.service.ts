import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiKey: string = environment.api.key;
  apiUrl: string = environment.api.Url;
  token = localStorage.getItem('jwtToken');
  authorizeToken = `Bearer ${this.token}`;
  headers = new HttpHeaders({
    apiKey: this.apiKey,
    Authorization: this.authorizeToken,
  });
  constructor(private http: HttpClient) {}

  post(url: string, body: any) {
    return this.http.post(this.apiUrl + url, body, {
      headers: this.headers,
    });
  }

  get(url: string) {
    return this.http.get(this.apiUrl + url, {
      headers: this.headers,
    });
  }
  delete(url: string) {
    return this.http.delete(this.apiUrl + url, {
      headers: this.headers,
    });
  }
}
