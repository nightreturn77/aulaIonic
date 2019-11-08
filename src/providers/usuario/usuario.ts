import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsuarioProvider Provider');
  }

  buscarEnderecoViaCep(cep){
    return new Promise((resolve) => {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(
          (data) => {
            resolve(data)},
            (err) => {
              console.error(err)
            },
          )
    })
  }

  buscarUserGithub(user) {
    return new Promise((resolve) => {
      this.http.get(`https://api.github.com/users/${user}`).subscribe(
        (data) => {
          resolve(data)
        },
        (err) => {
          resolve('error')
          console.error(err)
        },
      )
    })
  }

}