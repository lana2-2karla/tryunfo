import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
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
    // segundo parâmetro só vai acontecer quando o estado estiver att;
    this.setState(() => ({
      [name]: value }), () => this.getCondition());
  }

  onSaveButtonClick() {
    return 'oii';
  }

  getCondition() {
    const NUM_MAX = 90;
    const SUM_NUM_MAX = 210;
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const arrString = [cardName, cardDescription, cardImage];
    // some: se pelo menos um elemento for "" retorna true;
    const boolString = arrString.some((state) => state === '');
    const boolNumber1 = +cardAttr1 >= 0 && +cardAttr1 <= NUM_MAX;
    const boolNumber2 = +cardAttr2 >= 0 && +cardAttr2 <= NUM_MAX;
    const boolNumber3 = +cardAttr3 >= 0 && +cardAttr3 <= NUM_MAX;
    // super dica do Bruno Alves: o + na frente da variável transforma em number
    const boolSum = (+cardAttr1 + +cardAttr2 + +cardAttr3) <= SUM_NUM_MAX;
    // só retorna true se todos forem true, caso contrário retorna false
    const result = !boolString && boolNumber1 && boolNumber2 && boolNumber3 && boolSum;
    this.setState({
      // caso seja disabled, está desabilitado;
      isSaveButtonDisabled: !result,
    });
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
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
