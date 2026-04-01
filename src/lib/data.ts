export const teamLogos = {
  umCincoSete: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/1%2B5%2B7.png",
  badBoa: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Bad-Boa-FC.png",
  bayernBeer: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Bayern-Beer.png",
  corona: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Corona-FC.png",
  correndoProBar: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Correndo%20Pro%20Bar.png",
  ecLock: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/EC%20LOCK%20MOTIVOS.png",
  ferraresi: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Ferraresi-FC.png",
  interBahamas: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Inter-de-Bahamas.png",
  juventus: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Juventus-sc.png",
  mesmoNipe: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Mesmo%20Nipe.png",
  milionarios: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Milion%C3%A1rios-FC.png",
  milliducas: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Milliducas-fc.png",
  neblina: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Neblina%20FC.png",
  onix: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Onix-FC.png",
  realBarcelia: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Real-Barc%C3%A9lia.png",
  realMaster: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Real-Master-SC.png",
  redStar: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Red-Star-FC.png",
  santaCana: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Santa%20Cana%20Futebol%20Clube.png",
  tirandoOnda: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/Tirando%20onda.png",
  ambreve: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/ambreve-ec.png",
  atletiba: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/atletiba%20ec.png",
  bemBolado: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/bem-bolado.png",
  canaBrava: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/cana%20brava%20fc.png",
  ecBronks: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/ec%20do%20bronks.png",
  vasquinho: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/ec-vasquinho.png",
  erro7: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/erro7-fc.png",
  interLimoes: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/inter-de-lim%C3%B5es.png",
  perere: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/perer%C3%AA-fut7.png",
  realBetis: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/real-betis.png",
  sem10tino: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/sem-10-tino.png",
  sharks: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/sharks-04.png",
  vp: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/vp.png",
  zeroGrau: "https://xchezryog8h3d5kt.public.blob.vercel-storage.com/Liga%20de%20quebrada/zero-grau.png",
};

export type TeamRanking = {
  pos: number;
  name: string;
  pts: number;
  pj: number;
  sg: number;
  logo: string;
  movement: number;
};

export type FullTeamRanking = TeamRanking & {
  j: number;
  v: number;
  e: number;
  d: number;
  last5: string[];
};

export type Match = {
  league: string;
  date: string;
  time: string;
  weekday: string;
  city: string;
  home: string;
  away: string;
  homeLogo: string;
  awayLogo: string;
  homeColor: string;
  awayColor: string;
  round: string;
  homeStars: number;
  homeReviews: number;
  awayStars: number;
  awayReviews: number;
};

export const topMandantes: TeamRanking[] = [
  { pos: 1, name: 'Santa Cana FC', pts: 10, pj: 4, sg: 18, logo: teamLogos.santaCana, movement: 1 },
  { pos: 2, name: 'Real Master SC', pts: 9, pj: 4, sg: 2, logo: teamLogos.realMaster, movement: -1 },
  { pos: 3, name: 'Milionários FC', pts: 7, pj: 4, sg: 3, logo: teamLogos.milionarios, movement: 0 },
  { pos: 4, name: 'Neblina FC', pts: 3, pj: 4, sg: -13, logo: teamLogos.neblina, movement: 2 },
  { pos: 5, name: 'Onix FC', pts: 1, pj: 4, sg: -10, logo: teamLogos.onix, movement: -2 },
];

export const topVisitantes: TeamRanking[] = [
  { pos: 1, name: 'Red Star FC', pts: 12, pj: 4, sg: 15, logo: teamLogos.redStar, movement: 0 },
  { pos: 2, name: 'Real Barcélia', pts: 9, pj: 4, sg: 8, logo: teamLogos.realBarcelia, movement: 1 },
  { pos: 3, name: 'Tirando Onda', pts: 6, pj: 4, sg: 1, logo: teamLogos.tirandoOnda, movement: -1 },
  { pos: 4, name: 'Ambreve EC', pts: 4, pj: 4, sg: -5, logo: teamLogos.ambreve, movement: 0 },
  { pos: 5, name: 'Atletiba EC', pts: 2, pj: 4, sg: -8, logo: teamLogos.atletiba, movement: 0 },
];

