import { RiepilogoComponent } from './component/riepilogo/riepilogo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MenuComponent } from './component/menu/menu.component';
import { RistorantiComponent } from './component/ristoranti/ristoranti.component';


const routes: Routes = [
  {path:'', redirectTo: 'home',pathMatch:'full'},
 {path:'home', component: HomeComponent },
 {path:'login', component: LoginComponent },
 {path:'ristoranti', component: RistorantiComponent},
 {path:'menu', component: MenuComponent},
 {path:'cart', component: CartComponent},
 {path:'riepilogo', component: RiepilogoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
