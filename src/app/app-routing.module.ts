import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './core/dashboard/dashboard.component'
import { LayoutComponent } from './core/layout/layout.component'
import { UserComponent } from './entities/user/user.component'
import { UsecasesComponent } from './pages/about/usecases/usecases.component'
import { UserEditComponent } from './entities/user-edit/user-edit.component'
import { GameComponent } from './entities/game/game.component'
import { GameEditComponent } from './entities/game-edit/game-edit.component'
import { GameFormComponent } from './entities/game-form/game-form.component'
import { UserdetailComponent } from './entities/userdetail/userdetail.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'users', component: UserComponent},
      { path: 'users/:id', component: UserdetailComponent},
      { path: 'users/edit/:id', component: UserEditComponent},
      { path: 'games', component: GameComponent},
      { path: 'games/edit/:id', component: GameEditComponent},
      { path: 'games/add', component: GameFormComponent},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'about', component: UsecasesComponent }
    ]
  },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
