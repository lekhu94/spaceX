import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {

  limit: number = 4;
  launchFilter: boolean; 
  landFilter: boolean; 
  yearFilter: any;
  launchesData: any[];
  loading: boolean;

  constructor(
    private userService: UserServices,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private title: Title
  ) {  }

  ngOnInit() {
    this.title.setTitle('List of SpaceC Launch Programs')
    if(this.router.url) this.yearFilter = this.router.url.split('?')[0].split('/')[1];
    this.activeRouter.queryParams.subscribe(params => {
      this.landFilter = params.landing;
      this.launchFilter = params.launch;
      this.getLaunches();
    });    
  }

  getLaunches() {
    this.loading = true;
    this.userService.getLaunches(this.limit, this.launchFilter, this.landFilter, this.yearFilter)
    .subscribe((res: any) => {
      this.launchesData = res;
      this.loading = false;
    }, error => this.loading = false)
  }

}
