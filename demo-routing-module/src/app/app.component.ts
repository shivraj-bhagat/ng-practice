import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-routing-module';

  constructor( private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver ) {};

  async loadAbout() {
    this.vcr.clear();
    const { AboutComponent } = await import('./about/about.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AboutComponent)
    );
  };

  async loadContact() {
    this.vcr.clear();
    const { ContactComponent } = await import('./contact/contact.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(ContactComponent)
    );
  };
}
