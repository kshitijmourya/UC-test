import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BusinessSearchService } from '../business.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Bcity;
  businessdetails;
  Bdata;
  @Output() public childEvent = new EventEmitter();
  constructor(private _businessService : BusinessSearchService) { }

  ngOnInit() {
    this._businessService.getBusinessesData()
    .subscribe((data)=>{
      this.businessdetails = data;

    });
  }

  checkDetails(){
    this.Bdata={
      cityB: this.Bcity
    }
    this.childEvent.emit(this.Bdata);
      console.log(this.Bdata);
  }
}
