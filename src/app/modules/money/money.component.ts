import { Component, OnInit } from '@angular/core';
import {KeyValue} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {MoneyService} from '../../services/money/money.service';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  public money;

  constructor(public moneyService: MoneyService, private titleService: Title) {
    this.titleService.setTitle('Over2Craft - Classement de richesse Freebuild');
  }

  ngOnInit(): void {
    this.moneyService.getTop().subscribe((data) => {
      this.money = data;
    });
  }

  transform(value: any): string {
    if (value) {
      // Gets the value as a string
      if (typeof value !== 'string') {
        value = value.toString();
      }
      // Delete existing spaces
      while ((value as string).indexOf(' ') !== -1) {
        value = (value as string).replace(' ', '');
      }

      // Manage decimal values
      let integerPart: string = value;
      if (value.indexOf('.') !== -1) {
        integerPart = value.slice(0, value.indexOf('.'));
      }
      if (value.indexOf(',') !== -1) {
        integerPart = value.slice(0, value.indexOf(','));
      }

      let firstSlice = true;
      const arrayResults: Array<string> = [];
      let finalResult = '';

      const divisor = 3;
      const dividend: number = integerPart.length;
      let remainder = dividend % divisor;
      let quotient = (dividend + remainder) / divisor;

      if (dividend >= 3) {
        do {
          if (firstSlice && remainder > 0) {
            // Manage numbers with remainders
            firstSlice = false;
            arrayResults.push(integerPart.slice(0, remainder));
          } else {
            // Slice each part of the number to an array
            firstSlice = false;
            arrayResults.push(integerPart.slice(remainder, remainder + divisor));
            remainder = remainder + divisor;
            quotient--;
          }
          // Continue dividing the number while there are values
        } while (quotient >= 1);

        // Concats the sliced parts to build the final number
        arrayResults.forEach(part => {
          finalResult += `${part} `;
        });
        // Delete any trailing whitespace
        finalResult = finalResult.trim();
        return finalResult;
      } else {
        return value;
      }
    }
    return value;
  }

  // Preserve original property order
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

// Order by ascending property value
  valueAscOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.value.localeCompare(b.value);
  }

// Order by descending property key
  keyDescOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

}
