'use script';

var races = [
  { name: 'Human', plussableAbilities: ['str', 'dex', 'con', 'int', 'wis', 'cha'] },
  { name: 'Dwarf', plussableAbilities: ['con', 'wis'] },
  { name: 'Dark Elf', plussableAbilities: ['dex', 'cha'] },
  { name: 'High Elf', plussableAbilities: ['int', 'cha'] },
  { name: 'Wood Elf', plussableAbilities: ['dex', 'wis'] },
  { name: 'Gnome', plussableAbilities: ['dex', 'int'] },
  { name: 'Half-Elf', plussableAbilities: ['con', 'cha'] },
  { name: 'Half-Orc', plussableAbilities: ['str', 'dex'] },
  { name: 'Halfling', plussableAbilities: ['con', 'dex'] },
  { name: 'Dragonic', plussableAbilities: ['str', 'cha'] },
  { name: 'Holy One', plussableAbilities: ['wis', 'cha'] },
  { name: 'Forgeborn', plussableAbilities: ['str', 'con'] },
  { name: 'Tiefling', plussableAbilities: ['str', 'int'] },
];

module.exports = races;
