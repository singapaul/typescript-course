let numberee: string = "efwef";

// Required type = > optional members for consumers

type CircleConfig = {
  color?: string;
  radius?: number;
};

class Circle {
  // required internally all numbers will always be present
  private config: Required<CircleConfig>;

  constructor(config: CircleConfig) {
    this.config = {
      color: config.color ?? "green",
      radius: config.radius ?? 0,
    };
  }

  draw() {
    console.log(this.config.color, this.config.radius);
  }
}
