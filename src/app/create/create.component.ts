import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();
  item: any;

  constructor() {
    this.item = {id:"" , name:"" , age:""};
   }

  ngOnInit(): void {
  }


  addToList(){

    let generatedId = this.generateId();
    this.item = {id: generatedId , name:this.item.name , age : this.item.age}
    console.log("this.item " + JSON.stringify(this.item));
    this.newItemEvent.emit(this.item);
    this.resetForm();
  }
  resetForm() {
    this.item = {id:"" , name:"" , age:""};
  }

  generateId(){
    return Math.floor(Math.random() * 1000);
  }

}


