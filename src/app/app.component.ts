import { Component } from '@angular/core';
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"

dayjs.extend(duration)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume';
  year = new Date().getUTCFullYear();

  tenure(month: number, year: number, startMonth?: number, startYear?: number) {
    const tenureYears = dayjs().diff(dayjs().month(month).year(year).toDate(), 'years');
    const tenureMonths = dayjs().diff(dayjs().subtract(1, 'year').month(month), 'months');

    const yearText = `${tenureYears > 0 ? tenureYears + ' Years' : ''}`
    const monthText = `${tenureMonths > 0 ? tenureMonths + ' Months' : ''}`

    return `${yearText.length ? yearText + ', ' + monthText : monthText}`
  }
}
