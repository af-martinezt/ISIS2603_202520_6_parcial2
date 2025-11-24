import { Cancion } from "../cancion/Cancion";

export class Album {
  id: number ;
  spotify_id: string;
  nombre: string;
  loved: boolean;
  tracks: Cancion[];
  year: number;
  image: string;

  constructor(id: number, spotify_id: string, loved: boolean, nombre: string, year: number, image: string) {
    this.id = id;
    this.spotify_id = spotify_id;
    this.loved = loved;
    this.tracks = [];
    this.nombre = nombre;
    this.image = image;
    this.year = year;
  }
}