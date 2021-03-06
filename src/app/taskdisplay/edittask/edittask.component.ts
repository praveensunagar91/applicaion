import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TaskdataService } from "../taskdata.service";
import { task } from "../task";

@Component({
  selector: "app-edittask",
  templateUrl: "./edittask.component.html",
  styleUrls: ["./edittask.component.css"]
})
export class EdittaskComponent implements OnInit {
  id: string = '';
  title: string = '';
  status: string = '';

  constructor(private _act: ActivatedRoute, private _data: TaskdataService) {}

  ngOnInit() {
    this.id = this._act.snapshot.params["Id"];
    this._data.getTaskById(this.id).subscribe((data: task[]) => {
      this.id = data[0].Id;
      this.title = data[0].Title;
      this.status = data[0].Status;
    });
  }

  onTaskUpdate(f) {
    this._data.editTask(f.value).subscribe((data: any) => {
      alert("updated");
    });
  }
}
