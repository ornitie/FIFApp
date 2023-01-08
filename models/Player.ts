export class Player {
  PID: string;
  name: string;
  rating: number;
  currentPrice: number;
  positions: Array<string>;
  country: string;
  league: string;
  club: string;

  constructor(
    PID: string,
    name: string,
    rating: number,
    currentPrice: number,
    positions: Array<string>,
    country: string,
    league: string,
    club: string
  ) {
    this.PID = PID;
    this.name = name;
    this.rating = rating;
    this.currentPrice = currentPrice;
    this.positions = positions;
    this.country = country;
    this.league = league;
    this.club = club;
  }
}
