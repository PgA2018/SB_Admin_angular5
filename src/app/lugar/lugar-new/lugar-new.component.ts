import { Component, OnInit } from '@angular/core';
import { ZonaService } from '../../services/zona.service';
import { HttpClient } from '@angular/common/http';
import { lugar } from '../../model/lugar';
import { LugarService } from '../../services/lugar.service';
import { Url } from '../../config';

@Component({
  selector: 'app-lugar-new',
  templateUrl: './lugar-new.component.html',
  styleUrls: ['./lugar-new.component.scss'],
  providers: [LugarService, Url]
})
export class LugarNewComponent implements OnInit {

  zonas
  lugar: lugar;
  ciudades
  url;
  constructor(public _http: HttpClient, public _lugarServicio: LugarService, public _url: Url) {
    this.lugar = new lugar(null, '', '', null, null, null, null);
    this.url = _url.getUrl();
  }

  ngOnInit() {
    this.getLugares();
    this.getCiudades();
  }


  getCiudades() {
    this._http.get(this.url + 'ciudad')  //usar la url que corresponda
      .map(res => res)
      .subscribe(
        res => this.ciudades = res,
        err => console.error(err),
        () => console.log('Funciona!')
      );
  }


  insertLugar(lugar) {
    this._lugarServicio.saveLugar(lugar);
    if (lugar) {
      location.href = "lugar";
      alert("exito al guardar");
    }
    else alert("error al guardar");
  }
  getLugares() {
    this._http.get(this.url + 'zona')  //usar la url que corresponda
      .map(res => res)
      .subscribe(
        res => this.zonas = res,
        err => console.error(err),
        () => console.log('Funciona!')
      );
  }

}
