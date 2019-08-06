import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasksidebar',
  templateUrl: './tasksidebar.component.html',
  styleUrls: ['./tasksidebar.component.css']
})
export class TasksidebarComponent implements OnInit {

  @Input()  categoryName:string="";
  @Output() jinal=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onSearchClick(searchTerm){
    this.jinal.emit(searchTerm);
}

}
