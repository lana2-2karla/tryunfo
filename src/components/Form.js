import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            Nome
            <input
              data-testid="name-input"
              type="text"
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              data-testid="description-input"
              type="textarea"
            />
          </label>
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              data-testid="attr1-input"
              type="number"
            />
          </label>
          <label htmlFor="attr2-input">
            Atributo 2
            <input
              data-testid="attr2-input"
              type="number"
            />
          </label>
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              data-testid="attr3-input"
              type="number"
            />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              data-testid="image-input"
              type="text"
            />
          </label>
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trybe Trunfo
            <input
              data-testid="trunfo-input"
              type="checkbox"
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
