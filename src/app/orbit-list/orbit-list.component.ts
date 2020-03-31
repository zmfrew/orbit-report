import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[]

  constructor() { }

  ngOnInit() {
  }

  sort(column: string) {
    this.satellites.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1
      } else if (a[column] > b[column]) {
        return 1
      }
      return 0
    })
  }
}
