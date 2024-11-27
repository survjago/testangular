import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  public currentcustomer: any = {};  

  constructor(private router: Router) {}  

  ngOnInit() {
    this.currentcustomer = JSON.parse(localStorage.getItem('currentcustomer')!);
    console.log(this.currentcustomer.fullname);   
  }

  onProfilePictureChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.currentcustomer.profilePicture = e.target.result;
        localStorage.setItem('currentcustomer', JSON.stringify(this.currentcustomer));
      };

      reader.readAsDataURL(file);
    }
  }



  
  goToProfile() {
    console.log('Profile picture clicked!');
    this.router.navigate(['/profile']);
  }

  logout() {
    localStorage.removeItem('currentstudent');
    console.log('User logged out.');
    this.router.navigate(['/studentsignin']);
  }

  goToResetPassword() {
    this.router.navigate(['/reset-password']); 
  }



}
