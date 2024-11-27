import { Routes} from '@angular/router';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: '',component:SignuppageComponent},
    {path: 'login',component:LoginpageComponent},
    {path: 'dashboard',component:DashboardComponent},
    {path: 'profile', component:ProfileComponent},

    
];
