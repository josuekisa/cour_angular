import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule, platformCore } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-header',
  template: '<h3>Hey salut</h3>'
})
class HeaderComponent {}

@Component({
  selector: 'app-section',
  template :  `<p>Bienvenue dans mon site jeune chevalier</p> `
})
class AppSection{}


@Component({
  selector: 'app-footer',
  template: `
    <footer>
      &copy; josue - {{ year }}
    </footer>
  `
})
class FooterComponent {
  year = '2023';
}

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-header></app-header>
      <app-section></app-section>
      <app-footer></app-footer>
    </div>
  `
})



class AppComponent {}



@NgModule({
  declarations: [AppComponent,HeaderComponent,AppSection,FooterComponent,],
  imports: [ BrowserModule ],
  bootstrap:[AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);

