import Archetype, { Mage } from './Archetypes/index';
import Energy from './Energy';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races/index';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _dexterity: number;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = { type_: this._archetype.energyType,
      amount: getRandomInt(1, 10) };
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
  }

  public get race() {
    return this._race;
  }

  public get archetype() {
    return this._archetype;
  }

  public get lifePoints() {
    return this._lifePoints;
  }

  public get strength() {
    return this._strength;
  }

  public get defense() {
    return this._defense;
  }

  public get dexterity() {
    return this._dexterity;
  }

  public get energy() {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    const newMaxLifePoints = this._maxLifePoints + getRandomInt(1, 10);
    this._maxLifePoints = newMaxLifePoints > this._race.maxLifePoints
      ? this._race.maxLifePoints : newMaxLifePoints;

    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      const actualLifePoints = this._lifePoints - damage;
      this._lifePoints = actualLifePoints <= 0 ? -1 : actualLifePoints;
    }
    return this._lifePoints;
  }

  public special(enemy: Fighter): void {
    console.log('XAAABLAAAAAAUUUU!!!!');
    const multiplier = Math.random() + 1;
    const damage = this._strength * multiplier;
    if (multiplier > 1.8) {
      console.log('CRITICAL STRIKE!!!');
    }
    enemy.receiveDamage(damage);
  }
}