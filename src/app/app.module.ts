import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './core/app/app.component'
import { UsecasesComponent } from './about/usecases/usecases.component'
import { NavbarComponent } from './core/navbar/navbar.component'
import { UsecaseComponent } from './about/usecases/usecase/usecase.component'

@NgModule({
  declarations: [AppComponent, NavbarComponent, UsecasesComponent, UsecaseComponent],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
