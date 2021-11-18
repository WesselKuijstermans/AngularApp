import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardComponent } from './core/dashboard/dashboard.component'
import { NavbarComponent } from './core/navbar/navbar.component'
import { UsecasesComponent } from './pages/about/usecases/usecases.component'
import { UsecaseComponent } from './pages/about/usecases/usecase/usecase.component'
import { LayoutComponent } from './core/layout/layout.component';
import { FooterComponent } from './core/footer/footer.component';
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    UsecasesComponent,
    UsecaseComponent,
    DashboardComponent,
    FooterComponent,
    UserComponent
  ],
  imports: [BrowserModule, RouterModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
