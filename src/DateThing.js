import React, { Component } from 'react';
import { DateRange } from 'react-date-range';

class DateThing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(range){
    console.log(range); // Momentjs object

    this.setState({
      startDate: range.startDate,
      endDate: range.endDate
    });
  }

  render() {
    const startDate = (this.state.startDate)
      ? this.state.startDate._d
      : '';
    const endDate = (this.state.endDate)
      ? this.state.endDate._d
      : '';

    return (
      <div>
        <DateRange
          onInit={this.handleSelect}
          onChange={this.handleSelect}
        />
        <input value={startDate} />
        <input value={endDate} />
      </div>
    )
  }
}

export default DateThing;
