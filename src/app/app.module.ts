import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AtricleListComponent } from './atricle-list/atricle-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AtricleListComponent,
    AboutComponent,
      ArticleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
