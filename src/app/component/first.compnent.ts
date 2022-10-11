import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name = '';
  change(newName: any) {
    this.name = newName.target.value;
  }
  reset() {
    this.name = '';
  }
}
