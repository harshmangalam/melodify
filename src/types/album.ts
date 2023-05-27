export interface Album {
  id: string;
  name: string;
  albumType: string;
  totalTracks: number;
  image: {
    url: string;
  };
  uri: string;
  genres: string[];
  artists: Artist[];
}
