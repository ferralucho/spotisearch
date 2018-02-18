import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/SpotifyService';
import { Artist } from '../../models/Artist';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {

    searchStr: string;
    searchRes: Artist[] = [];

    constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {

        this.route.fragment.subscribe((fragment: string) => {
            if (fragment) {
                let token: string = fragment.match(/^(.*?)&/)[1].replace('access_token=', '');
                this.spotifyService.AccessToken = token;
                if (!token) {
                    this.spotifyService.requestAuthorization();
                }
            }
        });
    }

    ngOnInit() {


    }

    searchMusic() {
        this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
            this.searchRes = res.artists.items;
        });
    }
}
