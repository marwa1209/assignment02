import { Component, Injector, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() content = '';
  @Input() iconComponent?: any;
  @Input() fullWidth = false;
  @Input() isBordered = false;

}
