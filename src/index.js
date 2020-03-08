import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function card(props) {
  let auxList;
  auxList = props.slice();
  const mapping = auxList.map((list, step) => {
    let color;
    switch (list.rarity) {
      case 'C':
        color = 'green';
        break;
      case 'R':
          color = 'blue';
        break;
      case 'E':
          color = 'purple';
        break;
      case 'L':
          color = 'orange';
        break;
      default:
        break;
    }
    const header = <img alt="Card" src={process.env.PUBLIC_URL + 'img/' + color + '.png'} />;
    return (
      <div className="gridItem">
        <Card header={header}>
          Content
        </Card>
      </div>
    );
  });
  return (
    <div className="gridContainer">
      {mapping}
    </div>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          name: 'green',
          quantity: 1,
          rarity: 'C',
        },
        {
          name: 'blue',
          quantity: 1,
          rarity: 'R',
        },
        {
          name: 'purple',
          quantity: 1,
          rarity: 'E',
        },
        {
          name: 'legendary',
          quantity: 1,
          rarity: 'L',
        },
      ],
      //   green: [{
      //     name: 'green',
      //     quantity: 1,
      //     rarity: 'C',
      //   },{
      //     name: 'green2',
      //     quantity: 1,
      //   },{
      //     name: 'green3',
      //     quantity: 1,
      //   },
      // ],
      //   blue: [{
      //     name: 'blue',
      //     quantity: 1,
      //   },{
      //     name: 'blue1',
      //     quantity: 1,
      //   },],
      //   purple: [{
      //     name: 'purple',
      //     quantity: 1,
      //   }],
      //   orange: [{
      //     name: 'orange',
      //     quantity: 1,
      //   }],
    }
  }

  render() {

    return (
      <div>
        {card(this.state.cardList)}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
