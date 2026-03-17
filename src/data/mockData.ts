export const lastMatch = {
  homeTeam: "Fenerbahçe",
  homeLogo: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png",
  awayTeam: "Trabzonspor",
  awayLogo: "https://upload.wikimedia.org/wikipedia/tr/a/ab/TrabzonsporAmblemi.png",
  homeScore: 2,
  awayScore: 1,
  date: "March 14, 2026",
  competition: "Süper Lig",
  stadium: "Ülker Stadyumu",
};

export const nextMatch = {
  homeTeam: "Galatasaray",
  homeLogo: "https://upload.wikimedia.org/wikipedia/tr/3/37/Galatasaray_Star_Logo.png",
  awayTeam: "Fenerbahçe",
  awayLogo: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png",
  date: "2026-03-21T19:00:00+03:00",
  competition: "Süper Lig",
  stadium: "RAMS Park",
};

export const fixtures = [
  {
    id: "f1",
    date: "2026-02-28T19:00:00+03:00",
    homeTeam: "Fenerbahçe",
    awayTeam: "Kasımpaşa",
    homeScore: 3,
    awayScore: 0,
    status: "completed",
    competition: "Süper Lig"
  },
  {
    id: "f2",
    date: "2026-03-07T19:00:00+03:00",
    homeTeam: "Alanyaspor",
    awayTeam: "Fenerbahçe",
    homeScore: 1,
    awayScore: 2,
    status: "completed",
    competition: "Süper Lig"
  },
  {
    id: "f3",
    date: "2026-03-14T19:00:00+03:00",
    homeTeam: "Fenerbahçe",
    awayTeam: "Trabzonspor",
    homeScore: 2,
    awayScore: 1,
    status: "completed",
    competition: "Süper Lig"
  },
  {
    id: "f4",
    date: "2026-03-21T19:00:00+03:00",
    homeTeam: "Galatasaray",
    awayTeam: "Fenerbahçe",
    homeScore: null,
    awayScore: null,
    status: "upcoming",
    competition: "Süper Lig"
  },
  {
    id: "f5",
    date: "2026-03-28T19:00:00+03:00",
    homeTeam: "Fenerbahçe",
    awayTeam: "Beşiktaş",
    homeScore: null,
    awayScore: null,
    status: "upcoming",
    competition: "Süper Lig"
  },
  {
    id: "f6",
    date: "2026-04-04T19:00:00+03:00",
    homeTeam: "Başakşehir",
    awayTeam: "Fenerbahçe",
    homeScore: null,
    awayScore: null,
    status: "upcoming",
    competition: "Süper Lig"
  }
];

export const news = [
  {
    id: "1",
    title: "Mourinho's Masterclass in Trabzonspor Victory",
    category: "Football",
    date: "March 15, 2026",
    image: "https://picsum.photos/seed/fener1/800/600",
    excerpt: "A dominant performance at home saw the team secure a vital 2-1 win in the crucial fixture.",
    content: "Full match report and analysis of the tactical masterclass that led to the victory. The team showed incredible resilience and attacking flair throughout the 90 minutes under Jose Mourinho's guidance. Goals from our star forwards sealed the deal in front of a packed Ülker Stadyumu.",
  },
  {
    id: "2",
    title: "En-Nesyri Hits 20-Goal Mark for the Season",
    category: "Football",
    date: "March 12, 2026",
    image: "https://picsum.photos/seed/fener2/800/600",
    excerpt: "The Moroccan striker continues his incredible goal-scoring form in the 25/26 campaign.",
    content: "Youssef En-Nesyri has been unstoppable this season, reaching the 20-goal milestone across all competitions. His aerial dominance and clinical finishing have been key to Fenerbahçe's title charge.",
  },
  {
    id: "3",
    title: "Derby Preparations: All Eyes on RAMS Park",
    category: "Club",
    date: "March 16, 2026",
    image: "https://picsum.photos/seed/fener3/800/600",
    excerpt: "The squad intensifies training ahead of the highly anticipated intercontinental derby.",
    content: "With the crucial away derby approaching, the team is fully focused at the Can Bartu Training Facilities. The coaching staff is working on specific tactical setups to secure three points on the road.",
  },
  {
    id: "4",
    title: "Fred Returns to Full Fitness",
    category: "Football",
    date: "March 10, 2026",
    image: "https://picsum.photos/seed/fener4/800/600",
    excerpt: "The Brazilian midfield maestro is ready for the crucial stretch of the season.",
    content: "Great news for Fenerbahçe fans as Fred has fully recovered from his minor knock and is back in full training. His energy and vision will be vital for the upcoming derby and European fixtures.",
  }
];

