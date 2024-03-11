import { Component, OnInit } from '@angular/core';
import { TesteService } from '../teste.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})

export class TestePage implements OnInit {

  public cars : any;
  constructor(private testeService : TesteService) { }

  ngOnInit() {


    this.testeService.getCars().subscribe(

      (value: any) => this.cars = value,
      (e: any) => console.log(e)
    

    )

  }

}
