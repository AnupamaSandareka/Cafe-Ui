import { Component } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  opened = true;

  constructor(private menuService:MenuService){
    this.menuService.isOpened.subscribe(data=>{
      this.opened = data;
    })
  }
}
