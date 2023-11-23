import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal ,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { tap } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductsComponent {
  productForm!: FormGroup;
  modalLabel: String="Add";
  data:any;
  product:any=[];
  clicked=false;
  closeResult!: string;
 

 
  constructor(private formBuilder:FormBuilder,private router: Router, private api:ApiService
    ,private modalService: NgbModal,private toastr: ToastrService
    ){}

  ngOnInit(): void{
  this.loadForm();
this.data= this.getAllProduct();

 


  
  }

  loadForm(){
    this.productForm= new FormGroup({
      id:new FormControl("",),
      name : new FormControl("",Validators.required),
      price : new FormControl("",Validators.required),
      description : new FormControl("",Validators.required),
      quantity : new FormControl("",Validators.required)
      // discount:new FormControl("",Validators.required)


    })

  }
  create(content: any) {
    this.loadForm()
     this.clicked=true;
    this.modalLabel = "Add";
    this.modalService
      .open(content, { size: 'lg', backdrop: 'static', ariaLabelledBy: "modal-basic-title" })
      .result.then(
      );
  //   this.modalService
  //   .open(content, { size: 'lg', backdrop: 'static', ariaLabelledBy: "modal-basic-title" })
  //   .result.then(
  //     (result: any) => {this.closeResult=`closed with: ${result}`;}
  //     ,(reson: any)=>{
  //       `this.closeResult=DisMisses ${this.getDismissReason(reson)}`;
  //     });
  }

  // private getDismissReason(reson:any):string{
  //   if(reson === ModalDismissReasons.ESC){
  //     return 'by pressing ESC';
  //   }else if (reson === ModalDismissReasons.BACKDROP_CLICK){
  //     return 'by clicking on a backdrop';
  //   }else{
  //     return `with : ${reson}`
  //   }
  // }
  onSubmit(){
    if(this.productForm.valid){
      let requestBody={

        "name":this.productForm.get('name')?.value,
        "price":this.productForm.get('price')?.value,
        "description":this.productForm.get('description')?.value,
        "quantity":this.productForm.get('quantity')?.value
        // "discount": this.productForm.get('discount')?.value
      }
  
     
      this.api.postProduct(requestBody)
      .subscribe(
         (res) => {
          if(res){
          this.modalService.dismissAll();
          this.toastr.success("Product added successfully", '');
          this.clicked = false;
          this.getAllProduct();
         }else{
          error: () => {
            alert("Error while adding the product");
            this.clicked = false;
          }
         }
        },
      
      );
      
    }
  
  }


  getAllProduct(){
    this.api.getProduct().pipe(tap(response =>{
      if(response){
        this.product=response.data;
      }
    }),).subscribe();
   
     }

  onUpdate(){
    this.productForm.markAllAsTouched();
    let requestBody={
      "name":this.productForm.get('name')?.value,
      "price":this.productForm.get('price')?.value,
      "description":this.productForm.get('description')?.value,
      "quantity":this.productForm.get('quantity')?.value,
      "id":this.productForm.get('id')?.value
      // "discount": this.productForm.get('discount')?.value
    }
    if(this.productForm.valid){
       this.api.editProduct(requestBody) .subscribe({
        next: (res: any) => {
          this.modalService.dismissAll();
          this.toastr.success("Product updated successfully", '');
          this.clicked = false;
          this.getAllProduct();
        },
        
      });
    
    }}


  edit(content:any,data:any){
    this.loadForm()
    this.modalLabel = "Edit";
    this.modalService
      .open(content, { size: 'lg', backdrop: 'static', ariaLabelledBy: "modal-basic-title" })
      .result.then(
      );
   
  
      this.productForm.get("id")?.setValue(data?.id);
   this.productForm.get("name")?.setValue(data?.name);
   this.productForm.get("price")?.setValue(data?.price);
   this.productForm.get("description")?.setValue(data?.description);
  //  this.productForm.get("quantity")?.setValue(productdata?.discount);
  this.productForm.get("quantity")?.setValue(data?.quantity);


  }
  delete(id:any){
   this.api.deleteProduct(id) .pipe(
    tap(response => {
      if (response) {
        if (response.status=="200 OK") {
        
          
          this.toastr.success("Product deleted successfully", '');
          this.modalService.dismissAll();
          this.getAllProduct();
          
       
        }
        
      }
         }),
   
  )
  .subscribe();


  }
  closeModel(){
    this.clicked=false;
    this.modalService.dismissAll();
  }

  onLogout() {
   
    this.router.navigate(['/login']);

  }

}
