import { Component } from '@angular/core';
import { Filter, Requester } from './requester';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
  warehouseman: any = true;
  filters: Filter = {
  }

  // formatCurrency() {
  //   console.log(this.priceItem);
  //   const priceFloat = parseFloat(this.priceItem);
  //   const formattedValue = priceFloat.toLocaleString('pt-BR', {
  //     style: 'currency',
  //     currency: 'BRL',
  //   });
  //   this.priceItem = formattedValue;
  //   console.log(formattedValue);
  // }
}
