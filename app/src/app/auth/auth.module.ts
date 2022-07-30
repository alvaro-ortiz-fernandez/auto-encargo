import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent
  ],
  imports: [
    AuthRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
