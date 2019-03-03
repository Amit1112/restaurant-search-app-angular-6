import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './services/restaurant.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  restros =[];
  start = 10;
  end = 20;
  constructor(private restaurantService : RestaurantService){ }

  ngOnInit() {
    this.loadAllRestros();
  }

  private loadAllRestros() {
    this.restaurantService.fetchRestrauantList().pipe(first()).subscribe(data => { 
        this.restros = data.slice(0,1000); 
    });
  }
}
