
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<html>  <body>    <form action="">        <input type="text" name="Text"/>    <p>Marvellous Infosystem</p> </form></body></html>',
   styles: ['input[type=text] {    color: blue;}']
})
export class AppComponent {
  title = 'Marvellous Infosystems';
  //var title2="Marvellous Infosystems";
}
