import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _archetypeInstances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._archetypeInstances = Warrior
      .createdArchetypeInstances() + 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._archetypeInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
