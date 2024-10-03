import { Component } from '@angular/core';
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"
import {from} from "rxjs";

dayjs.extend(duration)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume';
  year = new Date().getUTCFullYear();

  tenure(fromMonth: number, fromYear: number, toMonth?: number, toYear?: number) {
    let fromDate = dayjs().month(fromMonth).year(fromYear);
    let toDate = dayjs();
    if (toMonth && toYear) {
      toDate = toDate.month(toMonth).year(toYear);
    }
    const tenureYears = toDate.diff(fromDate, 'years');
    let tenureMonths = Math.abs(fromDate.month() - toDate.month());
    tenureMonths = fromDate.month() > toDate.month() ? (12 - tenureMonths) : tenureMonths;

    const yearText = `${tenureYears > 0 ? tenureYears + ' Years' : ''}`
    const monthText = `${tenureMonths > 0 ? (yearText.length ? ', ' : '') + tenureMonths + ' Months' : ''}`

    return `${yearText.length ? yearText + monthText : monthText}`
  }
}
