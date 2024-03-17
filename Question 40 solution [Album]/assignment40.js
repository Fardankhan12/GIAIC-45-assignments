"use strict";
function makeAlbum(artist, title, tracks) {
    let album = Object.assign({ artist, title }, (tracks ? { tracks } : {}));
    return album;
}
let album1 = makeAlbum("The Beatles", "Abbey Road");
let album2 = makeAlbum("Michael Jackson", "Thriller", 11);
let album3 = makeAlbum("atif aslam", "unknown", 2);
console.log(album1);
console.log(album2);
console.log(album3);
