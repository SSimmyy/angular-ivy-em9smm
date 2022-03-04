import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Bob';
  imageUrl: string =
    'https://www.ag.ndsu.edu/agcomm/images/ndsu-extension-logo-files/ndsu-extension-gold-text-white-line.png';

  isSpecial: boolean = false;

  onMouseOver(): void {
    this.isSpecial = !this.isSpecial;
  }

  onMouseOut(): void {
    this.isSpecial = !this.isSpecial;
  }

  username = 'Bob';

  onClick(): boolean {
    return this.username == '';
  }

  onClickMe(): void {
    this.username = 'Hello Word';
  }
}
