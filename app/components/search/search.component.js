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
var SpotifyService_1 = require("../../services/SpotifyService");
var router_1 = require("@angular/router");
var SearchComponent = (function () {
    function SearchComponent(spotifyService, route) {
        var _this = this;
        this.spotifyService = spotifyService;
        this.route = route;
        this.searchRes = [];
        this.route.fragment.subscribe(function (fragment) {
            if (fragment) {
                var token = fragment.match(/^(.*?)&/)[1].replace('access_token=', '');
                _this.spotifyService.AccessToken = token;
                if (!token) {
                    _this.spotifyService.requestAuthorization();
                }
            }
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        this.spotifyService.searchMusic(this.searchStr).subscribe(function (res) {
            _this.searchRes = res.artists.items;
        });
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: 'search.component.html'
        }),
        __metadata("design:paramtypes", [SpotifyService_1.SpotifyService, router_1.ActivatedRoute])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map