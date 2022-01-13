import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/about.service';
import { About } from 'src/app/about';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public Users!: About[];
  constructor(private aboutservice: AboutService, private arouter: Router) {}

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers(): void {
    this.aboutservice.getUsers().subscribe(
      (res) => ((this.Users = res), console.table(res)),
      (err) => console.log(err),
      () => console.log('Completed getting users')
    );
  }

  goThere(user: About): void {
    console.log('Called');
    this.arouter.navigate([`/user/${user.id}`], { queryParams: user });
  }
}
