// Concepto puro
class Circulo {
  private _radio: number;
  public _diametro: number;

  constructor(radio: number, diametro: number) {
    this._radio = radio;
    this._diametro = diametro;
  }

  get radio(): number {
    return this._radio;
  }

  set radio(valor: number) {
    if (valor <= 0) throw new Error("El radio debe ser positivo");
    this._radio = valor;
  }

  get area(): number {
    return Math.PI * this._radio ** 2;
  }
}

const c = new Circulo(5, 10);
console.log(c.radio);          // 5   ← usa el getter
console.log(c.area.toFixed(2)); // 78.54

c.radio = 10;                  // usa el setter
console.log(c.area.toFixed(2)); // 314.16
console.log(c._diametro);
c._diametro=15;
console.log(c._diametro);


// c.radio = -3;  // Error: El radio debe ser positivo