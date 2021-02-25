import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Imodels } from '../models/Imodels.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlenderService {

  constructor(private http:HttpClient) {
    }
   
    getAllModels(): Observable<Imodels[]> {
      return this.http.get('data/models.json').pipe(
        map(data=>{
          const modelsArray: Array<Imodels> = [];
          for (const id in data) {
            if (data.hasOwnProperty(id)) {
              modelsArray.push(data[id]);
            } 
          }
          return modelsArray;
        })
      );
    }
}
