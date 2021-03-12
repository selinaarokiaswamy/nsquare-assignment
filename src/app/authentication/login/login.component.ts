import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginRequestModel } from 'src/app/models/authentication.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginObj: LoginRequestModel = {
    email: '',
    password: ''
  }
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitForm(loginForm){
    console.log(loginForm)
    this.authService.userLogin(loginForm.value)
    .subscribe(data =>{
      console.log(data);

      if(data.status == 200){
        this.router.navigate(['/work/orderList'])
      }
    }, error =>{
      swal.fire("Error Occured", error.error.message, "error");

    })
  }

}
