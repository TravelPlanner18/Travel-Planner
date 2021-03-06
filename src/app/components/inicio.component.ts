import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Servicios
import { GLOBAL } from '../services/global';

@Component({
    selector: 'inicio',
    templateUrl: '../views/inicio.component.html'
})
export class InicioComponent implements OnInit {


    constructor(
        private _translateService: TranslateService,
        private _router: Router,
        private _route: ActivatedRoute) {
    }

    // Método que se lanza automáticamente después del constructor del componente 
    ngOnInit() {      
        GLOBAL.vistaSeleccionada = this._route.component['name'];
        console.log('Se ha cargado el componente inicio.component.ts');
    }

    // Método para cambiar el idioma de la aplicación
    switchLanguage(language: string) {        
        this._translateService.setDefaultLang(language);
    }
}
