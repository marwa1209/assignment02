import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from 'src/app/shared/interfaces/car-model';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
})
export class CarListComponent {
  AllCars: CarModel[] = [];
  displayedCars: CarModel[] = [];
  loading: boolean = true;
  // Pagination variables
  currentPage: number = 1;
  itemsPerPage: number = 12;
  //injected services
  _CarService: CarsService = inject(CarsService);
  _Route: ActivatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this._Route.queryParams.subscribe((params) => {
      const searchQuery = params['search'] || '';
      this.getAllcars(searchQuery);
    });
  }

  getAllcars(search?: string) {
    this.loading = true;
    this._CarService.getCars(search).subscribe({
      next: (res) => {
        this.loading = false;
        this.AllCars = res;
        this.updateDisplayedCars();
      },
      error: (error) => (this.loading = false),
      complete: () => (this.loading = false),
    });
  }

  updateDisplayedCars() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedCars = this.AllCars.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateDisplayedCars();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedCars();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedCars();
    }
  }

  get totalPages() {
    return Math.ceil(this.AllCars.length / this.itemsPerPage);
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (p, i) => i + 1);
  }
}
