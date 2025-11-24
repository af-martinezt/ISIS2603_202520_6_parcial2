import { Album } from "../album/Album";

export class Autor {
  id: number ;
  spotify_id: string;
  nombre: string;
  albums: Album[];
  image: string;


  constructor(id: number, spotify_id: string, nombre: string, image: string) {
    this.id = id;
    this.spotify_id = spotify_id;
    this.nombre = nombre;
    this.albums = [];
    this.image = image;
  }
}