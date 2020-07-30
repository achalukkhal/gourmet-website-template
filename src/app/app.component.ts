import {
  AfterViewChecked,
  Component,
  NgZone,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'my-app';

  @ViewChild('sectionCommunity', {static: false}) sectionCommunity;
  @ViewChild('sectionMenu', {static: false}) sectionMenu;

  communityState = 'out';
  menuState = 'enter';


  lat = 51.678418;
  lng = 7.809007;


  mapStyle = [
    {
      featureType: 'all',
      elementType: 'geometry.fill',
      stylers: [
        {
          lightness: '-100'
        },
        {
          color: '#ffdac9'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'on'
        },
        {
          color: '#ffcab1'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffcab1'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          lightness: 100
        },
        {
          visibility: 'simplified'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'on'
        },
        {
          lightness: 700
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          color: '#92e1dd'
        }
      ]
    }
  ];

  constructor(private ngZone: NgZone) {
  }

  ngOnInit() {

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', (e) => {
        let last_known_scroll_position = window.pageYOffset;

        let cVisibility = this.visibilityPercentage(last_known_scroll_position, this.sectionCommunity.top, this.sectionCommunity.height);
        let mVisibility = this.visibilityPercentage(last_known_scroll_position, this.sectionMenu.top, this.sectionMenu.height);

        // console.log('cVisibility', cVisibility, this.sectionCommunity.top);
        // console.log('mVisibility', mVisibility, this.sectionMenu.top);
        // console.log('last_known_scroll_position', last_known_scroll_position);

        // Displaying CommunityCard

        if (cVisibility > 30 && this.sectionCommunity.triggerState === 'out') {
          this.ngZone.run(() => {
            this.communityState = 'in';
          });
        }

        // Displaying Menue

        if (mVisibility > 20 && this.menuState === 'enter') {
          this.ngZone.run(() => {
            this.menuState = 'stay';
          });
        } else if (mVisibility <= 30 && this.menuState === 'stay') {
          this.ngZone.run(() => {
            this.menuState = 'leave';
          });
        } else if (this.menuState === 'leave') {
          this.ngZone.run(() => {
            this.menuState = 'enter';
          });
        }

      });
    });


  }

  ngAfterViewChecked() {
  }

  visibilityPercentage(currentPosition, offset, height) {

    let windowHeight = window.innerHeight,
      docScroll = currentPosition,
      divPosition = offset,
      divHeight = height,
      hiddenBefore = docScroll - divPosition,
      hiddenAfter = (divPosition + divHeight) - (docScroll + windowHeight);

    if ((docScroll > divPosition + divHeight) || (divPosition > docScroll + windowHeight)) {
      return 0;
    } else {
      var result = 100;

      if (hiddenBefore > 0) {
        result -= (hiddenBefore * 100) / divHeight;
      }

      if (hiddenAfter > 0) {
        result -= (hiddenAfter * 100) / divHeight;
      }

      return result;
    }

  }


}
