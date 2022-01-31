import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChangeFunc = this.onInputChangeFunc.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  // Referência: https://pt-br.reactjs.org/docs/forms.html
  onInputChangeFunc(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value });
  }

  onSaveButtonClick() {
    return 'oii';
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        {/* Participação especial de Laecio Silva - Turma XP - Tribo B: Dica do spread operator */}
        <Form
          onInputChange={ this.onInputChangeFunc }
          onSaveButtonClick={ this.onSaveButtonClick }
          { ...this.state }
        />
        <Card onInputChange={ this.onInputChangeFunc } { ...this.state } />
      </div>
    );
  }
}

export default App;
