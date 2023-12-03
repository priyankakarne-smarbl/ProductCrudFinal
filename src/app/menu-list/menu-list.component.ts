import { AfterViewInit, Component, ViewChild  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements AfterViewInit{
  @ViewChild(EditorComponent) editorS!: EditorComponent;

  input:any;
  values:any;


  constructor(private toaster:ToastrService){}
  ngAfterViewInit(): void {}
    
  saveBtn(data:any){
    this.input=data;}

showData(){
  this.values=this.input.value;
  window.alert(this.values);
}

  clrBtn(){
    this.editorS.cleartextArea();
  }
}

