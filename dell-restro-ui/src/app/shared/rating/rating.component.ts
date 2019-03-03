import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input()
  rating: number;

  stars: number[];

  constructor() { 
    
  }

  ngOnInit() {
     this.stars = Array(Math.floor(this.rating)).fill(1);
  }

}
