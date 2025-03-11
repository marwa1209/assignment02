import { Component, inject, OnInit } from '@angular/core';
import { BlackArrowIconComponent } from 'src/app/shared/icons/black-arrow/black-arrow-icon.component';
import { CarModel } from 'src/app/shared/interfaces/car-model';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  selector: 'app-most-popular-cars',
  templateUrl: './most-popular-cars.component.html',
})
export class MostPopularCarsComponent implements OnInit {
  LimitedCars: CarModel[] = [];
  appIconBlackArrow = BlackArrowIconComponent;
  _CarService: CarsService = inject(CarsService);
  ngOnInit() {
    this.getLimitedcars();
  }
  getLimitedcars() {
    this._CarService.getLimitedCars().subscribe({
      next: (res) => (this.LimitedCars = res),
      error: (error) => console.error('Error:', error),
      complete: () => console.log('All cars retrieved successfully!'),
    });
  }

}