export const squad = [
  {
    id: "40",
    name: "Dominik Livaković",
    number: "40",
    position: "Goalkeeper",
    image: "https://api.sofascore.app/api/v1/player/193224/image",
    nationality: "Croatia",
    stats: { appearances: 36, cleanSheets: 18, saves: 112 },
    bio: "The Croatian wall. Elite reflexes and leadership from the back."
  },
  {
    id: "4",
    name: "Çağlar Söyüncü",
    number: "4",
    position: "Defender",
    image: "https://api.sofascore.app/api/v1/player/115598/image",
    nationality: "Turkey",
    stats: { appearances: 34, goals: 2, assists: 1 },
    bio: "Powerhouse defender known for his aerial dominance and aggressive tackling."
  },
  {
    id: "37",
    name: "Milan Škriniar",
    number: "37",
    position: "Defender",
    image: "https://api.sofascore.app/api/v1/player/190680/image",
    nationality: "Slovakia",
    stats: { appearances: 32, goals: 1, assists: 0 },
    bio: "World-class center back with exceptional reading of the game and physical presence."
  },
  {
    id: "6",
    name: "Alexander Djiku",
    number: "6",
    position: "Defender",
    image: "https://api.sofascore.app/api/v1/player/128965/image",
    nationality: "Ghana",
    stats: { appearances: 30, goals: 1, assists: 1 },
    bio: "Versatile and reliable defender. A key pillar of the defensive line."
  },
  {
    id: "24",
    name: "Jayden Oosterwolde",
    number: "24",
    position: "Defender",
    image: "https://api.sofascore.app/api/v1/player/627138/image",
    nationality: "Netherlands",
    stats: { appearances: 35, goals: 2, assists: 3 },
    bio: "High-speed modern fullback with great offensive contribution."
  },
  {
    id: "3",
    name: "Archie Brown",
    number: "3",
    position: "Defender",
    image: "https://api.sofascore.app/api/v1/player/708892/image",
    nationality: "England",
    stats: { appearances: 28, goals: 0, assists: 5 },
    bio: "Dynamic English fullback with incredible pace and crossing ability."
  },
  {
    id: "5",
    name: "İsmail Yüksek",
    number: "5",
    position: "Midfielder",
    image: "https://api.sofascore.app/api/v1/player/1007421/image",
    nationality: "Turkey",
    stats: { appearances: 32, goals: 2, assists: 4 },
    bio: "Defensive midfield engine. Relentless pressing and ball recovery specialist."
  },
  {
    id: "35",
    name: "Fred",
    number: "35",
    position: "Midfielder",
    image: "https://api.sofascore.app/api/v1/player/125103/image",
    nationality: "Brazil",
    stats: { appearances: 30, goals: 5, assists: 8 },
    bio: "Brazilian maestro who dictates the tempo of the game with his energy and vision."
  },
  {
    id: "53",
    name: "Sebastian Szymański",
    number: "53",
    position: "Midfielder",
    image: "https://api.sofascore.app/api/v1/player/345094/image",
    nationality: "Poland",
    stats: { appearances: 34, goals: 14, assists: 12 },
    bio: "Creative wizard in the midfield. Lethal left foot and high work rate."
  },
  {
    id: "8",
    name: "Mattéo Guendouzi",
    number: "8",
    position: "Midfielder",
    image: "https://api.sofascore.app/api/v1/player/826147/image",
    nationality: "France",
    stats: { appearances: 31, goals: 4, assists: 6 },
    bio: "Box-to-box midfielder with fiery passion and excellent distribution skills."
  },
  {
    id: "94",
    name: "Anderson Talisca",
    number: "94",
    position: "Midfielder",
    image: "https://api.sofascore.app/api/v1/player/216230/image",
    nationality: "Brazil",
    stats: { appearances: 29, goals: 18, assists: 7 },
    bio: "The scoring midfielder. Unstoppable shooting and technical brilliance."
  },
  {
    id: "19",
    name: "Edson Álvarez",
    number: "19",
    position: "Midfielder",
    image: "https://api.sofascore.app/api/v1/player/361321/image",
    nationality: "Mexico",
    stats: { appearances: 27, goals: 3, assists: 2 },
    bio: "Strategic defensive midfielder. A general on the pitch with great positioning."
  },
  {
    id: "10",
    name: "Dušan Tadić",
    number: "10",
    position: "Forward",
    image: "https://api.sofascore.app/api/v1/player/35142/image",
    nationality: "Serbia",
    stats: { appearances: 36, goals: 12, assists: 18 },
    bio: "The captain and tactical brain. Endless creativity and clutch performances."
  },
  {
    id: "97",
    name: "Allan Saint-Maximin",
    number: "97",
    position: "Forward",
    image: "https://api.sofascore.app/api/v1/player/256191/image",
    nationality: "France",
    stats: { appearances: 31, goals: 9, assists: 11 },
    bio: "Dribbling master. Unpredictable pace and flair that destroys defenses."
  },
  {
    id: "7",
    name: "Kerem Aktürkoğlu",
    number: "7",
    position: "Forward",
    image: "https://api.sofascore.app/api/v1/player/791942/image",
    nationality: "Turkey",
    stats: { appearances: 33, goals: 15, assists: 9 },
    bio: "Electric winger with great finishing and intelligent movement off the ball."
  },
  {
    id: "15",
    name: "Youssef En-Nesyri",
    number: "15",
    position: "Forward",
    image: "https://api.sofascore.app/api/v1/player/353032/image",
    nationality: "Morocco",
    stats: { appearances: 32, goals: 22, assists: 4 },
    bio: "King of the skies. Exceptional aerial threat and clinical striker."
  },
  {
    id: "9",
    name: "Edin Džeko",
    number: "9",
    position: "Forward",
    image: "https://api.sofascore.app/api/v1/player/14755/image",
    nationality: "Bosnia",
    stats: { appearances: 28, goals: 16, assists: 5 },
    bio: "Legendary striker with lethal finishing and tremendous experience."
  }
];


