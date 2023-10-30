import { Component } from '@angular/core';
import { Requester } from '../warehouse/warehouse.model';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent {
  warehouseman = true;
  items: Array<Requester> = [
    {
      id: 1,
      name: 'Marcelo',
      item: {
        description: 'Uma caneta de cor preta',
        price: '25,80',
        status: true,
        observation: 'Eu não gostei desse'
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
}
