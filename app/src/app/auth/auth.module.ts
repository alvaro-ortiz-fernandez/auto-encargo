import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
