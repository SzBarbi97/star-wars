import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'calendarConverter'
})
export class CalendarConverterPipe implements PipeTransform {

  private lyCalendar: number = 3277;
  private crcCalendar: number = 7977;

  transform(value: any, calendarType: string): any {

    if (value && value != 'unknown') {
      if (value.match('BBY')) {
        if (calendarType === 'ly') {
          return this.lyCalendar - value.replace('BBY', '') + 'LY';
        } else if (calendarType === 'crc') {
          return this.crcCalendar - value.replace('BBY', '');
        }
      } else if (value.match('ABY')) {
        if (calendarType === 'ly') {
          return this.lyCalendar + parseInt(value.replace('ABY', '')) + 'LY';
        } else if (calendarType === 'crc') {
          return this.crcCalendar + parseInt(value.replace('ABY', ''));
        }
      }
    }
    return value;
  }
}
