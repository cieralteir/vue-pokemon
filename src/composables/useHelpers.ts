// Can just be a normal js file
export function useHelpers() {
  function displayLabel(value: string): string {
    if (!value) return "";
    return `${value.charAt(0).toUpperCase() + value.slice(1)}`.replace(
      "-",
      " "
    );
  }

  function pokemonTypeColor(type: string): string {
    let color = "";
    switch (type) {
      case "fire":
        color = "red-500";
        break;
      case "water":
        color = "cyan-500";
        break;
      case "grass":
        color = "emerald-500";
        break;
      case "electric":
        color = "amber-300";
        break;
      case "ground":
      case "rock":
        color = "stone-500";
        break;
      case "normal":
        color = "neutral-500";
        break;
      case "fighting":
        color = "amber-800";
        break;
      case "flying":
        color = "sky-400";
        break;
      case "poison":
        color = "violet-400";
        break;
      case "psychic":
        color = "pink-400";
        break;
      case "ice":
        color = "cyan-400";
        break;
      case "bug":
        color = "lime-500";
        break;
      case "dragon":
        color = "sky-700";
        break;
      case "ghost":
      case "dark":
        color = "gray-600";
        break;
      case "steel":
        color = "slate-600";
        break;
      case "fairy":
        color = "rose-400";
        break;
    }
    return color;
  }

  return {
    displayLabel,
    pokemonTypeColor,
  };
}
