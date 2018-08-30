import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConditionalFormattingService {

  constructor() { }

  private hex(c): string {
    const s = '0123456789abcdef';

    // tslint:disable-next-line:radix
    let i = parseInt(c);
    if (i === 0 || isNaN(c)) {
      return '00';
    }
    i = Math.round(Math.min(Math.max(0, i), 255));
    return s.charAt((i - i % 16) / 16) + s.charAt(i % 16);
  }

  /* Convert an RGB triplet to a hex string */
  private convertToHex(rgb): string {
    return this.hex(rgb[0]) + this.hex(rgb[1]) + this.hex(rgb[2]);
  }

  /* Remove '#' in color hex string */
  private trim(s) { return (s.charAt(0) === '#') ? s.substring(1, 7) : s; }

  /* Convert a hex string to an RGB triplet */
  private convertToRGB(hex): number[] {
    const color = [];
    color[0] = parseInt((this.trim(hex)).substring(0, 2), 16);
    color[1] = parseInt((this.trim(hex)).substring(2, 4), 16);
    color[2] = parseInt((this.trim(hex)).substring(4, 6), 16);
    return color;
  }

  generateTwoWayGradient(colorEnd, colorStart, colorCount): string[] {

    // The beginning of your gradient
    const start = this.convertToRGB(colorStart);

    // The end of your gradient
    const end = this.convertToRGB(colorEnd);

    // The number of colors to compute
    const len = colorCount;

    // Alpha blending amount
    let alpha = 0.0;

    const saida = [];

    for (let i = 0; i < len; i++) {
      const c = [];
      alpha += (1.0 / len);

      c[0] = start[0] * alpha + (1 - alpha) * end[0];
      c[1] = start[1] * alpha + (1 - alpha) * end[1];
      c[2] = start[2] * alpha + (1 - alpha) * end[2];

      saida.push('#' + this.convertToHex(c));

    }
    return saida;
  }

  generateThreeWayGradient(colorStart, colorMiddle, colorEnd, colorCount): string[] {
    const ar1 = this.generateTwoWayGradient(colorStart, colorMiddle, colorCount);
    const ar2 = this.generateTwoWayGradient(colorMiddle, colorEnd, colorCount);

    const output = [];

    for (let i = 0; i < ar1.length; i++) {
      output.push(ar1[i]);
    }

    ar2.splice(0, 1);
    for (let i = 0; i < ar2.length; i++) {
      output.push(ar2[i]);
    }
    return output;
  }

  getConditionalValueColor(value: number, min: number, max: number, colorArray: string[]): string {
    const step = (max - min) / colorArray.length;
    let cIndex = 0;
    // if (value === 10.7) {
    //   console.log('here');
    // }

    if (value === max || value > max) {
      return colorArray[colorArray.length - 1];
    } else if (value === min) {
      return colorArray[0];
    }

    for (let i = min; i < max; i += step) {
      if (i === min) {
        if (value < i + step) {
          return colorArray[cIndex];
        }
      } else if (i === max - step || i === max) {
        if (value > max - step) {
          return colorArray[cIndex];
        }
      } else {
        if (value > i && value < i + step) {
          return colorArray[cIndex];
        }
      }
      cIndex++;
    }
  }
}
