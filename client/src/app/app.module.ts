import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiExampleComponent } from './api-example/api-example.component';
import { GraphExampleComponent } from './graph-example/graph-example.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent, ApiExampleComponent, GraphExampleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, GraphQLModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
