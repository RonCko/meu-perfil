// script.js

// Dados dos campeões de League of Legends, roles e spells.
const champions = [
  "Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Annie", "Ashe", "Blitzcrank", "Braum", "Caitlyn",
  "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Ekko", "Elise", "Ezreal",
  "Fiora", "Garen", "Gragas", "Graves", "Gwen", "Hecarim", "Illaoi", "Irelia", "Janna", "Jarvan IV",
  "Jhin", "Jinx", "Kai'Sa", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "Kha'Zix",
  "Kled", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lux", "Malphite", "Miss Fortune", "Mordekaiser", "Nami",
  "Nasus", "Nidalee", "Olaf", "Orianna", "Pantheon", "Poppy", "Pyke", "Rakan", "Rammus", "Rek'Sai",
  "Renekton", "Riven", "Rumble", "Samira", "Sejuani", "Senna", "Seraphine", "Shaco", "Shen", "Sivir",
  "Sona", "Soraka", "Swain", "Sylas", "Taliyah", "Tahm Kench", "Teemo", "Thresh", "Tristana", "Trundle",
  "Tryndamere", "Twisted Fate", "Udyr", "Urgot", "Vayne", "Veigar", "Vex", "Vi", "Vladimir", "Volibear",
  "Warwick", "Wukong", "Xayah", "Yasuo", "Yone", "Zed", "Ziggs", "Zilean", "Zoe"
];

const roles = ["Top", "Mid", "Jungle", "ADC", "Suporte"];
const spells = ["Flash", "Ignite", "Heal", "Barrier", "Exhaust", "Teleport", "Ghost", "Smite", "Cleanse", "Clarity"];

function generateRandom() {
  // Sorteia um campeão, uma role e duas spells
  const randomChampion = champions[Math.floor(Math.random() * champions.length)];
  const randomRole = roles[Math.floor(Math.random() * roles.length)];
  const randomSpell1 = spells[Math.floor(Math.random() * spells.length)];
  const randomSpell2 = spells[Math.floor(Math.random() * spells.length)];

  // Exibe os resultados na página
  document.getElementById("champion").innerText = randomChampion;
  document.getElementById("role").innerText = randomRole;
  document.getElementById("spells").innerText = `${randomSpell1} + ${randomSpell2}`;
}
