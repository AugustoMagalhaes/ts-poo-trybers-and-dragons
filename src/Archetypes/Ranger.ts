import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _archetypeInstances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger._archetypeInstances = Ranger
      .createdArchetypeInstances() + 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._archetypeInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
