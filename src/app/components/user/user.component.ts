import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { About } from 'src/app/about';
import { AboutService } from 'src/app/about.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public n!: any;
  private user!: About;

  constructor(
    private arouter: ActivatedRoute,
    private aboutservice: AboutService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.arouter.queryParams.subscribe((d) => {
      this.n = d;
    });
    console.log(this.n);
  }

  getUser(n: number): void {
    this.aboutservice.getAbout(n).subscribe(
      (res) => ((this.user = res), console.table(res)),
      (err) => console.log(err),
      () => console.log('About Completed')
    );
  }

  GoBack(): void {
    this.location.back();
  }
}
