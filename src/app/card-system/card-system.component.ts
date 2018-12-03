import { Component, OnInit } from '@angular/core';

declare var $:any;
declare var M;

@Component({
  selector: 'app-card-system',
  templateUrl: './card-system.component.html',
  styleUrls: ['./card-system.component.css']
})
export class CardSystemComponent implements OnInit {

    ngOnInit(){

    }

    jquery_code(){
        $(document).ready(function(){
            M.autoInit();
        });
    }

}
