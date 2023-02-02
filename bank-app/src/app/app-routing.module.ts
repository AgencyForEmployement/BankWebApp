import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QRCodeBankComponent } from './components/qr-code/qr-code.component';
import { QRPaymentFormComponent } from './components/qr-payment-form/qr-payment-form.component';

const routes: Routes = [
  { path: 'qr-code', component:QRCodeBankComponent },
  { path: 'qr-payment-form', component:QRPaymentFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
