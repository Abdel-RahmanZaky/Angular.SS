import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../Services/auth-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly _authService = inject(AuthServiceService);
  private readonly _router = inject(Router);
  msgError:string = "";
  isLoading:Boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
    ])
  })

  loginSubmit():void
  {
    if(this.loginForm.valid){
      this.isLoading = true;
      this._authService.setLoginForm(this.loginForm.value).subscribe({
        next:(res) => {
          console.log(res);
          this._router.navigate(['/Student'])
          this.isLoading = false;
        },

        error:(err:HttpErrorResponse) => {
          this.msgError = err.error.message
          console.log(err);
          this.isLoading = false;
        }
      });
    }
  }

}
