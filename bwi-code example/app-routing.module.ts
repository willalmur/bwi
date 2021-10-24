import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckListComponent } from './check-list/check-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';
import { ProcessComponent } from './process/process.component';
import { ProgressListComponent } from './progress-list/progress-list.component';
import { RefreshSuccessComponent } from './refresh-success/refresh-success.component';
import { RefreshComponent } from './refresh/refresh.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'refresh-config',
    component: RefreshComponent,
  },
  {
    path: 'refresh-success',
    component: RefreshSuccessComponent,
  },
  {
    path: 'process',
    component: ProcessComponent,
    children:[
      {
        path: 'check-list',
        component: CheckListComponent,
      },
      {
        path: 'progress-list',
        component: ProgressListComponent,
      },
      {
        path: 'item-list',
        component: ItemListComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
