import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PhoneNumberValidator } from './directive/validators/phoneNumber.validator';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    CreateComponent,
    RegisterComponent,
    PhoneNumberValidator,
    RegisterUserComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
