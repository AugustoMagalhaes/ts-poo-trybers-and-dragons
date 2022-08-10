import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _archetypeInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._archetypeInstances = Necromancer
      .createdArchetypeInstances() + 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._archetypeInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
