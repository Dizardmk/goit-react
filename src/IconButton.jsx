import React, { Component } from 'react';
import IconButton from './components/IconButton';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CloseIcon } from './icons/cross.svg';

export default class App extends Component {
  render() {
    return (
      <>
        <IconButton aria-label="Добавить">
          <PlusIcon width="100" height="100" fill="green" />
        </IconButton>
        <IconButton aria-label="Закрыть">
          <CloseIcon width="50" height="50" fill="red" />
        </IconButton>
        <br />
        <IconButton aria-label="Закрыть">
          <CloseIcon />
        </IconButton>
        <IconButton>
          <PlusIcon width="32" height="32" fill="royalblue" />
        </IconButton>
        <IconButton>
          <PlusIcon width="10" height="10" />
        </IconButton>
      </>
    );
  }
}
