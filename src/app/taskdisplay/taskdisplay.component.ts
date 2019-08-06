import { Component, OnInit } from '@angular/core';
import { TaskdataService } from './taskdata.service';
import { task } from './task';
import { Router } from "@angular/router";

@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {
arr:task[]=[];
name: string = "Enter ID";
  constructor(private _data:TaskdataService,private _router:Router) { }

  ngOnInit() {

    this._data.getAllTask().subscribe(
      (data:task[])=>{
        this.arr=data;
      }
    );
  }

  onTaskDelete(item:task){
    this._data.deleteTask(item.Id).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
        alert('deleted');
      }
    );
  }

  onTaskEdit(item:task){
    this._router.navigate(['/edittask',item.Id]);
  }
  search(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.Id.indexOf(value) != -1);
    } else {
      this._data.getAllTask().subscribe(
        (data: task[]) => {
          this.arr = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
  }
}

