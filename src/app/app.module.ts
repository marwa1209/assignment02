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
    UnderlineIconComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
