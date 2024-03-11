import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navegacao: NavController) {}
  ngOnInit() {}

  public titulo: String = "Meu primeiro App"

  public imagemRamdon: String = "https://a.cdn-hotels.com/gdcs/production156/d691/3d64b612-6715-43f7-b613-66b37a230b55.jpg?impolicy=fcrop&w=800&h=533&q=medium"

  public imagemLocal: String = "../assets/icone-celular.png"

  public resultado: String = ""
  public pesquisa: String = ""

  public atualiza(): void{

    if(this.titulo == "" ) {

        this.titulo = "Meu primeiro App"

    } else if(this.titulo.length <= 4 ) {


        this.titulo = "Só tem 4 Caracteres, título fraco"


    } else {

        this.titulo = "Esse é o ideal, mais que 4 caracteres"

    }


  }

  public acao(){


      this.titulo = "Ação acionada"


  }

  abrirLista(){
    this.navegacao.navigateForward('lista')
  }

  abrirBotoes(){
    this.navegacao.navigateForward('botoes')

  }

  recuperar(){

    this.resultado = this.pesquisa

  }
}
