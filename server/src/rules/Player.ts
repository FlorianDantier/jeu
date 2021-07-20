export class Player {
  private _hand: Array<number>;

  // _hand need to be equal to 6
  constructor(_hand: Array<number>) {
    this._hand = [..._hand];
  }

  playCard(index: number): number {
    return this._hand[index];
  }

  drawCard(cards: Array<number>): void {
    cards.forEach((card) => this._hand.push(card));
    cards.length > 6 && console.log("Error, to many cards in player's _hand");
  }
}
