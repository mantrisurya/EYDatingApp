import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  apiUrl = 'https://localhost:5001/api/AppUsers';
  users: any;
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.http.get(this.apiUrl).subscribe(
      result => {this.users = result;},
      error => {console.log(error);}
    )
  }
}
