export class Cancion {
  id: number ;
  spotify_id: string;
  nombre: string;
  loved: boolean;
  minutes: number;
  seconds: number;

  constructor(id: number, spotify_id: string, loved: boolean, nombre: string, minutes: number, seconds: number) {
    this.id = id;
    this.spotify_id = spotify_id;
    this.loved = loved;
    this.nombre = nombre;
    this.minutes = minutes;
    this.seconds = seconds;
  }
}