export const upcomingMatchesFutsal: Match[] = [
  { league: "LIGA DE QUEBRADA", date: "24/02", time: "19:00", weekday: "SÁBADO", city: "São Paulo", home: "Bem Bolado", away: "Cana Brava", homeLogo: teamLogos.bemBolado, awayLogo: teamLogos.canaBrava, homeColor: "#FFFFFF", awayColor: "#006400", round: "RODADA 01 • MASCULINO • FUTSAL", homeStars: 4, homeReviews: 210, awayStars: 5, awayReviews: 305 },
  { league: "LIGA DE QUEBRADA", date: "24/02", time: "20:00", weekday: "SÁBADO", city: "Rio de Janeiro", home: "EC Bronks", away: "Vasquinho", homeLogo: teamLogos.ecBronks, awayLogo: teamLogos.vasquinho, homeColor: "#FFFFFF", awayColor: "#FF0000", round: "RODADA 01 • MASCULINO • FUTSAL", homeStars: 3, homeReviews: 150, awayStars: 4, awayReviews: 180 },
  { league: "LIGA DE QUEBRADA", date: "25/02", time: "16:00", weekday: "DOMINGO", city: "Belo Horizonte", home: "Erro 7 FC", away: "Inter Limões", homeLogo: teamLogos.erro7, awayLogo: teamLogos.interLimoes, homeColor: "#FF0000", awayColor: "#FFFFFF", round: "RODADA 01 • MASCULINO • FUTSAL", homeStars: 5, homeReviews: 450, awayStars: 3, awayReviews: 120 },
  { league: "LIGA DE QUEBRADA", date: "25/02", time: "18:00", weekday: "DOMINGO", city: "Porto Alegre", home: "Pererê Fut7", away: "Real Betis", homeLogo: teamLogos.perere, awayLogo: teamLogos.realBetis, homeColor: "#0099FF", awayColor: "#FF0000", round: "RODADA 01 • MASCULINO • FUTSAL", homeStars: 4, homeReviews: 200, awayStars: 4, awayReviews: 210 },
  { league: "LIGA DE QUEBRADA", date: "26/02", time: "19:30", weekday: "SEGUNDA", city: "Curitiba", home: "Sem 10 Tino", away: "Sharks 04", homeLogo: teamLogos.sem10tino, awayLogo: teamLogos.sharks, homeColor: "#0000FF", awayColor: "#000000", round: "RODADA 01 • MASCULINO • FUTSAL", homeStars: 4, homeReviews: 190, awayStars: 5, awayReviews: 300 },
  { league: "LIGA DE QUEBRADA", date: "26/02", time: "21:00", weekday: "SEGUNDA", city: "Salvador", home: "VP", away: "Zero Grau", homeLogo: teamLogos.vp, awayLogo: teamLogos.zeroGrau, homeColor: "#0000FF", awayColor: "#FF0000", round: "RODADA 01 • MASCULINO • FUTSAL", homeStars: 3, homeReviews: 100, awayStars: 3, awayReviews: 95 },
];

export const upcomingMatchesFut7: Match[] = [
  { league: "LIGA DE QUEBRADA", date: "26/02", time: "19:00", weekday: "SEGUNDA", city: "São Paulo", home: "1+5+7", away: "Bad Boa FC", homeLogo: teamLogos.umCincoSete, awayLogo: teamLogos.badBoa, homeColor: "#888888", awayColor: "#FFA500", round: "RODADA 01 • MASCULINO • FUT7", homeStars: 5, homeReviews: 310, awayStars: 4, awayReviews: 190 },
  { league: "LIGA DE QUEBRADA", date: "26/02", time: "20:30", weekday: "SEGUNDA", city: "Osasco", home: "Bayern Beer", away: "Corona FC", homeLogo: teamLogos.bayernBeer, awayLogo: teamLogos.corona, homeColor: "#FFFFFF", awayColor: "#000000", round: "RODADA 01 • MASCULINO • FUT7", homeStars: 4, homeReviews: 220, awayStars: 5, awayReviews: 410 },
  { league: "LIGA DE QUEBRADA", date: "27/02", time: "19:00", weekday: "TERÇA", city: "Guarulhos", home: "Correndo Pro Bar", away: "EC Lock", homeLogo: teamLogos.correndoProBar, awayLogo: teamLogos.ecLock, homeColor: "#000000", awayColor: "#FF4500", round: "RODADA 01 • MASCULINO • FUT7", homeStars: 3, homeReviews: 150, awayStars: 3, awayReviews: 140 },
  { league: "LIGA DE QUEBRADA", date: "27/02", time: "21:00", weekday: "TERÇA", city: "Diadema", home: "Ferraresi FC", away: "Inter Bahamas", homeLogo: teamLogos.ferraresi, awayLogo: teamLogos.interBahamas, homeColor: "#333333", awayColor: "#FF6B00", round: "RODADA 01 • MASCULINO • FUT7", homeStars: 5, homeReviews: 500, awayStars: 5, awayReviews: 480 },
];

export function generateFullRanking(): FullTeamRanking[] {
  const teamsList = [
    { name: 'Santa Cana FC', logo: teamLogos.santaCana },
    { name: 'Real Master SC', logo: teamLogos.realMaster },
    { name: 'Milionários FC', logo: teamLogos.milionarios },
    { name: 'Neblina FC', logo: teamLogos.neblina },
    { name: 'Onix FC', logo: teamLogos.onix },
    { name: 'Red Star FC', logo: teamLogos.redStar },
    { name: 'Real Barcélia', logo: teamLogos.realBarcelia },
    { name: 'Tirando Onda', logo: teamLogos.tirandoOnda },
    { name: 'Ambreve EC', logo: teamLogos.ambreve },
    { name: 'Atletiba EC', logo: teamLogos.atletiba },
  ];

  return teamsList.map((t, i) => ({
    pos: i + 1,
    name: t.name,
    logo: t.logo,
    pts: 30 - (i * 2),
    pj: 10,
    j: 10,
    v: 8 - i,
    e: 1,
    d: 1 + i,
    sg: 10 - i,
    last5: ['v', 'v', 'e', 'd', 'v'],
    movement: i % 2 === 0 ? 1 : -1,
  }));
}
