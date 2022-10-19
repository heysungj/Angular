import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';
@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
// create an array of objects
    salesPersonList: SalesPerson[] = [
      new SalesPerson('Anup', 'Kumar', 'anup.kumar@gmail.com', 5000),
      new SalesPerson('John', 'Dow', 'john.dow@gmail.com', 5000),
      new SalesPerson('clark', 'king', 'clark.king@gmail.com', 4000),
      new SalesPerson('Mai', 'Truong', 'mai.troung@gmail.com', 6000),
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
