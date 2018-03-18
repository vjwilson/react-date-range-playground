import React, { Component } from 'react';
import { DateRange } from 'react-date-range';

import './DateThing.css';

class DateThing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      startDate2: null,
      endDate2: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelect2 = this.handleSelect2.bind(this);
  }

  handleSelect(range){
    console.log(range); // Momentjs object

    this.setState({
      startDate: range.startDate,
      endDate: range.endDate
    });
  }

  handleSelect2(range){
    console.log(range); // Momentjs object

    this.setState({
      startDate2: range.startDate,
      endDate2: range.endDate
    });
  }

  render() {
    const startDate = (this.state.startDate)
      ? this.state.startDate.format('MM/D/YYYY')
      : '';
    const endDate = (this.state.endDate)
      ? this.state.endDate.format('MM/D/YYYY')
      : '';
    const startDate2 = (this.state.startDate2)
      ? this.state.startDate2.format('MM/D/YYYY')
      : '';
    const endDate2 = (this.state.endDate2)
      ? this.state.endDate2.format('MM/D/YYYY')
      : '';

    return (
      <div>
        <div>
          <h2>DateRange with inline styling</h2>
          <DateRange
            onInit={this.handleSelect}
            onChange={this.handleSelect}
          />
          <input className="selectedDateInput" value={startDate} />
          <input className="selectedDateInput" value={endDate} />
        </div>
        <div>
          <h2>DateRange with onlyClasses attribute</h2>
          <DateRange
            onInit={this.handleSelect2}
            onChange={this.handleSelect2}
            onlyClasses
          />
          <input className="selectedDateInput" value={startDate2} />
          <input className="selectedDateInput" value={endDate2} />
        </div>
      </div>
    )
  }
}

export default DateThing;
