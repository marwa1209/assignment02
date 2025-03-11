import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
})
export class TextBoxComponent {
@Input() content: string;
@Input() isCentered:boolean=true;
}
