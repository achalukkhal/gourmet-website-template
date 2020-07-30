import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'contact-section',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('sectionContact', {static: false}) private sectionContact: ElementRef;
  height = 0;

  constructor() {
  }


  ngAfterViewInit(): void {
    this.height = this.sectionContact.nativeElement.offsetHeight;
  }
}
