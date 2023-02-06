export interface Query {
  nation?: string;
  playerName?: string;
  club?: string;
  league?: string;
}

export const QueryMapper = {
  nation: "Nation",
  club: "Club",
  league: "League",
};
