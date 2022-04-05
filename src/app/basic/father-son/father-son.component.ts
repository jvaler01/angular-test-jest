import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../interfaces';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styleUrls: ['./father-son.component.css']
})
export class FatherSonComponent implements OnInit {

  @Input()
  client?: Client;
  @Output() 
  onClientUpdated = new EventEmitter<Client>();
  @Output() 
  onClientDeleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.client = undefined;
    this.onClientDeleted.emit();
  }

  onChange( id: number){
    if( !this.client ) return;
    this.client = {
      ...this.client,
      id
    }
    this.onClientUpdated.emit({ ...this.client });
  }
}
