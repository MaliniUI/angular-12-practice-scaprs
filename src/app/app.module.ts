import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BaseComponent } from './base/base.component';
import { DependencyInjectionLogger } from './dependencyInjectionLogger.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, BaseComponent],
  bootstrap: [AppComponent],
  providers: [DependencyInjectionLogger]
})
export class AppModule {}
