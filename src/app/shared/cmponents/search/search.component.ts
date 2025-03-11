import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchQuery: string = '';
  //injected services
  private _Router: Router = inject(Router);
  search() {
    if (this.searchQuery.trim()) {
      this._Router.navigate(['/car-list'], {
        queryParams: { search: this.searchQuery },
      });
    }
  }
}
