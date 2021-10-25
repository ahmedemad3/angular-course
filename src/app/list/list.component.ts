import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:any;
  selectedItem : any;
  show : any;
  constructor() { }

  ngOnInit(): void {
    this.show = false;
    this.list = [{id:1 , name:"ahmed" , age:15} , {id:2 , name:"mohamed" , age:18}]
  }


  displayDetails(item:any){
    this.show = true;
    this.selectedItem = item;
  }


  addItem(newItem:any) {
    this.list.push(newItem);
  }

}
