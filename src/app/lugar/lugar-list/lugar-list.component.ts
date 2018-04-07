import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LugarService } from '../../services/lugar.service';
import { Url } from '../../config';

@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrls: ['./lugar-list.component.scss'],
  providers: [LugarService, Url]
})
export class LugarListComponent implements OnInit {


  lugares;
  url;

  constructor(public _http: HttpClient,
    public service: LugarService,
    public _url: Url
  ) {
    this.url = this._url.getUrl;
    this.getLugares();

  }


  ngOnInit() {


  }

  delete(lugar, i) {
    console.log(i);

    if (confirm("¿Está seguro que desea eliminar el lugar " + lugar.nombre + "?")) {
      this.service.deleteLugar(lugar.id).subscribe(
        result => this.lugares.splice(i, 1),
        error => alert("Error al eliminar")
      );;
    }

  }
  getLugares() {
    this.service.getLugar().map(res => res)
      .subscribe(
        res => this.lugares = res,
        err => console.error(err),

    );
  }
}
