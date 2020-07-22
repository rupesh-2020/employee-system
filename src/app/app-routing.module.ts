import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const routes: Routes = [
   { path: '', component: HomeComponent, canActivate: [AuthGuard]},
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
  { path: 'side-bar', component: SidebarComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
