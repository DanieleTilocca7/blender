import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Imodels } from '../Imodels.interface';

@Component({
  selector: 'app-models-card',
  templateUrl: './models-card.component.html',
  styleUrls: ['./models-card.component.scss']
})
export class ModelsCardComponent  {
  @Input()
  model!: Imodels;   
}
