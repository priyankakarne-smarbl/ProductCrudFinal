import { Component } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm!: FormGroup; 
  
  errorMsg="";

  
  constructor(private formBuilder : FormBuilder,private modalService: NgbModal,private router:Router,private auth:AuthService,private toastr: ToastrService){

  }
  ngOnInit():void {
    this.loginForm = new FormGroup({
      id:new FormControl("",),
      emailadd: new FormControl(null , [Validators.required,Validators.email]),
      loginpassword : new FormControl(null,[Validators.required,Validators.maxLength(5)])
    })
  }


login(){
  if(this.loginForm.valid){
  let requestBody={
    "email":this.loginForm.get('emailadd')?.value,
    "password":this.loginForm.get('loginpassword')?.value
  }

this.auth.loginService(requestBody).subscribe(res =>{
  if(res.status == "200 OK"){
    this.router.navigate(['/product']);
  }
  
},(error: any) =>{
  console.log(error);
})

    }}




}