export const storeProducts = [
  {
    id: "p1",
    name: "2023/24 Home Jersey",
    price: "₺1,499",
    image: "https://picsum.photos/seed/jersey1/500/500",
    category: "Jersey"
  },
  {
    id: "p2",
    name: "2023/24 Away Jersey",
    price: "₺1,499",
    image: "https://picsum.photos/seed/jersey2/500/500",
    category: "Jersey"
  },
  {
    id: "p3",
    name: "Training Shorts",
    price: "₺699",
    image: "https://picsum.photos/seed/shorts/500/500",
    category: "Shorts"
  },
  {
    id: "p4",
    name: "Classic Scarf",
    price: "₺299",
    image: "https://picsum.photos/seed/scarf/500/500",
    category: "Scarf"
  },
  {
    id: "p5",
    name: "Logo Cap",
    price: "₺349",
    image: "https://picsum.photos/seed/cap/500/500",
    category: "Hat"
  },
  {
    id: "p6",
    name: "Pre-Match Jacket",
    price: "₺1,899",
    image: "https://picsum.photos/seed/jacket/500/500",
    category: "Jacket"
  }
];

export const museumEvents = [
  {
    year: "1907",
    title: "Foundation",
    description: "Fenerbahçe Sports Club was founded in Kadıköy.",
    image: "https://picsum.photos/seed/fener1907/800/600"
  },
  {
    year: "1959",
    title: "First National Champions",
    description: "Winner of the first ever Turkish Professional League.",
    image: "https://picsum.photos/seed/fener1959/800/600"
  },
  {
    year: "1968",
    title: "Balkan Cup Winners",
    description: "The first Turkish club to win an international trophy.",
    image: "https://picsum.photos/seed/fener1968/800/600"
  },
  {
    year: "2011",
    title: "The 18th Championship",
    description: "A legendary season ending with a spectacular victory.",
    image: "https://picsum.photos/seed/fener2011/800/600"
  },
  {
    year: "2017",
    title: "EuroLeague Champions",
    description: "Fenerbahçe Beko became the first Turkish team to win the EuroLeague.",
    image: "https://picsum.photos/seed/fener2017/800/600"
  }
];

export const votingOptions = [
  { id: "15", name: "Youssef En-Nesyri", votes: 45, image: "https://picsum.photos/seed/ennesyri/200/200" },
  { id: "97", name: "Allan Saint-Maximin", votes: 32, image: "https://picsum.photos/seed/maximin/200/200" },
  { id: "10", name: "Dušan Tadić", votes: 15, image: "https://picsum.photos/seed/tadic/200/200" },
  { id: "35", name: "Fred", votes: 8, image: "https://picsum.photos/seed/fred/200/200" }
];

