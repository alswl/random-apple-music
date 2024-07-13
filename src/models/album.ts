export class Album {
  title: string;
  artiste: string;
  date: string;
  style: string;
  rating: string;
  coverURL: string;
  appleMusicURL: string;
  doubanURL: string;

  constructor(
    title: string,
    artiste: string,
    date: string,
    style: string,
    rating: string,
    coverURL: string,
    appleMusicURL: string,
    doubanURL: string,
  ) {
    this.title = title;
    this.artiste = artiste;
    this.date = date;
    this.style = style;
    this.rating = rating;
    this.coverURL = coverURL;
    this.appleMusicURL = appleMusicURL;
    this.doubanURL = doubanURL;
  }

  // blank album
  static blank(): Album {
    return new Album('', '', '', '', '', '', '', '');
  }
}
