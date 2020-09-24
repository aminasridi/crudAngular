import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyInterface } from '../models/my-interface';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  urlApi='http://localhost:3000/produit';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<MyInterface>(this.urlApi);
  }

  delete(id){
    return this.http.delete(`${this.urlApi}/${id}`);
  } 

  postProduit(produit){
    return this.http.post<MyInterface>(this.urlApi,produit);
   
  }

  updateProduit(produit){
    return this.http.put(`${this.urlApi}/${produit.id}`,produit)
  }

  


  
}
