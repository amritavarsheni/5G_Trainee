import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[FormsModule, CommonModule, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  taskarray = [{taskname: "Meeting", isCompleted:false}];

  constructor(){}
 
  ngOnInit() :void {
     
  }

  onSubmit(form: NgForm){
        console.log(form);

        this.taskarray.push ({
          taskname: form.controls['task'].value,
          isCompleted:false
        })

        form.reset();
  }

  onDelete(index: number) {
     console.log(index);

     this.taskarray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskarray);

    this.taskarray[index].isCompleted = !this.taskarray[index].isCompleted;
  }
  
}
