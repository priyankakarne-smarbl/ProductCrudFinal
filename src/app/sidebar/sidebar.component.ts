import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  inputbtn = '';

  onClick(button: string) {
    this.inputbtn = button;

    setTimeout(() => {
      this.inputbtn = '';
    }, 3000);
  }

}
