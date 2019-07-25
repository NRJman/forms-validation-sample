import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './entry-tabs/log-in/log-in.component';
import { SignUpComponent } from './entry-tabs/sign-up/sign-up.component';

const entryRoutes: Routes = [
  { path: '', children:
    [
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      { path: 'signup', component: SignUpComponent },
      { path: 'login', component: LogInComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(entryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EntryRoutingModule { }
