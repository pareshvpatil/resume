import {Component, OnInit} from '@angular/core';
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"

dayjs.extend(duration)

@Component({
  selector: 'app-root',
  templateUrl: './app2.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'resume';
  careerStartYear = 2016;
  careerStartMonth = 6;
  year = new Date().getUTCFullYear();

  experienceInYears = 0;

  ngOnInit() {
    const totalExperience = this.year - this.careerStartYear;
    this.experienceInYears = (new Date().getMonth() + 1 - this.careerStartMonth > 0) ? totalExperience : totalExperience - 1;
  }

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
