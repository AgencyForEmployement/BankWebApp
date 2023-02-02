import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../services/payment.services';
@Component({
    selector: 'qr-payment-form',
    templateUrl: './qr-payment-form.component.html',
    styleUrls: ['./qr-payment-form.component.css']
  })
export class QRPaymentFormComponent implements OnInit {
    constructor(private cookieService: CookieService, private paymentService: PaymentService) { }
    payment = {price: "", description: "", account: "170-25874136920-65", receiver: "Agency for employment", client: "", modelAndCall: "97-258147"}
    ngOnInit(): void {
        this.payment.price = this.cookieService.get('price');
        this.payment.description = this.cookieService.get('description');
        this.payment.client = this.cookieService.get('client');
        console.log(this.payment);
        this.paymentForm.controls['client'].setValue(this.payment.client);
        this.paymentForm.controls['description'].setValue(this.payment.description);
        this.paymentForm.controls['price'].setValue(this.payment.price);

    }
    paymentForm: FormGroup = new FormGroup({
        receiver: new FormControl({value: this.payment.receiver, disabled: true}, []),
        account: new FormControl({value: this.payment.account, disabled: true}, []),
        modelAndCall: new FormControl({value: this.payment.modelAndCall, disabled: true}, []),
        client: new FormControl({value: '', disabled: true} , []),
        price: new FormControl({value: '', disabled: true}, []),
        description: new FormControl({value: '', disabled: true}, [])
      })

      pay(){
        this.paymentService.payWithCreditCard(
          {
            "paymentId" : this.cookieService.get('paymentId'),
            "pan" : '75849682465781000',
            "securityCode" : '5555',
            "cardHolderName" : 'Andrijana',
            "dateExpiration": '02/02/2023',
            "description": this.paymentForm.controls['description'].value?.toString(),
            "amount" : this.paymentForm.controls['price'].value?.toString(),
           // "successUrl": this.cookieService.get('successUrl')?.toString(),
           "successUrl": "http://localhost:4200/paypal-success",
            "failedUrl" : this.cookieService.get('failedUrl')?.toString(),
            "errorUrl" : this.cookieService.get('errorUrl')?.toString(),
          }
        ).subscribe(
          response => {
            alert(response)
            window.location.href = response;
          }
        );
      }

}