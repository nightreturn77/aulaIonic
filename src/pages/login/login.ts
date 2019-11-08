import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CadastroPage} from '../cadastro/cadastro'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: String
  senha: String
  urlImage: String = 'assets/imgs/user.svg'
  isUsuarioValido: boolean = false
  nomeUsuario: String = ''
  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioProvider: UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  fazerLogin(){ 
    let elementoBotao = <HTMLElement>document.querySelector('#btnLogin') 
    elementoBotao.innerText = 'ENTRANDO...'
    let corAntiga = elementoBotao.style.background
    elementoBotao.style.background = '#7f8c8d'

    /*setTimeout(() => { 
      if(this.email == 'admin' && this.senha =='admin'){ 
        alert('logado!')
      } else { 
        alert('E-mail ou senha inválidos')
      }
      elementoBotao.innerText = 'ENTRAR'
      elementoBotao.style.background = corAntiga
    }, 3000)*/
    this.usuarioProvider .buscarUserGithub (this.email).then(
      (data: any) => {
      if (data.avatar_url) {
      //se o usuário existir faça isso
      this.urlImage = data.avatar_url
      this.nomeUsuario = data.name
      this.isUsuarioValido = true
      console.log(data)
      } else {
      this.isUsuarioValido = false
      this.urlImage = 'assets/imgs/boy.svg'
      }
      })
      } 
    
  

abrirCadastro(){ 
  this.navCtrl.push(CadastroPage)
}     




}
