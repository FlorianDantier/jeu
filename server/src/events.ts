import {GamePlay, keyCardsOnTable} from "./customTypes";

export interface ClientEvent {
  "game:play": (info: GamePlay) => void;
  "game:draw": (playerId: number) => void;
  "game:book": (whichStack: keyCardsOnTable) => void;
}

export interface ServerEvent {
  "game:played": (info: GamePlay) => void;
  "game:drawn": (playerId: number) => void;
  "game:booked": (whichStack: keyCardsOnTable) => void;
}
