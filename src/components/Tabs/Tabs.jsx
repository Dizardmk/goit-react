import React, { Component } from 'react';

export default class Tabs extends Component {
  state = {
    activeTabIndex: 0,
  };

  setActiveTabIndex = indexTab => {
    this.setState({ activeTabIndex: indexTab });
  };

  render() {
    const { activeTabIndex } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIndex];

    return (
      <>
        <div>
          {items.map((item, index) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIndex(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
