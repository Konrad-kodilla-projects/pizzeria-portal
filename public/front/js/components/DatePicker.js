import { BaseWidget } from './BaseWidget.js';
import { utils } from '../utils.js';
import { select, settings } from '../settings.js';

export class DatePicker extends BaseWidget {
  constructor(wrapper, updatedDate=0){
    super(wrapper, utils.dateToStr(new Date()));

    const {input} = select.widgets.datePicker;
    this.dom.input = this.dom.wrapper.querySelector(input);
    updatedDate ? this.updatedDate = new Date(updatedDate) : null;

    this.initPlugin();
  }

  initPlugin(){
    this.maxDays = settings.datePicker.maxDaysInFuture;
    this.minDate = new Date(this.value);
    this.maxDate = utils.addDays(this.minDate, this.maxDays);

    // init plugin
    // eslint-disable-next-line no-undef
    flatpickr(this.dom.input, {
      maxDate: this.maxDate,
      minDate: this.minDate,
      defaultDate: this.updatedDate || this.minDate,
      disable: [
        function(date){
          return date.getDay() === 1;
        }
      ],
      locale: {
        'firstDayOfWeek': 1
      },
      onChange: (_, dateStr) => {
        this.value = dateStr;
      },
      dateFormat: 'Y-m-d'
    });
  }

  parseValue(val){
    return val;
  }

  isValid(){
    return true;
  }

  renderValue(){}
}