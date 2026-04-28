import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route:ActivatedRoute){
    super(locator.endpoints.VENUE, locator, route);
  }

}
