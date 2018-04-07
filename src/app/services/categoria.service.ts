import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Url } from '../config';

@Injectable()
export class CategoriaService {

  url
  constructor(public _http: HttpClient,
    public $http: Http,
    public _url:Url) {
      this.url=_url.getUrl()+'categorialugar';
     }


  updateCategoria(categoria) {
    this._http.put(this.url + '/' + categoria.id, categoria).subscribe((val) => {
    }, Response => {
      console.log(Response);
    }, () => {
      console.log('Tarea completa');
      location.href = "categoria";
    })
  }

  saveCategoria(categoria) {
    this._http.post(this.url, categoria).subscribe((val) => {
    }, Response => {
      console.log(Response);
    }, () => {
      console.log('Tarea completa');
      // location.href = "categoria";
    })

  }
  deleteCategoria(id) {
    const url = this.url + '/' + id;
    return this.$http.delete(url)
      .map(this.extractData)
      .catch(this.handleError)
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getCategoria() {
       
    return this.$http.get(this.url).map(res => res.json());
  }
}
