class DatePicker {
    #elem;
    constructor(elem) {
        this.#elem = elem;
    }

    get elem() {
        return this.#elem;
    }

    checkLeapYear(year) {
        if (year % 400 === 0) return true;
        if (year % 100 === 0) return false;
        if (year % 4 === 0) return true;

        return false;
    }

    getFirstDayofWeek(year, month) {
        return new Date(`${year}-${String(month).padStart(2, 0)}-01`).getDay();
    }

    paint() {}
}

const elem = document.querySelector('#root');
const datepicker = new DatePicker(elem);
