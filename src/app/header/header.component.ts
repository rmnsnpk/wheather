import { Component, Input, OnInit, Output } from '@angular/core';

import { WhetherService } from '../whether.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() dataNow: any 
  @Input() srcNow!: string;
  
  
  constructor( private WhetherService: WhetherService){
  }
  
  ngOnInit(){
    
    
  }


}
