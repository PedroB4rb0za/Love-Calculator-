import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome1 = "";
nome2 = "";
url = "http://lucasreno.kinghost.net/love-calculator/";
resultado = 0;
mensagem = "";

  constructor(public http: HttpClient,
    ) {

  }
  
  enviarDados(){

 this.http.get<any>(this.url+this.nome1+"/" + this.nome2).subscribe(
   (resposta: any)=>{
     this.resultado = resposta 
     if(this.resultado<20) this.mensagem = "nem tenta";
     else if(this.resultado>20 && this.resultado<40) this.mensagem ="pequena chance mais tem";
     else if(this.resultado>40 && this.resultado<60) this.mensagem ="compativeis";
     else if(this.resultado>60 && this.resultado< 80) this.mensagem = "perfeitos";
     else this.mensagem = "almas gemeas";

   }
 )
 
  }

}
