import { Component, OnInit } from '@angular/core';
import { TaskData } from '../form-array.model';
import { FormArrayService } from '../form-array.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  task!: TaskData;
  constructor(private service: FormArrayService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.task = data;
    })
  }

}
