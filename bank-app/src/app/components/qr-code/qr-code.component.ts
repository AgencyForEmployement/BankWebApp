import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
    selector: 'qr-code',
    templateUrl: './qr-code.component.html',
    styleUrls: ['./qr-code.component.css']
  })
export class QRCodeBankComponent implements OnInit {
    constructor(private cookieService: CookieService) { }
    payment = {price: "", description: "", account: "170-25874136920-65", receiver: "Agency for employment", client: "", modelAndCall: "97-258147"}
    pib = ""


    ngOnInit(): void {
         setTimeout(()=>{
             this.payment.price = this.cookieService.get('price')
             this.payment.description = this.cookieService.get('description')
             this.payment.client = this.cookieService.get('client')
         }, 10);
         console.log(this.payment);
      }
}