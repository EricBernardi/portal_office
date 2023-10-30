import { Component } from '@angular/core';
import { Requester } from './warehouse.model';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent {

  warehouseman: any = true;

  items: Array<Requester> = [
    {
      id: 1,
      name: 'Marcelo',
      item: {
        description: 'Uma caneta de cor preta',
        price: '25,80',
        status: true,
      },
    },
    {
      id: 2,
      name: 'Ana',
      item: {
        description: 'Uma borracha branca',
        price: '6,80',
        status: false,
      },
    },
    {
      id: 3,
      name: 'Paula',
      item: {
        description: 'Um lápis colorido',
        price: '2,40',
        status: false,
      },
    },
    {
      id: 3,
      name: 'Paula',
      item: {
        description: 'Um lápis colorido',
        price: '2,40',
        status: false,
      },
    },
    {
      id: 3,
      name: 'Paula',
      item: {
        description: 'Um lápis colorido',
        price: '2,40',
        status: false,
      },
    },{
      id: 3,
      name: 'Paula',
      item: {
        description: 'Um lápis colorido',
        price: '2,40',
        status: false,
      },
    },
  ];

  statusOptions = [
    {id: 0, status: 'Aprovado'},
    {id: 1, status: 'Reprovado'}
  ]

  areFieldsFilled(status: any, observation: any): boolean {
    return status && observation.trim() !== '' || !status && observation.trim() === '';
  }
}
