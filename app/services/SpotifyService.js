"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SpotifyService = (function () {
    function SpotifyService(_http) {
        this._http = _http;
        this.clientId = "363d1d75159a4abfa84f7fdd0da255b4";
    }
    Object.defineProperty(SpotifyService.prototype, "AccessToken", {
        get: function () {
            return this.accessToken;
        },
        set: function (value) {
            this.accessToken = value;
        },
        enumerable: true,
        configurable: true
    });
    SpotifyService.prototype.getArtist = function (id) {
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(this.artistUrl, this.getHeaders()).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.requestAuthorization = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var requestUrl = "https://accounts.spotify.com/authorize?client_id=" + this.clientId + "&redirect_uri=http:%2F%2Flocalhost:3000&scope=user-read-private%20user-read-email&response_type=token&state=123";
        window.location.href = requestUrl;
    };
    SpotifyService.prototype.getHeaders = function () {
        if (!this.accessToken) {
            this.requestAuthorization();
        }
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.accessToken);
        return new http_1.RequestOptions({ headers: headers });
    };
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(this.searchUrl, this.getHeaders()).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbums = function (artistId) {
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
        return this._http.get(this.albumsUrl, this.getHeaders()).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbum = function (albumId) {
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + albumId;
        return this._http.get(this.albumUrl, this.getHeaders()).map(function (res) { return res.json(); });
    };
    SpotifyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=SpotifyService.js.map