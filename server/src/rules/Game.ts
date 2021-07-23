import {Player} from "./Player";
import {Deck} from "./Deck";
import {keyCardsOnTable} from "../customTypes";

export class Game {
  private Players: Array<Player>;
  private whoWillPlay: number;
  private _cardsOnTable: {
    ascendingOne: number;
    ascendingTwo: number;
    descendingOne: number;
    descendingTwo: number;
  };

  //TODO: - Find correct name for this
  _Deck: Deck;

  constructor(playerNumber: number) {
    this.whoWillPlay = 0;
    this._Deck = new Deck();
    this.Players = Array<Player>(playerNumber);
    this.Players = this.Players.map((e, i) => new Player(i, this._Deck.draw(6)));
    this._cardsOnTable = {ascendingOne: 1, ascendingTwo: 1, descendingOne: 100, descendingTwo: 100};
  }

  // TODO: - Check card's value
  placeCardsOnTable(place: keyCardsOnTable, value: number) {
    this._cardsOnTable[place] = value;
  }
}
