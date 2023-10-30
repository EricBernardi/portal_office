import { Component } from '@angular/core';
import { Filter } from './filters.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  filters: Filter = {
  }


statusOptions = [
  {id: 0, status: 'Aprovado'},
  {id: 1, status: 'Reprovado'}
]

}
