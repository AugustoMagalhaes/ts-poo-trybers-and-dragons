import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._racesInstances = Halfling.createdRacesInstances() + 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._racesInstances;
  }
}