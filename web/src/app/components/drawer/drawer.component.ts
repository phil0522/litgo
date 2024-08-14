import { CommonModule } from '@angular/common';
import { Component, ContentChild, ContentChildren, Directive, HostBinding, QueryList, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [
    CommonModule
],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {

  mode: 'open' | 'closed' = 'open'

  @HostBinding('class.closed') 
  get isClosed(): boolean {
    return this.mode == 'closed'
  }

  @HostBinding('class.open')
  get isOpen() {
    return this.mode == 'open'
  }

  toggleMode() {
    console.log(`#toggleMode: current: ${this.mode}`)
    if (this.mode == 'open') {
      this.mode = 'closed';
    } else {
      this.mode = 'open';
    }
  }
}

