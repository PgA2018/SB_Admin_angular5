import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaService } from '../../services/categoria.service';
import { Url } from '../../config';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.scss'],
  providers: [CategoriaService, Url]  
})
export class ListCategoriaComponent implements OnInit {

  categorias;
  url;

  
  constructor(public _http: HttpClient,
    public service: CategoriaService,
    public _url: Url
  ) {
    this.url = this._url.getUrl;
    this.getCategoria();

  }


  ngOnInit() {


  }

  delete(categoria, i) {
    console.log(i);

    if (confirm("¿Está seguro que desea eliminar el categoria " + categoria.nombre + "?")) {
      this.service.deleteCategoria(categoria.id).subscribe(
        result => this.categorias.splice(i, 1),
        error => alert("Error al eliminar")
      );;
    }

  }
  getCategoria() {
    this.service.getCategoria().map(res => res)
      .subscribe(
        res => this.categorias = res,
        err => console.error(err),

    );
  }

}
