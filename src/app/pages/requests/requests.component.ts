import { Component } from '@angular/core';
import { Requester } from './requests';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent {

  filledFields = false;
  user: Requester = {
    id: 0,
    nameUser: '',
    item: {
      descriptionItem: '',
      priceItem: ''
    }
  }
  statusOptions = [
    {id: 0, status: 'Aprovado'},
    {id: 1, status: 'Reprovado'}
  ]

  areFieldsFilled(): boolean {
    const { nameUser, item } = this.user;
    return nameUser.trim() !== '' && item.descriptionItem.trim() !== '' && item.priceItem.trim() !== '';
  }

}
