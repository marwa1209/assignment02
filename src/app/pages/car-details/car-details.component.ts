import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from 'src/app/shared/interfaces/car-model';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent {
  carId: string = '';
  car: CarModel = null;
  isLoading:boolean = false;
  //injected services
  private carService: CarsService = inject(CarsService);
  private _Route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.carId = this._Route.snapshot.paramMap.get('id')!;
    this.getCarDetails();
  }

  getCarDetails() {
    this.isLoading = true;
    this.carService.getCarById(this.carId).subscribe({
      next: (res) => {(this.car = res),this.isLoading=false;},
      error: (error) => this.isLoading=false,
      complete: () => {this.isLoading = false;},
    });
  }
}
