// Here, we defined all function for socket's events
// (event's names and signature are defined in ./src/events.ts)
// In this file, we implements these signatures

import {GamePlay, keyCardsOnTable} from "../customTypes";
import {Game} from "../rules/Game";

export default {
  gamePlay: (game: Game) =>
    function (info: GamePlay) {
      // In first time, idPlayer will be always equal to 0
    },

  // TODO: - Restrict number in function of player's number
  gameDraw: function (playerId: number) {},

  gameBook: function (whichStack: keyCardsOnTable) {},
};
