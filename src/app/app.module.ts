import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        StoreModule.provideStore({ counter: counterReducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

}
