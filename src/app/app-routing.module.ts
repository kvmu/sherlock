import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { CreateComponent } from './create/create.component';
import { RoleComponent } from './role/role.component';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent },
    { path: ':id/lobby',  component: LobbyComponent },
    { path: 'create', component: CreateComponent },
    { path: 'role', component: RoleComponent },
    { path: ':id/game', component: GameComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
