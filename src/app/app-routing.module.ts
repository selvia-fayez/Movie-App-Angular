import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomerrorComponent } from './customerror/customerror.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'AboutUs', canActivate: [AuthGuard], component: AboutUsComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  {
    path: 'moviedetails/:id/:media_type',
    canActivate: [AuthGuard],
    component: MoviedetailsComponent,
  },
  { path: 'tv', canActivate: [AuthGuard], component: TvComponent },
  { path: 'people', canActivate: [AuthGuard], component: PeopleComponent },
  {
    path: 'favourites',
    canActivate: [AuthGuard],
    component: FavouritesComponent,
  },
  { path: 'header', canActivate: [AuthGuard], component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: CustomerrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
