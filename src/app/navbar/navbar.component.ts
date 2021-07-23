import { Component, HostListener, OnInit } from '@angular/core';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSuitcase = faSuitcase;
  width = 0;
  @HostListener('window:resize', ['$event']) onResize(e: any) {
    this.width = window.innerWidth;
    console.log(this.width);
  }
  constructor() {
  }




  ngOnInit(): void {
    this.width = window.innerHeight
  }

}
