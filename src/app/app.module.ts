import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerrorComponent } from './customerror/customerror.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchPipe } from './pipes/search.pipe';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { MediaitemComponent } from './mediaitem/mediaitem.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerrorComponent,
    HomeComponent,
    MoviedetailsComponent,
    LoginComponent,
    RegisterComponent,
    SearchPipe,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    MediaitemComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
