import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  showAddTask: boolean = false;
  subscription = new Subscription();

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.text){
      alert('Please enter Task...');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);
  }

}
