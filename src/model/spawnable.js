class Vehicle {
  static RAZORBACK = "Razorback";
  static WARTHOG = "Warthog";
  static WASP = "Wasp";
}

class Weapon {
  static SKEWER = 'Skewer';
  static ROCKET_LAUNCHER = 'Rocket Launcher';
  static CINDERSHOT = 'Cindershot';
  static SNIPER_RIFLE = 'Sniper Rifle';
  static SHOCK_RIFLE = 'Shock Rifle'
  static STALKER_RIFLE = 'Stalker Rifle';
  static MANGLER = 'Mangler';
  static DISRUPTOR = 'Disruptor'
  static PLASMA_PISTOL = 'Plasma Pistol';
  static BULLDOG = 'Bulldog';
  static HEATWAVE = 'Heatwave';
  static SENTINEL_BEAM = 'Sentinel Beam';
  static NEEDLER = 'Needler';
  static ENERGY_SWORD = 'Energy Sword';
  static GRAVITY_HAMMER = 'Gravity Hammer';
  static RAVAGER = 'Ravager';
  static HYDRA = 'Hydra';
}

class Spawnable {
  constructor(name, respawnSecs, spawnSecs = 0, location) {
    this.name = name;
    this.respawnSecs = respawnSecs;
    this.spawnSecs = spawnSecs;
    this.location = location;
  }
}

class BigTeamSpawnable extends Spawnable {
  static RAZORBACK = new BigTeamSpawnable(Vehicle.RAZORBACK, 120);
  static WARTHOG = new BigTeamSpawnable(Vehicle.WARTHOG, 120);
  static WASP = new BigTeamSpawnable(Vehicle.WASP, 120, 135);

  static SKEWER = new BigTeamSpawnable(Weapon.SKEWER, 180);
  static ROCKET_LAUNCHER = new BigTeamSpawnable(Weapon.ROCKET_LAUNCHER, 120);
  static CINDERSHOT = new BigTeamSpawnable(Weapon.CINDERSHOT, 120);
  static SNIPER_RIFLE = new BigTeamSpawnable(Weapon.SNIPER_RIFLE, 180);
  static SHOCK_RIFLE = new BigTeamSpawnable(Weapon.SHOCK_RIFLE, 90);
  static STALKER_RIFLE = new BigTeamSpawnable(Weapon.STALKER_RIFLE, 90);
  static MANGLER = new BigTeamSpawnable(Weapon.MANGLER, 30);
  static DISRUPTOR = new BigTeamSpawnable(Weapon.DISRUPTOR, 30);
  static PLASMA_PISTOL = new BigTeamSpawnable(Weapon.PLASMA_PISTOL, 30);
  static BULLDOG = new BigTeamSpawnable(Weapon.BULLDOG, 60);
  static HEATWAVE = new BigTeamSpawnable(Weapon.HEATWAVE, 60);
  static SENTINEL_BEAM = new BigTeamSpawnable(Weapon.SENTINEL_BEAM, 60);
  static NEEDLER = new BigTeamSpawnable(Weapon.NEEDLER, 60);
  static ENERGY_SWORD = new BigTeamSpawnable(Weapon.ENERGY_SWORD, 240);
  static GRAVITY_HAMMER = new BigTeamSpawnable(Weapon.GRAVITY_HAMMER, 240);
  static RAVAGER = new BigTeamSpawnable(Weapon.RAVAGER, 90);
  static HYDRA = new BigTeamSpawnable(Weapon.HYDRA, 90);
}

export const spawnableTypes = ['vehicles', 'weapons', 'equipment', 'powerups'];
export const playlists = ['Big Team Battle'];
export const gameModes = ['Slayer'];
export const mapToSpawns = {
  Highpower: {
    vehicles: [
      BigTeamSpawnable.WARTHOG,
      BigTeamSpawnable.WASP
    ],
    weapons: [
      BigTeamSpawnable.SKEWER,
      BigTeamSpawnable.SNIPER_RIFLE,
      BigTeamSpawnable.ROCKET_LAUNCHER,
      BigTeamSpawnable.SHOCK_RIFLE,
      BigTeamSpawnable.STALKER_RIFLE,
      BigTeamSpawnable.BULLDOG,
      BigTeamSpawnable.HEATWAVE,
      BigTeamSpawnable.SENTINEL_BEAM,
      BigTeamSpawnable.NEEDLER,
      BigTeamSpawnable.RAVAGER,
      BigTeamSpawnable.HYDRA,
      BigTeamSpawnable.CINDERSHOT,
      BigTeamSpawnable.ENERGY_SWORD,
      BigTeamSpawnable.GRAVITY_HAMMER
    ]
  },
  Fragmentation: {
    vehicles: [
      BigTeamSpawnable.RAZORBACK,
      BigTeamSpawnable.WARTHOG
    ],
    weapons: [
      BigTeamSpawnable.SKEWER,
      BigTeamSpawnable.SNIPER_RIFLE,
      BigTeamSpawnable.STALKER_RIFLE,
      BigTeamSpawnable.MANGLER,
      BigTeamSpawnable.DISRUPTOR,
      BigTeamSpawnable.PLASMA_PISTOL,
      BigTeamSpawnable.BULLDOG,
      BigTeamSpawnable.HEATWAVE,
      BigTeamSpawnable.SENTINEL_BEAM,
      BigTeamSpawnable.NEEDLER,
      BigTeamSpawnable.RAVAGER,
      BigTeamSpawnable.HYDRA
    ]
  },
  Deadlock: {
    vehicles: [
      BigTeamSpawnable.WARTHOG
    ],
    weapons: [
      BigTeamSpawnable.SKEWER,
      BigTeamSpawnable.ROCKET_LAUNCHER,
      BigTeamSpawnable.CINDERSHOT,
      BigTeamSpawnable.SHOCK_RIFLE,
      BigTeamSpawnable.STALKER_RIFLE,
      BigTeamSpawnable.MANGLER,
      BigTeamSpawnable.DISRUPTOR,
      BigTeamSpawnable.PLASMA_PISTOL,
      BigTeamSpawnable.BULLDOG,
      BigTeamSpawnable.HEATWAVE,
      BigTeamSpawnable.SENTINEL_BEAM,
      BigTeamSpawnable.NEEDLER,
      BigTeamSpawnable.ENERGY_SWORD,
      BigTeamSpawnable.GRAVITY_HAMMER
    ]
  }
};