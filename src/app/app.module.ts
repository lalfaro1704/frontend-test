// standard libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// my components
import { appRouters, routing } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

// my services
import { ApiService } from './services/services';
import { GlobalSettings } from './services/global.settings';
import { IsChecked } from './services/checked.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    IsChecked
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
  ],
  providers: [
    appRouters,
    ApiService,
    GlobalSettings,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
