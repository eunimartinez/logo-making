class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(colorVar) {
    this.color = colorVar;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="160" height="160" fill="${this.color}"/>`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="80" fill="${this.color}"/>`;
  }
}

export default { Triangle, Square, Circle };
