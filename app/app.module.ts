import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import {  NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent }  from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import {routing} from './app.routing';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Artist } from './models/Artist';
import { Album } from './models/Album';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
imports:     [ BrowserModule, routing, FormsModule, HttpModule ],
declarations: [ AppComponent, NavBarComponent, SearchComponent, AboutComponent, ArtistComponent, AlbumComponent],
bootstrap:    [ AppComponent]
})
export class AppModule {}