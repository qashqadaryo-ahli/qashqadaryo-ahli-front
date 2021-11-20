import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './entity/message/message.component';
const routes: Routes = [
  {
    path: '',
    component: MessageComponent,
    // loadChildren: () => import('./managment/managment.module').then((m) => m.ManagmentModule)
    // children: [
    //   {
    //     path: '',
    //     loadChildren: () =>
    //       import('./managment/managment.module').then((m) => m.ManagmentModule),
    //   },
    // ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
