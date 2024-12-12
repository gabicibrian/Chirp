import ssValorant from "../assets/snapshot-valorant.png";
import ssValorant2 from "../assets/snapshot-valorant-2.png";
import ssCeleste from "../assets/snapshot-celeste.png";
import ssRoblox from "../assets/snapshot-roblox.png";
import ssStardew from "../assets/snapshot-StardewValley.png";
import ssFortnite from "../assets/snapshot-Fortnite.png";
import ssMarioKart from "../assets/snapshot-MarioKart.png";
import ssBrawl from "../assets/snapshot-brawl.png";
import ssFlorence from "../assets/snapshot-florence.png";
import ssClash from "../assets/snapshot-clashroyale.png";
import ssAmongUs from "../assets/snapshot-amongus.png";
import ssStumble from "../assets/snapshot-stumbleguys.png";
import ssUndertale from "../assets/snapshot-undertale.png";

// Lista de información de Para Ti
const myUsername = localStorage.getItem("user");
 export const mySnapshot = [
  {
      id: "mi-snapshot",
      size: "horizontal",
      imgPath: `${ssValorant2}`,
      poster: `${myUsername}`,
      caption: 'clive, clove, claugh',
      users: ["alexa3k", "bridget_pines", "mojojojo", "ms.stacy"],
      comments: [
          "chambrecitos con café",
          "invita mujeeer",
          "que ambiciosa mi amix",
          "la menos rigiosa..."
      ]
  }
]
export const dashboardPostsParaTi = [
  {
    id: "snapshot-1",
    size: "horizontal",
    imgPath: `${ssValorant}`,
    poster: "madison",
    caption: "quick valo<3",
    
    users: ["alex_the_pro", "sarah_plays", "gaming_legend", "viper_sniper"],
    comments: [
      "NAUUUUR, ¡eso fue un ACE!",
      "¿Te atreves a un 1v1?",
      "¡Juega conmigo en la próxima ronda!",
      "¡Vaya, qué jugada más épica!",
    ],
  },
  {
    id: "snapshot-2",
    size: "mid",
    imgPath: `${ssStardew}`,
    poster: "mei",
    caption: "ovo",
    
    users: ["spideys_wife", "dark_knight", "pixel_girl"],
    comments: [
      "¡Esa granja está on fire!",
      "¿Cuándo me invitas a tu isla en Stardew?",
      "Me encanta cómo organizaste el huerto.",
    ],
  },
  {
    id: "snapshot-3",
    size: "mid",
    imgPath: `${ssMarioKart}`,
    poster: "lolita",
    caption: "carreritas",
    
    users: ["mario_master", "toxic_queen", "x_shady"],
    comments: [
      "¡Eso fue increíble!",
      "¿Te unes a la siguiente partida de ranked?",
      "¡Te vi en el stream ayer, qué épico!",
    ],
  },
  {
    id: "snapshot-4",
    size: "square",
    imgPath: `${ssFortnite}`,
    poster: "ally15",
    caption: "juguemoss",
    
    users: ["jazz_mvp", "lola_pallooza", "gaming_queen"],
    comments: [
      "¡Vamos por el campeonato!",
      "¡Te vi en stream!",
      "Qué jugada tan épica, eso es puro skill.",
    ],
  },
  {
    id: "snapshot-5",
    size: "vertical",
    imgPath: `${ssCeleste}`,
    poster: "uwu",
    caption: "amo",
    
    users: ["player_one", "viper_sniper", "lucky_gamer"],
    comments: [
      "¿Ese es un speedrun?",
      "¡Impresionante!",
      "Qué nivel de precisión.",
    ],
  },
  {
    id: "snapshot-6",
    size: "horizontal",
    imgPath: `${ssBrawl}`,
    poster: "jennifer",
    caption: "un poco de Brawl cae bien",
    
    users: ["gaming_legend", "viper_sniper", "alex_the_pro"],
    comments: [
      "¡Eso estuvo épico!",
      "¿Cómo lograste ese headshot?",
      "Impresionante jugada, te admiro.",
    ],
  },
  {
    id: "snapshot-7",
    size: "mid",
    imgPath: `${ssStardew}`,
    poster: "viktornation",
    caption: "ovo",
    
    users: ["toxic_queen", "sarah_plays", "dark_knight"],
    comments: [
      "¡Dame un 5, esa fue una jugada épica!",
      "No puedo creer que hayas sobrevivido a esa ronda.",
      "Vamos a romperla en la siguiente.",
    ],
  },
  {
    id: "snapshot-8",
    size: "mid",
    imgPath: `${ssMarioKart}`,
    poster: "cait_games",
    caption: "más carreritas",
    
    users: ["pixel_girl", "mario_master", "nightwolf_99"],
    comments: [
      "¡¿Dónde aprendiste a jugar así?!",
      "¿Jugamos juntos la próxima vez?",
      "Eres un crack en este juego.",
    ],
  },
  {
    id: "snapshot-9",
    size: "horizontal",
    imgPath: `${ssRoblox}`,
    poster: "cacahuate",
    caption: "jail break!!!",
    
    users: ["x_shady", "gamer_freak", "dark_knight"],
    comments: [
      "¡¿Cómo fue ese flick?!",
      "¡Te vi en la liga!",
      "Esos movimientos son de profesional.",
    ],
  },
];

