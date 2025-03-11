import { Component, Input } from '@angular/core';
import { ArrowIconComponent } from '../../icons/arrow/arrow-icon.component';
import { CarModel } from './../../interfaces/car-model';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
})
export class AllCarsComponent {
  appIconArrow = ArrowIconComponent;
  @Input() Cars: CarModel[]=[];

}
