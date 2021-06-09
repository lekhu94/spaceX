import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent implements OnInit {

  years: any[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
  selectedYear:any;
  selectedLaunch :any;
  selectedLanding: any;
  constructor(
    private userService: UserServices,
    private route: Router
  ) { }

  ngOnInit() { }

  filter(type, event){
    if(type == 'launch') this.selectedLaunch = event;
    else if(type == 'year') this.selectedYear = event;
    else this.selectedLanding = event;
    
    if(this.selectedYear) {
      this.route.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.route.navigate([this.selectedYear], { queryParams: { launch: this.selectedLaunch, landing: this.selectedLanding } }));
    } else {
      this.route.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.route.navigate(['/'], { queryParams: { launch: this.selectedLaunch, landing: this.selectedLanding } }));
    }
  }

}
