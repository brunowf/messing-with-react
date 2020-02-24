import React from 'react';
import ReactDOM from 'react-dom';
import { Dialog } from 'primereact/dialog';
import { RadioButton } from 'primereact/radiobutton';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './index.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Square(props) {
  let colorList;
  let color = 'square';
  switch (props.color) {
    case 'G':
      color += 'Green';
      colorList = props.cardList.green;
      break;
    case 'B':
      color += 'Blue';
      colorList = props.cardList.blue;
      break;
    case 'P':
      color += 'Purple';
      colorList = props.cardList.purple;
      break;
    case 'O':
      color += 'Orange';
      colorList = props.cardList.orange;
      break;
    default:
      colorList = props.cardList.green;
      break;
  }
  if (colorList !== undefined) {
    const mapping = colorList.map((list, step) => {
      return (
        <button
          key={step}
          className={color}
        >
          {list.quantity}
        </button>
      );
    })
    return (
      <ol>{mapping}</ol>
    );
  } else {
    return null;
  }
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <div>
        <Square
          cardList={this.props.cardList}
          test={1}
          color={i}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare('G')}
        </div>
        <div className="board-row">
          {this.renderSquare('B')}
        </div>
        <div className="board-row">
          {this.renderSquare('P')}
        </div>
        <div className="board-row">
          {this.renderSquare('O')}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      cardList: {
        // blue: [{
        //   name: 'b',
        //   quantity: 2,
        // }],
        // purple: [{
        //   name: 'p',
        //   quantity: 3,
        // }],
        // orange: [{
        //   name: 'o',
        //   quantity: 1,
        // }],
      },
      newCardname: '',
      newCardrarity: 'G',
      newCardquantity: 0,
    }
  }

  render() {

    return (
      <div className="game">
        <div className="game-board">
          <Board
            cardList={this.state.cardList}
          />
        </div>
        <div className="game-info">
          <div>
            <button onClick={() =>
              this.setState({ visible: true })
            }>alou</button>
          </div>
          <Dialog
            header="Card"
            visible={this.state.visible}
            onHide={() => {
              this.setState({ newCardname: '', newCardrarity: 'G', newCardquantity: 0, visible: false });
            }}
            style={{ width: '25vw' }}
            modal={true}
          >
            <div className="status">
              <RadioButton
                inputId="rb1"
                value="G"
                name="Common"
                onChange={(e) => this.setState({ newCardrarity: e.value })}
                checked={this.state.newCardrarity === 'G'}
              />
              <label htmlFor="rb1" className="p-radiobutton-label">Common  </label>
              <RadioButton
                inputId="rb2"
                value="B"
                name="Rare"
                onChange={(e) => this.setState({ newCardrarity: e.value })}
                checked={this.state.newCardrarity === 'R'}
              />
              <label htmlFor="rb2" className="p-radiobutton-label">Rare  </label>
              <RadioButton
                inputId="rb3"
                value="P"
                name="Epic"
                onChange={(e) => this.setState({ newCardrarity: e.value })}
                checked={this.state.newCardrarity === 'P'}
              />
              <label htmlFor="rb3" className="p-radiobutton-label">Epic  </label>
              <RadioButton
                inputId="rb4"
                value="O"
                name="Legendary"
                onChange={(e) => this.setState({ newCardrarity: e.value })}
                checked={this.state.newCardrarity === 'O'}
              />
              <label htmlFor="rb4" className="p-radiobutton-label">Legendary</label>
            </div>
            <div>
              <InputText value={this.state.newCardname} onChange={(e) => this.setState({ newCardname: e.target.value })} />
              <InputText keyfilter="pint" value={this.state.newCardquantity} onChange={(e) => this.setState({ newCardquantity: parseInt(e.target.value) })} />
              <Button
                label="Add"
                icon="pi pi-check"
                onClick={() => {

                  let list = null;
                  const cardListAux = this.state.cardList;
                  switch (this.state.newCardrarity) {
                    case 'G':
                      if (this.state.cardList.green === undefined) {
                        list = [{
                          name: this.state.newCardname,
                          quantity: this.state.newCardquantity,
                        }];
                        cardListAux.green = list;
                      } else {
                        list = this.state.cardList.green.slice();
                        cardListAux.green = list.concat([{
                          name: this.state.newCardname,
                          quantity: this.state.newCardquantity,
                        }]);
                      }
                      break;
                    case 'B':
                      if (this.state.cardList.blue === undefined) {
                        list = [{
                          name: this.state.newCardname,
                          quantity: this.state.newCardquantity,
                        }];
                        cardListAux.blue = list;
                      } else {
                        list = this.state.cardList.blue.slice();
                        cardListAux.blue = list.concat([{
                          name: this.state.newCardname,
                          quantity: this.state.newCardquantity,
                        }]);
                      }
                      break;
                    case 'P':
                      if (this.state.cardList.purple === undefined) {
                        list = [{
                          name: this.state.newCardname,
                          quantity: this.state.newCardquantity,
                        }];
                        cardListAux.purple = list;
                      } else {
                        list = this.purple.cardList.purple.slice();
                        cardListAux.green = list.concat([{
                          name: this.state.newCardname,
                          quantity: this.state.newCardquantity,
                        }]);
                      }
                      break;
                    case 'O':
                      if (this.state.cardList.orange === undefined) {
                        list = [{
                          name: this.state.newCardname,
                          quantity: this.state.newCardquantity,
                        }];
                        cardListAux.orange = list;
                      } else {
                        list = this.state.cardList.orange.slice();
                        cardListAux.orange = list.concat([{
                          name: this.state.newCardname,
                          quantity: this.state.newCardquantity,
                        }]);
                      }
                      break;
                    default:
                      break;
                  }
                  if (list !== null) {

                    this.setState({
                      cardList: cardListAux,
                      visible: false
                    });
                  }
                }}
              />
            </div>
          </Dialog>
          <ol>{}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
