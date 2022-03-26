import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

  persons: Person[] = [];
  @ViewChild('name') name?: ElementRef;
  @ViewChild('age') age?: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  addPerson() {
    const name = this.name?.nativeElement.value;
    const age = this.age?.nativeElement.value;
    // this.persons.push(new Person(name, age));
    this.persons = [...this.persons, new Person(name, age)];
  }
}
