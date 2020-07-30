import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'community-section',
  templateUrl: './community.component.html',
  animations: [
    trigger('slideUp', [
      state('out', style({
        transform: 'translateY(200%)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateY(0%)',
        opacity: '1'
      })),
      transition('*=>in', animate('400ms 500ms ease-out'))
    ]),

    trigger('slideUp1', [
      state('out', style({
        transform: 'translateY(100%)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateY(0%)',
        opacity: '1'
      })),
      transition('*=>in', animate('400ms 600ms ease-out'))
    ]),


    trigger('slideUp2', [
      state('out', style({
        transform: 'translateY(50%)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateY(0%)',
        opacity: '1'
      })),
      transition('*=>in', animate('400ms 700ms ease-out'))
    ]),

  ]
})

export class CommunityComponent implements AfterViewInit {
  @ViewChild('sectionCommunity', {static: false}) private sectionCommunity: ElementRef;
  height: number;
  top: number;
  @Input() triggerState = 'out';

  constructor() {
  }


  ngAfterViewInit(): void {
    this.height = this.sectionCommunity.nativeElement.offsetHeight;
    this.top = this.sectionCommunity.nativeElement.offsetTop;
  }
}
