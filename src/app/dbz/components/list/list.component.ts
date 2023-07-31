import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4  as uuid} from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public deleteCharacterById:EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList:Character[]=[{
    id: uuid(),
    name:'Trumk',
    power:10
  }]

  onDeleteIndex(id:string):void{
    //todo emitir el id del personaje
    console.log(id);
    this.deleteCharacterById.emit(id);
  }
}

