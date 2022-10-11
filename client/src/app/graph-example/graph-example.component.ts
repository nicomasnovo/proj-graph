import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_MOVIES } from './graphql.queries';

@Component({
  selector: 'app-graph-example',
  templateUrl: './graph-example.component.html',
  styleUrls: ['./graph-example.component.scss'],
})
export class GraphExampleComponent implements OnInit {
  li: any;
  lis = [];
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_MOVIES,
      })
      .valueChanges.subscribe(({ data }: any) => {
        console.log(data);
        this.lis = data.movies;
      });
  }
}
