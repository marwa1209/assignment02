import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MostPopularCarsComponent } from './components/most-popular-cars/most-popular-cars.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { LogoIconComponent } from './shared/icons/logo/logo-icon.component';
import { ButtonComponent } from './shared/cmponents/button/button.component';
import { LayerIconComponent } from './shared/icons/layer/layer-icon.component';
import { UnderlineIconComponent } from './shared/icons/under-line/underline-icon.component';
import { AllCarsComponent } from './shared/cmponents/all-cars/all-cars.component';
import { StarIconComponent } from './shared/icons/start/start-icon.component';
import { UserIconComponent } from './shared/icons/user/user-icon.component';
import { CarDoorIconComponent } from './shared/icons/car-door/car-door-icon.component';
import { SnowIconComponent } from './shared/icons/snow/snow-icon.component';
import { AutoIconComponent } from './shared/icons/auto/auto-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './shared/cmponents/search/search.component';
import { LocationIconComponent } from './shared/icons/location/location-icon.component';
import { TextBoxComponent } from './shared/cmponents/text-box/text-box.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { Layer2IconComponent } from './shared/icons/layer-2/layer-2-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    MostPopularCarsComponent,
    HowItWorksComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    DownloadAppComponent,
    HomeComponent,
    CarListComponent,
    CarDetailsComponent,
    LogoIconComponent,
    ButtonComponent,
    LayerIconComponent,
    UnderlineIconComponent,
    AllCarsComponent,
    StarIconComponent,
    UserIconComponent,
    CarDoorIconComponent,
    SnowIconComponent,
    AutoIconComponent,
    SearchComponent,
    LocationIconComponent,
    TextBoxComponent,
    NotFoundComponent,
    Layer2IconComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule ,CommonModule ,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
