import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public select = true;
  public message = {
    active: this.select,
  };

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigateByUrl('/about');
  }

  ngOnInit(): void {}
}
