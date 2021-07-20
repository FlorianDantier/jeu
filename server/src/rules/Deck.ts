export class Deck {
  private cardsLeft: Array<number>;

  constructor() {
    this.cardsLeft = [];
    for (let i = 2; i < 100; i++) {
      this.cardsLeft.push(i);
    }
  }

  private drawOneCardsAndRemoveIt(): number {
    // index is between 2 and cardsLeft.length
    const index = Math.floor(Math.random() * this.cardsLeft.length);
    const drawCards = this.cardsLeft[index];

    // Remove element which is in index location
    this.cardsLeft = this.cardsLeft.filter((e, i) => i !== index);

    return drawCards;
  }

  public draw(numberOfDraw: number): Array<number> {
    const forReturn: Array<number> = [];
    const limitDraw = numberOfDraw > this.cardsLeft.length ? this.cardsLeft.length : numberOfDraw;
    for (let i = 0; i < limitDraw; i++) {
      const card = this.drawOneCardsAndRemoveIt();
      forReturn.push(card);
    }

    return forReturn;
  }

  // TODO: - Do it with mocha or jest
  public test(): void {
    const t = new Deck();
    console.log(`number of cards before draw ${t.cardsLeft.length}`);
    t.draw(50);
    console.log("=============================================");
    console.log(`number of cards after draw ${t.cardsLeft.length}`);
  }
}
