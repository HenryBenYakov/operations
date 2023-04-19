import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainComponent } from './components/layout/main/main.component';
import { AboutComponent } from './components/layout/main/about/about.component';
import { OperationsComponent } from './components/layout/main/operations/operations.component';
import { HomeComponent } from './components/layout/main/home/home.component';
import { OperationCardComponent } from './components/layout/main/operations/operation-card/operation-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateOperationComponent } from './components/layout/main/operations/create-operation/create-operation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    OperationsComponent,
    HomeComponent,
    OperationCardComponent,
    CreateOperationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
