import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaComponent } from './components/ficha/ficha.component';
import { TreinoComponent } from './components/treino/treino.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaComponent,
    TreinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
