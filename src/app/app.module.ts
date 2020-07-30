import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {CommunityComponent} from './components/community/community.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {MenuComponent} from './components/menu/menu.component';
import {RecipeComponent} from './components/recipes/recipe.component';
import {NavigationComponent} from './components/top-navigation/navigation.component';


const componentList = [
  HomeComponent,
  CommunityComponent,
  ContactComponent,
  FooterComponent,
  MenuComponent,
  RecipeComponent,
  NavigationComponent
];


@NgModule({
  declarations: [
    AppComponent,
    ...componentList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdkvJP9hArlBYLLbBrvP3YO0Qk0Zr2b74'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
