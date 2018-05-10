import { Component,Input } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent {

    SiteName: string = 'Apaarshakti India Pvt. Ltd.';
    @Input()
    FirstName: string;
    @Input()
    LastName: string;
    @Input()
    Email: string;
    @Input()
    Subject: string;
    @Input()
    Message: string;

    SendMail(): void {
        debugger;
        console.log(this.FirstName);
    }

}
