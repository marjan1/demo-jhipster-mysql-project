import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DemoJpaSharedModule } from 'app/shared/shared.module';
import { DemoJpaCoreModule } from 'app/core/core.module';
import { DemoJpaAppRoutingModule } from './app-routing.module';
import { DemoJpaHomeModule } from './home/home.module';
import { DemoJpaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DemoJpaSharedModule,
    DemoJpaCoreModule,
    DemoJpaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DemoJpaEntityModule,
    DemoJpaAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class DemoJpaAppModule {}
