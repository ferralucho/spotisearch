import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class SpotifyService {
    private searchUrl: string;
    private artistUrl: string;
    private albumUrl: string;
    private albumsUrl: string;
    private clientId: string = "363d1d75159a4abfa84f7fdd0da255b4";
    private accessToken: any;

    set AccessToken(value) {
        this.accessToken = value;
    }

    get AccessToken(){
        return this.accessToken;
    }

    constructor(private _http: Http) {
        
    }

    getArtist(id: string) {
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(this.artistUrl, this.getHeaders()).map(res => res.json());
    }

    requestAuthorization() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let requestUrl = "https://accounts.spotify.com/authorize?client_id=" + this.clientId + "&redirect_uri=http:%2F%2Flocalhost:3000&scope=user-read-private%20user-read-email&response_type=token&state=123";
        window.location.href = requestUrl;

    }

    getHeaders() {
        if (!this.accessToken) {
            this.requestAuthorization();
        }
        let headers = new Headers();       
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.accessToken);

        return new RequestOptions({ headers: headers });
    }

    searchMusic(str: string, type = 'artist') {
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(this.searchUrl, this.getHeaders()).map(res => res.json());
    }

    getAlbums(artistId: string) {
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
        return this._http.get(this.albumsUrl, this.getHeaders()).map(res => res.json());
    }

    getAlbum(albumId: string) {
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + albumId;
        return this._http.get(this.albumUrl, this.getHeaders()).map(res => res.json());
    }
}