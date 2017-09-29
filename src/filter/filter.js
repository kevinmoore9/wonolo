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
    this.props.updateFilters({
      locationFilter: e.target.attributes[0].value,
    });
  }

  handleType(e) {
    e.preventDefault();
    this.props.updateFilters({
      typeFilter: e.target.attributes[0].value
    });
  }
  renderStateFilter() {
    let states = ["CA", "NJ", "NY"]
    return(
      <div>
        <h3>Where do you live?</h3>
        <div className='state-filter'>
        {
          states.map(state => (
            <div name={state} className={`state-container ${state}`} key={state} onClick={(e) => this.handleLocation(e)}>
              <img name={state} className='state' src={require(`../images/${state}.png`)} />
              <div className="state-name">{state}</div>
            </div>
          ))
        }
        </div>
      </div>
    )
  }

  renderTypeFilter() {
    let types = ["Fulfillment / Warehousing", "General Labor", "Administrative", "Customer Service", "Event Staff", "Delivery"];
    let images = {
      "Fulfillment / Warehousing": "full",
      "General Labor": "general",
      "Administrative": "admin",
      "Customer Service": "customer",
      "Event Staff": "event",
      "Delivery": "delivery"
    }
    return(
      <div>
        <h3>What type of work are you looking for?</h3>
      <div className='state-filter'>
        {
          types.map(type => (
            <div name={type} className={`type-container ${type}`} key={type} onClick={(e) => this.handleType(e)}>
              <img name={type} className='type' src={require(`../images/${images[type]}.png`)} />
              <div className='type-name'>{type}</div>
            </div>
          ))
        }

      </div>
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
      renderFilter = <h3 className="results">There are {this.props.jobs} job(s) that match your search!</h3>
    }
    return (
      renderFilter
    )
  }
}


export default Filter;
