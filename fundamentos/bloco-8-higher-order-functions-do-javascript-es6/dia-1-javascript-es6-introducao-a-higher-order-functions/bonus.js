// Parte I - Game Actions Simulato

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
const damageDragon = (_dragon) => {
  const damageDragaon = Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
  return damageDragaon;
} 

// const attack = (type, _action) =>{
//   const dano = _action(type);
//   return dano;
// }

const battleMembers = { mage, warrior, dragon };

