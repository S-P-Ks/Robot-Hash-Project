import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/about';
import { AboutService } from 'src/app/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private aboutservice: AboutService) {}
  public about!: About;

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout(): void {
    this.aboutservice.getAbout(Math.floor(Math.random() * 10)).subscribe(
      (res) => ((this.about = res), console.table(res)),
      (err) => console.log(err),
      () => console.log('About Completed')
    );
  }
}
