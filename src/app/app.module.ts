import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; // imported matIcons from angular metirial
import { MatToolbarModule } from '@angular/material/toolbar'; // imported matToolBar from angular metirial
import { MatButtonModule } from '@angular/material/button';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component'; // imported button module from angular metirial
import { MatDialogModule } from '@angular/material/dialog'; // imported matDialogeModule from angular meterial
import { MatFormFieldModule } from '@angular/material/form-field'; // imported MatFormModules from am
import { MatInputModule } from '@angular/material/input'; // imported MatFormModules from am
import { MatDatepickerModule } from '@angular/material/datepicker'; // imported date picker from am for DOB selection
import { MatNativeDateModule } from '@angular/material/core'; // imported along with datePicker module
import { MatRadioModule } from '@angular/material/radio'; // imported for radio button fields
import { MatSelectModule } from '@angular/material/select'; // imported for select fields in form
import { ReactiveFormsModule } from '@angular/forms'; // Reactive form modules imported
import { MatTableModule } from '@angular/material/table'; // Materials table imported
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [AppComponent, EmpAddEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
