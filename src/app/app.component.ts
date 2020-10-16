import { Component } from '@angular/core';
import { TaskComponent } from 'src/app/task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Budget Calculator';

  descrption : string;
  value : number; 

  empList: Array<TaskComponent> = [];
  
  sum = 0.00;

  income = 0.00;
  expenses = 0.00;

  add(){
   if(this.isNumber(this.value))
   {
     if(this.value > 0)
     {
        this.income = +this.income + +this.value;
        this.sum = +this.sum + +this.value;
     }
     else
     {
        this.expenses = +this.expenses + +this.value;
        this.sum = +this.sum + +this.value;
     }
     let newTask = new TaskComponent();
     newTask.value = this.value;
     newTask.descrption = this.descrption;

     this.empList.push(newTask);
     
     
   }
   else
   {
      return window.alert("try to enter a number!");
   }
  }

  isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }

  delete(i){
     if(this.empList[i].value > 0)
     {
        this.income = +this.income - +this.empList[i].value;
        this.sum = +this.sum - +this.empList[i].value;
     }
     else
     {
        this.expenses = +this.expenses - +this.empList[i].value;
        this.sum = +this.sum - +this.empList[i].value;
     }
     this.empList.splice(i,1);
  }
}
