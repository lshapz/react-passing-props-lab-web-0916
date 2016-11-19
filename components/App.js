const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      filters: [],
      selectedFilter: null,
      fruit: []

    }
    this.fetchFilters = this.fetchFilters.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);

  }
  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }


  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruit(){
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit}));
  }


  render(){
    return (
    <div> 
    <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.selectedFilter} updateFilterCallback={this.handleFilterChange} />
    </div>)
  }
}

module.exports = App;
