import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarFilmeComponent } from './criar-editar-filme/criar-editar-filme.component';
import { ExcluirFilmeComponent } from './excluir-filme/excluir-filme.component';
import { ListarFilmeComponent } from './listar-filme/listar-filme.component';
import {HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarFilmeComponent,
    ExcluirFilmeComponent,
    ListarFilmeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
