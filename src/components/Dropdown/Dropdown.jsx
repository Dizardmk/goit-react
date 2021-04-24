import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button type="button" onClick={this.toggle}>
          {visible ? 'hide ⇧' : 'show ⇩'}
        </button>
        {visible && <div className="Dropdown__menu">dropdown menu</div>}
      </div>
    );
  }
}

export default Dropdown;
