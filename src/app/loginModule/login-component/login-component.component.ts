import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
     // this.submitEM.emit(this.form.value);
    }
  }

  @Input() error: string | null;

  //@Output() submitEM = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
