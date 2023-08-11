import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgxDaterangepickerMd } from './../../../src/daterangepicker';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { FullComponent } from './full/full.component';
import { SingleDatepickerComponent } from './single-datepicker/single-datepicker.component';
import { CustomRangesComponent } from './custom-ranges/custom-ranges.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MatLegacyOptionModule as MatOptionModule } from '@angular/material/legacy-core';
import { LocaleComponent } from './locale/locale.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    LocaleComponent,
    FullComponent,
    SingleDatepickerComponent,
    CustomRangesComponent,
    ReactiveFormComponent,
    TimepickerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    NgxDaterangepickerMd.forRoot({
      applyLabel: 'Okay',
      firstDay: 0
    }),
    RouterModule.forRoot(appRoutes),
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
