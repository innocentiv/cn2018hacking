import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  render() {
    return (
      <div>
        <h1>Ciao Aspirante Hacker</h1>
        <p>Cerca la soluzione inserendo il codice</p>
        <form onSubmit={(evt) => {
          evt.preventDefault();
          window.location.href = '/' + this.state.inputValue;
        }}>
        <input type="text" placeholder="Inserisci qui il codice" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
        <button type="submit">Hack Solution</button>
        </form>
      </div>
    );
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }
}

export default IndexPage
