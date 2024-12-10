import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CVOverviewComponent } from './cv/cv-overview/cv-overview.component';
import { CvListComponent } from './cv/cv-list/cv-list.component';
import { CvListItemComponent } from './cv/cv-list/cv-list-item/cv-list-item.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    CVOverviewComponent,
    CvListComponent,
    CvListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
