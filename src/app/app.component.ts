import { Component } from '@angular/core';
import { Satellite } from './satellite'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayList: Satellite[]
  sourceList: Satellite[]
  title = 'orbit-report';

  constructor() {
    this.displayList = []
    this.sourceList = [];
    const satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function (response) {
      response.json().then(function (data) {
        const fetchedSatellites = data.satellites;
        this.sourceList = fetchedSatellites.map(fetchedSatellite => {
          return new Satellite(fetchedSatellite.launchDate, fetchedSatellite.name, fetchedSatellite.orbitType, fetchedSatellite.operational, fetchedSatellite.type)
        })
        this.displayList = this.sourceList
      }.bind(this));
    }.bind(this));
  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i = 0; i < this.sourceList.length; i++) {
      let satellite = this.sourceList[i];
      if (satellite.name.toLowerCase().indexOf(searchTerm) >= 0 ||
        satellite.orbitType.toLowerCase().indexOf(searchTerm) >= 0 ||
        satellite.type.toLowerCase().indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
      }
    }
    // assign this.displayList to be the the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
  }
}
