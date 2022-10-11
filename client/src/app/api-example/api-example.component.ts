import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-example',
  templateUrl: './api-example.component.html',
  styleUrls: ['./api-example.component.scss'],
})
export class ApiExampleComponent implements OnInit {
  li: any;
  lis = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:4000/api/movies').subscribe((Response) => {
      console.log(Response);
      this.li = Response;
      this.lis = this.li.data;
    });
  }
}
