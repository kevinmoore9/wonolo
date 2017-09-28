import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      type: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.state.location = e.target.attributes[0].value;
    alert(`You chose ${this.state.location}`)
  }
  renderStateFilter() {
    return(
      <div className='state-filter'>
        <div name="California" onClick={(e) => this.handleClick(e)}>California</div>
        <div name="New York" onClick={(e) => this.handleClick(e)}>New York</div>
        <div name="New Jersey" onClick={(e) => this.handleClick(e)}>New Jersey</div>
      </div>
    )
  }
  render() {

    return (
      this.renderStateFilter()
    )
  }
}


export default Filter;
