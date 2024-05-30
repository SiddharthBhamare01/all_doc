import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { authGuard } from './guards/auth.guard';
import { EmployeeComponent } from './components/employee/employee.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'edit', component: EditProfileComponent, canActivate: [authGuard] },
    { path: 'life', component: LifeCycleComponent, canActivate: [authGuard] },
    { path: 'employee', component: EmployeeComponent, canActivate: [authGuard] },
    { path: 'logout', component: LogoutComponent, canActivate: [authGuard] },
    { path: 'home', redirectTo: '' },
    { path: '', component: HomeComponent },
    { path: '**', component: Page404Component }
];







// import { Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
// import { ProfileComponent } from './components/profile/profile.component';
// import { LifeCycleComponent } from './life-cycle/life-cycle.component';
// import { HomeComponent } from './components/home/home.component';
// import { Page404Component } from './page404/page404.component';
// import { LogoutComponent } from './components/logout/logout.component';

// export const routes: Routes = [
//     { path: 'login', component: LoginComponent },
//     { path: 'register', component: RegisterComponent },
//     { path: 'profile', component: ProfileComponent },
//     { path: 'life', component: LifeCycleComponent },
//     { path: 'logout', component: LogoutComponent },
//     { path: 'home', redirectTo: '' },
//     { path: '', component: HomeComponent },
//     { path: '**', component: Page404Component }
// ];






// import { Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
// import { ProfileComponent } from './components/profile/profile.component';
// import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
// import { HomeComponent } from './components/home/home.component';
// import { Page404Component } from './components/page404/page404.component';
// import { LogoutComponent } from './components/logout/logout.component';
// import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
// import { authGuard } from './guards/auth.guard';

// export const routes: Routes = [
//     { path: 'login', component: LoginComponent },
//     { path: 'register', component: RegisterComponent },
//     { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
//     { path: 'edit', component: EditProfileComponent, canActivate: [authGuard] },
//     { path: 'life', component: LifeCycleComponent, canActivate: [authGuard] },
//     { path: 'logout', component: LogoutComponent },
//     { path: 'home', redirectTo: '' },
//     { path: '', component: HomeComponent },
//     { path: '**', component: Page404Component }
// ];




