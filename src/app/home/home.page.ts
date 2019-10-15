import { Component } from '@angular/core';
import { CryptoService} from '../crypto.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  coinID: string;
  coinName: string;
  price: string;


  constructor(public crypto: CryptoService, public router: Router) {
    this.newCoin();
  }

  newCoin() {
    this.crypto.getCoin().subscribe(data => {
      console.log(this.coinID);
      this.coinName = data.coin_name;
      this.price = data.last_price;
      
    })
  }
  // SaveInput() {
  //   this.router.navigate(['/name/' + this.coinID]);
  // }
 

}

