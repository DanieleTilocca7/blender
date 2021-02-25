import { Component, OnInit } from '@angular/core';
import { BlenderService } from 'src/app/services/blender.service';
import { Imodels } from '../Imodels.interface';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.css']
})
export class ModelsListComponent implements OnInit {
  
  models: Array<Imodels>;

  constructor(private blenderService:BlenderService) { 
    this.models=[];
  }

  ngOnInit(): void {

    this.blenderService.getAllModels().subscribe(
      data=>{
         this.models=data;
        console.log(data);
         }, error=>{
           console.log(error);
         }
    )
    }
  }

