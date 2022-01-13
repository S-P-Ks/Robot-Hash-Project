import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { About } from './about';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private http: HttpClient) {}
  private readonly AURL = 'https://jsonplaceholder.typicode.com/users';

  getAbout(id: number): Observable<About> {
    console.log(id);
    return this.http.get<About>(`${this.AURL}/${id}`).pipe(
      map((user) => ({
        ...user,
        pic: `https://robohash.org/${user.name}`,
      }))
    );
  }

  getUsers(): Observable<About[]> {
    return this.http.get<About[]>(`${this.AURL}`).pipe(
      map((users) =>
        users.map((user) => ({
          ...user,
          pic: `https://robohash.org/${user.name}`,
        }))
      )
    );
  }
}
