import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'menu-section',
  templateUrl: './menu.component.html',
  animations: [
    trigger('upDown', [
      state('enter', style({
        transform: 'translateY(-200%)'
      })),
      state('stay', style({
        transform: 'translateY(0%)'
      })),
      state('leave', style({
        transform: 'translateY(200%)'
      })),
      transition('enter=>stay', animate('400ms 500ms ease-out')),
      transition('stay=>leave', animate('500ms ease-in')),
      transition('*=>enter', animate('500ms ease-in')),
    ]),


    trigger('downUp', [
      state('enter', style({
        transform: 'translateY(200%)'
      })),
      state('stay', style({
        transform: 'translateY(0%)'
      })),
      state('leave', style({
        transform: 'translateY(-200%)'
      })),
      transition('enter=>stay', animate('400ms 500ms ease-out')),
      transition('stay=>leave', animate('500ms ease-in')),
      transition('*=>enter', animate('500ms ease-in')),
    ]),

  ]
})
export class MenuComponent implements AfterViewInit {
  @ViewChild('sectionMenu', {static: false}) private sectionMenu: ElementRef;

  height = 0;
  top = 0;

  @Input() triggerState = 'enter';

  constructor() {
  }


  ngAfterViewInit(): void {
    this.height = this.sectionMenu.nativeElement.offsetHeight;
    this.top = this.sectionMenu.nativeElement.offsetTop;
  }
}
