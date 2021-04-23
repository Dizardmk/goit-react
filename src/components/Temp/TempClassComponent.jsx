import React, { Component } from 'react';

class TempClassComponent extends Component {
  ///////////////////// STATIC (статика) ///////////////////
  // static defaultProps = {
  //   initialValue: 0,
  // };
  // static propTypes = {
  //   //
  // };

  ///////////////////// STATE (состояние) ///////////////////
  state = {
    value: 0,
    // если нужно установить value от пропса, то передаем пропс initialValue
    // value: this.props.initialValue,
  };

  ///////////////////// Custom methods (кастомные методы) ///////////////////
  handleIncrement = event => {
    // если нужно добавить значение основываясь на предыдущем значении - функция
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
    // если нужно поставить значение не основываясь на предыдущем значении - обьект
    // this.setState({ value: 1 });
    // console.log(event.target);
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  ///////////////////// RENDER (рендер) ///////////////////
  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <div>
          <button onClick={this.handleIncrement}>increase by 1</button>
          <button onClick={this.handleDecrement}>decrease by 1</button>
        </div>
      </div>
    );
  }
}

export default TempClassComponent;
