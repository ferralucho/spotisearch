import { Component } from '@angular/core';
import { SpotifyService } from './services/SpotifyService';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [SpotifyService]
})
export class AppComponent { }
