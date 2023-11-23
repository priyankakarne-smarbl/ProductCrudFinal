import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  url='http://localhost:8080/products';


  constructor(private http:HttpClient) { 
    
  }
 
  
getProduct():Observable<any>{
  const httpHeaders= new HttpHeaders({
    "Content-Type":"application/json",
  });
  return this.http.get<any>(this.url,{headers:httpHeaders}).pipe(
    map((res:any)=>{
      return res;
    }),
  );
 

}
postProduct(data:any):Observable<any>{
  
  const httpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
   
  });
  return this.http.post<any>( 'http://localhost:8080/products', data, { headers: httpHeaders })
    .pipe(
      map((res: any) => {
        return res;
      }),
   
    );



}




editProduct(request: any):Observable<any>{
  const httpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    
  });
  return this.http.put<any>(this.url,request,{headers:httpHeaders})
  .pipe(
    map((res:any) =>{
      return res;
    }),
  );
  

   }

    deleteProduct(id: any) :Observable<any> {
      
      const httpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
    
      });
      return this.http.delete<any>(this.url+'/'+id, { headers: httpHeaders })
        .pipe(
          map((res: any) => {
            return res;
          }),
      
        );
    }

}



