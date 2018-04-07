import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../config';
import { CategoriaLugar } from '../../model/CategoriaLugar';
import { CategoriaService } from '../../services/categoria.service';


@Component({
  selector: 'app-categoria-new',
  templateUrl: './categoria-new.component.html',
  styleUrls: ['./categoria-new.component.scss'],
  providers: [Url, CategoriaService]

})
export class CategoriaNewComponent implements OnInit {

  url
  categorias;
  categoriaLugar: CategoriaLugar
  lugares;

  constructor(public _http: HttpClient, public _url: Url,public _categoriaLugarService:CategoriaService) {
    this.categoriaLugar = new CategoriaLugar(null, null);
    this.url = this._url.getUrl();
  }

  ngOnInit() {
    this.getLugares();
    this.getCategorias();
    console.log(this.lugares);
  }

  getLugares() {
    const that=this;
    this._http.get(this.url + 'lugar')  //usar la url que corresponda
      .map(res => res)
      .subscribe(
        res => that.lugares=res,
        err => console.error(err),
        () => console.log('Funciona!')
      );
  }

  getCategorias() {
    const that=this;    
    this._http.get(this.url + 'categoria')  //usar la url que corresponda
      .map(res => res)
      .subscribe(
        res => that.categorias = res,
        err => console.error(err),
        () => console.log('Funciona!')
      );
  }
  insertCategoria(categoria) {
    this._categoriaLugarService.saveCategoria(categoria);
    if (categoria) {
    //  location.href = "categoria";
      alert("exito al guardar");
    }
    else alert("error al guardar");
  }
}
