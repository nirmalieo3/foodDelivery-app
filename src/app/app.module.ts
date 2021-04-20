import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RistorantiComponent } from './component/ristoranti/ristoranti.component';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './component/menu/menu.component';
import { CartComponent } from './component/cart/cart.component';
import { RiepilogoComponent } from './component/riepilogo/riepilogo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LogintwoComponent } from './component/logintwo/logintwo.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReservedComponent } from './component/reserved/reserved.component';
import {MatTableModule} from '@angular/material/table';
import { CarouselComponent } from './component/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RistorantiComponent,
    MenuComponent,
    CartComponent,
    RiepilogoComponent,
    LogintwoComponent,
    ReservedComponent,
    CarouselComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] 
})
export class AppModule { }
