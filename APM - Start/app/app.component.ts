import { Component } from '@angular/core';

//Decorator - A function that adds metadata to a class - prefixed with @
//decorator is to identify class as a component (function)
@Component({
    selector: 'pm-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
