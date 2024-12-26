import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../Services/auth-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private readonly _authService = inject(AuthServiceService);
  private readonly _router = inject(Router);

  msgError:string = "";
  isLoading:Boolean = false;
  registerForm: FormGroup = new FormGroup({
    displayName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
    ]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern("^(002)?(01)[0125][0-9]{8}$")
    ])
  })

  registerSubmit():void
  {
    if(this.registerForm.valid){
      this.isLoading = true;
      this._authService.setRegisterForm(this.registerForm.value).subscribe({
        next:(res) => {
          console.log(res);
          this._router.navigate(['/Login'])
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
