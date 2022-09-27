export class Vehicles {
  constructor(public name: string,
              public model: string,
              public vehicle_class: string,
              public manufacturer: string,
              public length: string,
              public cost_in_credits: string,
              public crew: string,
              public passenger: string,
              public max_atmosphering_speed: string,
              public cargo_capacity: string,
              public consumables: string,
              public films: string[],
              public pilots: string[],
              public url: string,
              public created: string,
              public edited: string) {
  }
}
