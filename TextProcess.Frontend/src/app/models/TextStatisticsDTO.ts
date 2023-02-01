export class TextStatisticsDTO {
  spacesQuantity: number = 0;
  wordQuantity: number = 0;
  hyphensQuantity: number = 0;

  public constructor(SpacesQuantity: number, WordQuantity: number, HyphensQuantity: number) {
    this.spacesQuantity = SpacesQuantity;
    this.wordQuantity = WordQuantity;
    this.hyphensQuantity = HyphensQuantity;
  }
}
