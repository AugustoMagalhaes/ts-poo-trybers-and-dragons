import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _archetypeInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._archetypeInstances = Mage.createdArchetypeInstances() + 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._archetypeInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
