import { AfterViewInit, Component, ViewChild  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements AfterViewInit{
  @ViewChild(EditorComponent) editor!: EditorComponent;

  input:any;
  values:any;


  constructor(private toaster:ToastrService){

  }
  ngAfterViewInit(): void {
    
  }
    
  saveBtn(data:any){
    this.input=data;
   // console.log(this.input)
   
   
}

showData(){
  // console.log(this.input.value);
  this.values=this.input.value;
  window.alert(this.values);

}

  // saveBtn(data:any){
  //   this.input=data.target.value;
  //   // this.toaster.success(this.input);
  //   console.log(this.input);

  // }
  clrBtn(){
    this.editor.cleartextArea();
  }





 

}

