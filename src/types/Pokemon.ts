import type Ability from "@/types/Ability";
import type Item from "@/types/Item";
import type Stat from "@/types/Stat";
import type Type from "@/types/Type";

export default interface Pokemon {
  id: number;
  name: string;
  abilities: {
    ability: Ability;
  }[];
  held_items: {
    item: Item;
  }[];
  stats: {
    base_stat: number;
    stat: Stat;
  }[],
  types: {
    type: Type;
  }[];
  sprites: {
    front_default: string;
  };
}
