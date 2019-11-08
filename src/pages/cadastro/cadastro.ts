import { UsuarioProvider } from './../../providers/usuario/usuario';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  email: String
  senha: String
  nome: String
  dtNascimento: Date

  cep: String
  bairro: String
  rua: String
  estado: String

  constructor(public navCtrl: NavController, public navParams: NavParams, public UsuarioProvider:UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrar(){
  this.navCtrl.setRoot(HomePage)
  }

  jaPossuoConta(){ 
    this.navCtrl.push(LoginPage)
  } 

  
buscarCep(){
  this.UsuarioProvider.buscarEnderecoViaCep(this.cep).then((data: any) => {
    this.bairro = data.bairro
    this.rua = data.logradouro
    this.estado = data.localidade
    this.cep = data.cep


    console.log(data)
  })
}
}
