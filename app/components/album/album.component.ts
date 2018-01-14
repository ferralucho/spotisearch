import { SpotifyService } from './../../services/SpotifyService';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';

@Component({
  selector: 'album',
  templateUrl: './app/components/album/album.component.html'
})

export class AlbumComponent implements OnInit {

  id: string;
  listArtists: any;
  albums: Album[];
  album: any;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.map(params => params['id']).subscribe((id) => {

        this.spotifyService.getAlbum(id).subscribe(album => {
          this.album = album;         
        })
      });
  }
}
