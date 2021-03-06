import { Component, Input, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

    @Input() titulo: String;

    ngOnInit(){
        this.titulo.length > 7
            ? this.titulo.substring(0, 7) + "..."
            : this.titulo;
    }

}