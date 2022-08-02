import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from './components/template/footer/footer.component';
import { FabComponent } from './components/template/fab/fab.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { FriendCodeCrudComponent } from './views/friend-code-crud/friend-code-crud.component';
import { FriendCodeCreateComponent } from './components/friendCode/friend-code-create/friend-code-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { FriendCodeReadComponent } from './components/friendCode/friend-code-read/friend-code-read.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FriendCodeUpdateComponent } from './components/friendCode/friend-code-update/friend-code-update.component';
import { FriendCodeDeleteComponent } from './components/friendCode/friend-code-delete/friend-code-delete.component';

import { NgxCopyPasteModule } from 'ngx-copypaste'
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FabComponent,
    NavComponent,
    HomeComponent,
    FriendCodeCrudComponent,
    FriendCodeCreateComponent,
    FriendCodeReadComponent,
    FriendCodeUpdateComponent,
    FriendCodeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    NgxCopyPasteModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
