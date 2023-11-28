import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  input: string="";
  input1:string="";
  products:String[]=['Mobile','Cars','Electronics']

  constructor(private toaster:ToastrService){

  }

  addToList(){
    this.products.push(this.input)
    this.toaster.success(this.input+"  is added");
    this.input=""
  }
  
   itemClick(events:any){
    this.input1=events.target.value;

    setTimeout(()=>{
      this.input1="";
    },3000)

  }

  



  //  const request=setTimeout(() => {
  //   this.input1="";
    
  // }, 5000);




 

}
