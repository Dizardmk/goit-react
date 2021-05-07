import React, { Component } from 'react';
// import Todo from './components/Todo';
// import Dropdown from './components/Dropdown';
import Modal from './components/Modal';

class App extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>This is Modal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis quo adipisci quibusdam iste nostrum nobis temporibus
              eaque natus optio neque!
            </p>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
