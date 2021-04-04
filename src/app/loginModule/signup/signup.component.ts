import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { UserModel } from 'src/app/models/user/user-model';
import { ResisterService } from 'src/app/services/shared/register/resister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private loginUrl:String="auth/login";
  private errorurl : String = '/errorPage'; 


  private  payload:UserModel = new UserModel();
  signupform :FormGroup = new FormGroup({
    firstName: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl('',[
        ]),
    email: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(7),
    ]),
    phoneNumber: new FormControl('',[
       ]),
  });

  submit() {
     if(this.signupform.valid){
      this.payload.setUsername(this.signupform.get('email').value);
      this.payload.setRole("User");
      this.payload.setPassword(this.signupform.get("password").value);
     this.registerService.register(this.payload).subscribe(  data => {
      this.router.navigate([this.loginUrl]);
  },
  error => {
    this.router.navigate([this.errorurl]);
     // this.alertService.error(error);
     // this.loading = false;
  });


    }

  }

  constructor(private registerService : ResisterService,  private router: Router ) { }

  ngOnInit(): void {
  }
  @Input() error: string | null;

}
