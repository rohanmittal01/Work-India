import { Component, HostListener } from '@angular/core';
import { faEdit, faEnvelope, faPhoneAlt, faSuitcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  recruiter = "S and S Technologies";
  recruiterPhNo = "12345667890";
  recruiterEmail = "john.doe@workindia.in";
  recruiterJobId = "27AAECE0186G1ZR"
  walletAmt = 2340;
  faPhone = faPhoneAlt;
  faEnvelope = faEnvelope;
  faSuitcase = faSuitcase;
  options=  [
    {
      icon: '../assets/icons/transactions.svg',
      text: 'My transactions'
    },
    {
      icon: '../assets/icons/share.svg',
      text: 'Share this app'
    },
    {
      icon: '../assets/icons/rate.svg',
      text: 'Rate Us'
    },
    {
      icon: '../assets/icons/signout.svg',
      text: 'Sign Out'
    },
  ]

  width = window.innerWidth;
  @HostListener('window:resize', ['$event']) onResize(e: any) {
    this.width = window.innerWidth;
    console.log(this.width);
  }
  constructor() { }

  ngOnInit(): void {
    this.width = window.innerHeight
  }
}
