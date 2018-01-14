import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumUrl: string;
    private albumsUrl: string;
    
    constructor(private _http:Http){
        
    }

    getArtist(id:string){
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(this.artistUrl, this.getHeaders()).map(res => res.json());
    }

    getHeaders(){
        let headers = new Headers();
        let authToken = 'BQAX0LoywYzRSWNpKEzfZiOC8HdYkGPfsWFeuijVLpCVrFZ1MaT5JT-i42S03xfTPtTrmORHfURic8oKu98XoidQyui9TF205AKUdyNLKBiDouI7Zi0uR-ah7u9LVHA1gbgCqKYZOaUetbSLlV5SlScB6kjVlg';
        headers.append('Content-Type', 'application/json');        
        headers.append('Authorization', 'Bearer '+authToken);        
        
        return new RequestOptions({ headers: headers });
    }
    
    searchMusic(str:string, type='artist'){   
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl, this.getHeaders()).map(res => res.json());
    }

    getAlbums(artistId: string){
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
        return this._http.get(this.albumsUrl, this.getHeaders()).map(res => res.json());
    }

    getAlbum(albumId: string){
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + albumId;
        return this._http.get(this.albumUrl, this.getHeaders()).map(res => res.json());
    }
}