import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private _data:TaskdataService) { }

  ngOnInit() {

  }
  onTaskSave(f){

    this._data.addTask(f.value).subscribe((data: any) => {
      alert("record added");
    });
  }

}
