
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from "src/app/core/auth/auth.service";


@Component({
  templateUrl:'./signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SingnInComponent implements OnInit{

  loginForm: FormGroup;
 @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
               private authService :AuthService,
               private formBuilder: FormBuilder,
               private router: Router

              ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
       userName: ['',Validators.required],
       password: ['',Validators.required]
    })


  }

  login(){


    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
        .authenticate(userName,password)
        .subscribe(
                    () => this.router.navigate(['user' , userName]),
                    err=>{
                              console.log(err);
                              this.loginForm.reset();
                              this.userNameInput.nativeElement.focus();
                              alert('Ivalid user name or password');

                    });
  }

}
