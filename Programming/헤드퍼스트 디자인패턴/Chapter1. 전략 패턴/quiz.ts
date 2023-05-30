interface WeaponBehavior {
  useWeapon(): string;
}
class KnifeBehavior implements WeaponBehavior {
  useWeapon() {
    return '칼로 벤다.';
  }
}
class AxeBehavior implements WeaponBehavior {
  useWeapon() {
    return '도끼로 찍는다.';
  }
}

class Character {
  private _weapon: WeaponBehavior;
  set weapon(weapon: WeaponBehavior) {
    this._weapon = weapon;
  }
  fight() {
    return this._weapon.useWeapon();
  }
}

class Troll extends Character {
  constructor() {
    super();
    this.weapon = new AxeBehavior();
  }
}

const troll = new Troll();
console.log(troll.fight());

troll.weapon = new KnifeBehavior();
console.log(troll.fight());
