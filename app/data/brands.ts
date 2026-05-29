export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
  {
    id: "bluefox-casino",
    name: "BlueFox Casino",
    logo: "/BlueFox_Casino.max-600x340.webp",
    rating: 10.0,
    bonus: "WELCOME PACKAGE UP TO £1000 + 100 FREE SPINS",
    url: "https://track-otn.com/trk.php?t=1643&c=2712",
    isMobile: true,
    votes: 4821,
  },
  {
    id: "mogobet",
    name: "MogoBet",
    logo: "/mogobet.webp",
    rating: 9.9,
    bonus: "100% UP TO £200 + 20 FREE SPINS",
    url: "https://track-otn.com/trk.php?t=1641&c=2713",
    isMobile: true,
    votes: 3654,
  },
];
