import { Component, OnInit,Input } from '@angular/core';
import { BusinessSearchService } from '../business.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displayDetails: object;
  business=[];
  public headercontainer = false;
  cityB;

@Input('parentData') public BusinessesData;
public DetailsTemp;
    constructor(private _businessService : BusinessSearchService) { }

  ngOnInit() {
    this._businessService.getBusinessesData()
    .subscribe((data)=>{
      this.displayDetails = data;
    })
  }

}
