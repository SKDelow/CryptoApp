import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crypto } from './interfaces/crypto.interface';
import { ActivatedRoute } from '@angular/router';


import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  coinId: string;
  key: string = "20fcdd52b2mshf4961abb201f5d9p10c86ejsn2ad5790f676f";
  host: string = "bravenewcoin-v1.p.rapidapi.com";
  url: string = "https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=" + this.coinId;
  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  
  getCoin() {
    this.coinId = this.route.snapshot.paramMap.get("coin");
    let headers = {
      headers: new HttpHeaders({
        "x-rapidapi-host": this.host,
        "x-rapidapi-key": this.key,
        // "accept"          : "application/json"
      })
    }
    return this.http.get<Crypto>(this.url, headers);
  }

}
