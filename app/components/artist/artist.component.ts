import { SpotifyService } from './../../services/SpotifyService';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';

@Component({
  selector: 'artist',
  templateUrl: './app/components/artist/artist.component.html'
})

export class ArtistComponent implements OnInit {

  id: string;
  listArtists: any;
  albums: Album[];
  artist: any;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.map(params => params['id']).subscribe((id) => {

      this.spotifyService.getArtist(id).subscribe(artist => {
        this.artist = artist;
        this.spotifyService.getAlbums(id).subscribe(albums => {
          this.albums = albums.items;
        })
      })
    });


  }
}
