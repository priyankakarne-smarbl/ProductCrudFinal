import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  inputbtn = '';
  buttonlist:String[]=["btn1","btn2","btn3","btn4","btn5","btn6"]


  itemClick(events:any){
      this.inputbtn=events.target.value;
      setTimeout(() => {
        this.inputbtn = '';
      }, 3000);

}
}