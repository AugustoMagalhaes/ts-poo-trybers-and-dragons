import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._racesInstances = Dwarf.createdRacesInstances() + 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._racesInstances;
  }
}