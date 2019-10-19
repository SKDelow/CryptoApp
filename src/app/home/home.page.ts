import { Component } from '@angular/core';
import { CryptoService} from '../crypto.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ID: string;
  coinName: string;
  price: string;
  currency: string;


  constructor(public crypto: CryptoService) {
    // this.newCoin();
    
  }

  newCoin() {
    this.crypto.coinId = this.ID;
    this.crypto.getCoin().subscribe(data => {
      console.log(data);
      this.coinName = data.coin_name;
      this.price = data.last_price + " " + data.currency;
      
    })
  }
}

