import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RouterLink, } from '@angular/router';


@Component({
  selector: 'app-signuppage',
  standalone: true,

  imports: [FormsModule, RouterLink],
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {
  public constructor(private router: Router) { }
  
  public fullname: string = '';
  public email: string = '';
  public password: string = '';
  public phonenumber: string = '';
  public selectedAccount: string = '';
  public nextofkin: string = '';
  
  public gender: string = '';
  public dob: string = '';
  public customerArray: any[] = [];
  
  public image:any


  ngOnInit(){
    if (localStorage['customerArray']){
      this.customerArray=JSON.parse(localStorage.getItem('customerArray')!)

      // console.log('dfgggggggg');
      
      
    }
  }


  onClassChange() {
    
    this.selectedAccount = ['checking', 'savings '].includes(this.selectedAccount) ? this.selectedAccount : '';
  }




  signup(){

    const generateAccountNumber = () => {
      return Math.floor(1000000000 + Math.random() * 9000000000).toString();
    };
  


    const accountNumber = generateAccountNumber();


    let customerobj={
      





      
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      phone: this.phonenumber,
      account: this.selectedAccount,
      accountNumber: accountNumber,
      nextofkin: this.nextofkin,
      
      gender: this.gender,
      dob: this.dob,
      image:this.image

    }

    console.log(customerobj);
    this.customerArray.push(customerobj)
    localStorage.setItem('customerArray',JSON.stringify(this.customerArray))
    this.router.navigate(['/login'])
    alert ('signup successfull, your account number is ' + accountNumber)

    
  }



  }







