import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      type: this.props.type,
    }
    this.handleType = this.handleType.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Object.assign(this.state, {
      location: nextProps.location,
      type: nextProps.type
    }))
  }

  handleLocation(e) {
    e.preventDefault();
    // this.setState({location: e.target.attributes[0].value})
    this.props.updateFilters({
      locationFilter: e.target.attributes[0].value,
      // typeFilter: this.state.type
    });
  }

  handleType(e) {
    e.preventDefault();
    // this.setState({type: e.target.attributes[0].value})
    this.props.updateFilters({
      // locationFilter: this.state.location,
      typeFilter: e.target.attributes[0].value
    });
  }
  renderStateFilter() {
    let states = ["CA", "NJ", "NY"]
    return(
      <div className='state-filter'>
      {
        states.map(state => (
          <div name={state} onClick={(e) => this.handleLocation(e)}>
            <img className='state' src={require(`../images/${state}.png`)} />
            {state}
          </div>
        ))
      }
      </div>
    )
  }

  renderTypeFilter() {
    return(
      <div className='type-filter'>
        <div name="Fulfillment / Warehousing" onClick={(e) => this.handleType(e)}>California</div>
        <div name="General Labor" onClick={(e) => this.handleType(e)}>New York</div>
        <div name="Administrative" onClick={(e) => this.handleType(e)}>New Jersey</div>
        <div name="Customer Service" onClick={(e) => this.handleType(e)}>New Jersey</div>
        <div name="Event Staff" onClick={(e) => this.handleType(e)}>New Jersey</div>
        <div name="Delivery" onClick={(e) => this.handleType(e)}>New Jersey</div>
      </div>
    )
  }
  render() {
    let renderFilter;
    if (!this.state.location) {
      renderFilter = this.renderStateFilter();
    } else if (!this.state.type) {
      renderFilter = this.renderTypeFilter();
    } else {
      renderFilter = null;
    }
    return (
      renderFilter
    )
  }
}


export default Filter;
