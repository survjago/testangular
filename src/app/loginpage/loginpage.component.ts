import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

 

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {

  constructor(public router: Router) {}
  
  public email = '';
  public password = '';
  public customerArray: any = [];
  public msg = '';
  public msg2 ='';
  public currentcustomer: any;

  ngOnInit() {
    
    this.customerArray = JSON.parse(localStorage.getItem('customerArray')!);
    console.log(localStorage['customerArray']);
  }

  login() {
    
    let customer = this.customerArray.find((customer: any) => customer.email === this.email && customer.password === this.password);
    
    if (customer) {



      
      
      localStorage.setItem('currentcustomer', JSON.stringify(customer));
      this.router.navigate(['dashboard']); 
      alert ('login successfull')
      
      // console.log(customer);
    } else {
      this.msg = 'Invalid email or password';
    }
  }

}
