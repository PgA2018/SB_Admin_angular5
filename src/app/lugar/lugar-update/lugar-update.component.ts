import { Component, OnInit } from '@angular/core';
import { lugar } from '../../model/lugar';
import { HttpClient } from '@angular/common/http';
import { LugarService } from '../../services/lugar.service';
import { ZonaService } from '../../services/zona.service';
import { ActivatedRoute } from '@angular/router';
import { Url } from '../../config';

@Component({
  selector: 'app-lugar-update',
  templateUrl: './lugar-update.component.html',
  styleUrls: ['./lugar-update.component.scss'],  
  providers: [ZonaService, LugarService,Url]
})
export class LugarUpdateComponent implements OnInit {

  response: number;
  zonas
  lugar;
  ciudades;
  url;
  id: number;
  constructor(public _http: HttpClient, public route: ActivatedRoute, public _lugarServicio: LugarService,public _url:Url) { }

  ngOnInit() {
    this.url=this._url.getUrl();
    this.lugar = new lugar(null, '', '', null, null, null, null);
    this.getId();
    this.getLugar();
    this.getZona();
    this.getCiudades();
  }

  getId() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
  }
  getLugar() {
    let lugar
    this._http.get(this.url + 'lugar/' + this.id)  //usar la url que corresponda
      .map(res => res)
      .subscribe(
        res => lugar = res,
        err => console.error(err),
        () => {
          for (let person of lugar) {
            if (person.id === this.id) {
              this.lugar = person;
              break;
            }
          }
          console.log(this.lugar);
        }
      );
  }

  getCiudades() {
    this._http.get(this.url + 'ciudad')  //usar la url que corresponda
      .map(res => res)
      .subscribe(
        res => this.ciudades = res,
        err => console.error(err),

    );
  }

  getZona() {
    this._http.get(this.url + 'zona')  //usar la url que corresponda
      .map(res => res)
      .subscribe(
        res => this.zonas = res,
        err => console.error(err),
    );
  }
  updateLugar(lugar) {
    this._lugarServicio.updateLugar(lugar);
  }
}
