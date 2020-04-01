import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[]

  constructor() { }

  ngOnInit() {
  }

  count(type: string): number {
    return this.satellites.reduce((sum: number, satellite: Satellite) => {
      if (satellite.type.toLowerCase() === type.toLowerCase() || type === '') {
        return sum += 1
      } else {
        return sum
      }
    }, 0)
  }
}
