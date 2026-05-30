export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  displayUrl: string;
  isMobile: boolean;
  votes: number;
  badge?: string;
}

export const brands: Brand[] = [
  {
    id: "spinpolo",
    name: "SpinPolo",
    logo: "/brands/spinpolo.webp",
    bonus: "400% UP TO £12,750 + 400 FS",
    url: "https://direct.reradirectbox.com/click?pid=75&offer_id=857&l=1778754174&sub2=SpinPolo-UK12ZZ&sub1=",
    displayUrl: "https://spinpolo.com",
    isMobile: true,
    badge: "TOP PICK",
  },
  {
    id: "rollyspin",
    name: "RollySpin",
    logo: "/brands/rolly.svg",
    bonus: "100% UP TO €600 + 200 FREE SPINS",
    url: "https://rollyspin19.net/dcdiqugc6?subid=RollySpin-SRJ82-UK&visit_id=",
    displayUrl: "https://rollyspin.com",
    isMobile: true,
    badge: "FAST WITHDRAWAL",
  },
  {
    id: "vegashero",
    name: "VegasHero",
    logo: "/brands/VegasHero.png",
    bonus: "125% UP TO £1,250 + 250 FS",
    url: "https://vgr.lynmonkel.com/?mid=314792_2079715&subid=VegasHero-UK12ZZ&clickid=",
    displayUrl: "https://vegashero.com",
    isMobile: true,
    badge: "EDITOR'S CHOICE",
  },
  {
    id: "Bananzia",
    name: "Bananzia",
    logo: "/brands/bananzia.svg",
    bonus: "Casino Welcome Bonus 300% up to £200 + 50 Free Spins!",
    url: "https://go.drctvoodoo.com/click?pid=6&offer_id=12&sub2=Bananzia-UK12ZZ&sub1=",
    displayUrl: "https://bananzia.com",
    isMobile: true,
    badge: "EXPERT CHOICE",
  },
  
  {
    id: "Royalen",
    name: "Royalen",
    logo: "/brands/royalen.webp",
    bonus: "200% up to £2,000 + 200 FS",
    url: "https://bestcpa.online/click?o=494&a=75&aff_click_id=",
    displayUrl: "https://royalen.com",
    isMobile: true,
    badge: "RUNNER UP",
  },
  {
    id: "BetNJet",
    name: "BetNJet",
    logo: "/brands/betnjet.svg",
    bonus: "400% UP TO £1000 + 250 FS",
    url: "https://bestcpa.online/click?o=436&a=75&aff_click_id=",
    displayUrl: "https://betnjet.com",
    isMobile: true,
    badge: "RUNNER UP",
  },
  {
    id: "bluefox-casino",
    name: "BlueFox Casino",
    logo: "/BlueFox_Casino.max-600x340.webp",
    bonus: "WELCOME PACKAGE UP TO £1000 + 100 FREE SPINS",
    url: "https://track-otn.com/trk.php?t=1643&c=2712&clickid=",
    displayUrl: "https://bluefoxcasino.com",
    isMobile: false,
  },
  {
    id: "mogobet",
    name: "MogoBet",
    logo: "/mogobet.webp",
    bonus: "100% UP TO £200 + 20 FREE SPINS",
    url: "https://track-otn.com/trk.php?t=1641&c=2713&clickid=",
    displayUrl: "https://mogobet.com",
    isMobile: false,
  },
].map((brand, index) => ({
  ...brand,
  rating: Number((10.0 - index * 0.1).toFixed(1)),
  votes: 12450 - index * 840 + (index % 2 === 0 ? 124 : 56),
})) as Brand[];
