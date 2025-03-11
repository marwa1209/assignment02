import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-icon',
  template: `<svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.025 4.94165L17.0834 9.99998L12.025 15.0583"
      [attr.stroke]="color"
      stroke-width="1.25"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.91663 10H16.9416"
      [attr.stroke]="color"
      stroke-width="1.25"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,
})
export class ArrowIconComponent {
  @Input() color: string = 'white';
}
