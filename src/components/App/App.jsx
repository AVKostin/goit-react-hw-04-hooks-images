import { Component } from 'react';
import Searchbar from '../Searchbar';
import SearchInfo from '../SearchInfo/SearchInfo';
import ScrollOnTop from '../ScrollToTop';
class App extends Component {
  state = {
    query: '',
  };
  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <header>
          <Searchbar onSubmit={this.handleFormSubmit} />
        </header>
        <main>
          <SearchInfo query={query} />
          <ScrollOnTop />
        </main>
      </>
    );
  }
}
export default App;