// Lista de información de Mis Amigos
export const dashboardPostsAmigos = [
  {
    id: "snapshot-11",
    size: "horizontal",
    imgPath: `${ssFlorence}`,
    poster: "elsy",
    caption: "a ver qué tal",
    
    users: ["sarah_plays", "viper_sniper"],
    comments: [
      "¡Jugar Florence nunca había sido tan épico!",
      "¿Me invitas al siguiente juego?",
    ],
  },
  {
    id: "snapshot-12",
    size: "horizontal",
    imgPath: `${ssStumble}`,
    poster: "monique",
    caption: "heeelp!",
    
    users: ["spideys_wife", "toxic_queen"],
    comments: [
      "¡Yo también quiero esa skin!",
      "¿Cuando hacemos un torneo de stumble guys?",
    ],
  },
  {
    id: "snapshot-13",
    size: "vertical",
    imgPath: `${ssClash}`,
    poster: "meli",
    caption: "subi de rank",
    
    users: ["lola_pallooza", "nightwolf_99", "gamer_freak"],
    comments: [
      "¡Qué tal está esa actualización?",
      "¡clash royale es la vida!",
      "Este minijuego está buenísimo.",
    ],
  },
  {
    id: "snapshot-14",
    size: "square",
    imgPath: `${ssUndertale}`,
    poster: "andry",
    caption: "bored",
    
    users: ["spideys_wife", "alex_the_pro"],
    comments: [
      "¡Es hora de ver a Papyrus!",
      "¿Me ayudas a completar este mapa?",
    ],
  },
  {
    id: "snapshot-15",
    size: "horizontal",
    imgPath: `${ssAmongUs}`,
    poster: "mrs.holland",
    caption: "de regreso a 2020 👍",
    
    users: ["dark_knight", "viper_sniper", "gamer_123", "lucky_gamer"],
    comments: [
      "¡Eso es un auténtico desafío!",
      "¿Te unes a mi speedrun en Celeste?",
      "¡Vas por el récord!",
      "Que niceee",
    ],
  },
  {
    id: "snapshot-16",
    size: "horizontal",
    imgPath: `${ssRoblox}`,
    poster: "lola",
    caption: "noche de roblooox",
    
    users: ["toxic_queen", "gaming_legend", "pixel_girl"],
    comments: [
      "¡Acabo de conseguir la mejor skin!",
      "¿Puedo ganar el juego de rol esta vez?",
      "¡Este evento está de locos!",
    ],
  },
  {
    id: "snapshot-17",
    size: "mid",
    imgPath: `${ssStardew}`,
    poster: "cata_2002",
    caption: "toca cuidar la granjita",
    
    users: ["gamer_freak", "spideys_wife", "alex_the_pro"],
    comments: [
      "¡Roblox es el futuro!",
      "¿Cómo te va con el nuevo update de Roblox?",
      "No puedo esperar a jugar la nueva versión.",
    ],
  },
  {
    id: "snapshot-18",
    size: "mid",
    imgPath: `${ssCeleste}`,
    poster: "sans_queen",
    caption: "noche de celeste",
    
    users: ["gaming_queen", "nightwolf_99"],
    comments: ["¡Esa skin está increíble!", "¿Viste el stream de ayer?"],
  },
];

export const userList = [
  {
    user: "Madison Paz",
    username: "madison",
  },
  {
    user: "Melany Díaz",
    username: "mei",
  },
  {
    user: "Allyson Sauceda",
    username: "ally15",
  },
  {
    user: "Cindy López",
    username: "cacahuate",
  },
  {
    user: "Lola Molina",
    username: "lolita",
  },
  {
    user: "Janneate Cruz",
    username: "uwu",
  },
  {
    user: "Jennifer Santos",
    username: "jennifer",
  },
  {
    user: "Sandy Valle",
    username: "viktornation",
  },
  {
    user: "Caitlyn Sevilla",
    username: "cait_games",
  },
  {
    user: "Elsy Delgado",
    username: "elsy",
  },

  {
    user: "Monique Cabrera",
    username: "monique",
  },
  {
    user: "Melissa Echeverría",
    username: "meli",
  },

  {
    user: "Andrea Castillo",
    username: "andry",
  },
  {
    user: "Camila Ortega",
    username: "mrs.holland",
  },
  {
    user: "Lola Medina",
    username: "lola",
  },
  {
    user: "Catalina Rosales",
    username: "cata_2002",
  },
  {
    user: "Amy Tabora",
    username: "sans_queen",
  },
];
