import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CVOverviewComponent } from './cv/cv-overview/cv-overview.component';
import { CvListComponent } from './cv/cv-list/cv-list.component';
import { CvListItemComponent } from './cv/cv-list/cv-list-item/cv-list-item.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
