import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  myArray: any = [] ;

  term : string='';

  myProd: any = {
    id:'',
    nom:'',
    prix:'',
    qte:''
  }
 
  myCondition= false;

  alert=false;
  


  constructor(private myVar : ProduitService) { }

  ngOnInit(): void {
    this.getProduits();
  }

  //methode get
  getProduits(){
    this.myVar.getAll()
    .subscribe(data => {
      this.myArray = data;
    })
  }

  //methode delete 
  delete(id){
    this.myVar.delete(id)
    .subscribe(() => {
      this.myArray = this.myArray.filter
      (myVariable =>  myVariable.id != id);
    })
  }

  //methode add
  postProduit(){
    
    this.myVar.postProduit(this.myProd)
    .subscribe((myVariable) => {
      this.myArray = [myVariable, ...this.myArray];
      this.inputVide();
  
    })
  }

  //methode update
  updateProduit(){
    this.myVar.updateProduit(this.myProd)
    .subscribe(produit => {
      this.inputVide();
      this.myCondition = false; 
      this.alert=true;
    })
  }

  //avec update 
  editPruit(myVariable){
    this.myProd =myVariable;
    this.myCondition=true;
  }

  //input vide 
  inputVide(){
    this.myProd = {
      id:'',
      nom:'',
      prix:'',
      qte:''
    }
  }

 


}
