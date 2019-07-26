import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {
  listingId: string;
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(
        filter(params => params.listingId))
      .subscribe(params => {
        this.listingId = params.listingId;
      });
  }

}
