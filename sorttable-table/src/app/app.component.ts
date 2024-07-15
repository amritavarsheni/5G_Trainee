import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

interface Person {
  name: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule, MatPaginatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  people: Person[] = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'Los Angeles' },
    { name: 'Paul', age: 20, city: 'Chicago' },
    { name: 'Anna', age: 35, city: 'San Francisco' },
    { name: 'Mike', age: 40, city: 'Boston' },
    { name: 'Chris', age: 22, city: 'Austin' },
    { name: 'Sara', age: 28, city: 'Denver' },
    { name: 'Kate', age: 32, city: 'Seattle' },
    { name: 'James', age: 45, city: 'Dallas' },
    { name: 'Laura', age: 27, city: 'Atlanta' }
  ];

  sortedColumn: keyof Person = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';
  pageSize: number = 5;
  currentPage: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.sortData();
  }

  sort(column: keyof Person) {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.sortData();
  }

  sortData() {
    this.people.sort((a, b) => {
      if (a[this.sortedColumn] < b[this.sortedColumn]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (a[this.sortedColumn] > b[this.sortedColumn]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  get paginatedPeople() {
    const startIndex = this.currentPage * this.pageSize;
    return this.people.slice(startIndex, startIndex + this.pageSize);
  }

  handlePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
  }
}
