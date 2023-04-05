export class BarChartData {
  public blabel: string;
  public value: number;

  constructor(blabel: string, value: number) {
    this.blabel = blabel;
    this.value = value;
  }
}

export class DoughnutChartData {
  public dlabel: string;
  public value: number;
  public color: string;

  constructor(dlabel: string, value: number, color: string) {
    this.dlabel = dlabel;
    this.value = value;
    this.color = color;
  }
}
