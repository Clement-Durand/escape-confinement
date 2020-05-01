import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TimerComponent } from './timer/timer.component';
import { PlanComponent } from './plan/plan.component';
import { LockDialogComponent } from './lock-dialog/lock-dialog.component';
import { ScenarioDialogComponent } from './scenario-dialog/scenario-dialog.component';
import { MobileLoginComponent } from './mobile-login/mobile-login.component';
import { MobileMainComponent } from './mobile-main/mobile-main.component';

import { TimerService } from './services/timer.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TimerComponent,
    PlanComponent,
    LockDialogComponent,
    ScenarioDialogComponent,
    MobileLoginComponent,
    MobileMainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
    NgbModule,
  ],
  providers: [TimerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
