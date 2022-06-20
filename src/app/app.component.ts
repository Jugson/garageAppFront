import { Component } from '@angular/core';
import { GarageService } from './garage.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GarageService ] //providers qui est un tableau, il va utilisé la dependence de Garage service
})
export class AppComponent implements OnInit {
  title = 'garageAppFront';
  cars: any

  constructor(private garageService: GarageService){

  }

  ngOnInit(): void {
      console.log('On init....')
      this.garageService.getCars().subscribe((datas) => {this.cars = datas ;
      })
  }
}
