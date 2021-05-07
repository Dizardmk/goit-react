import React, { Component } from 'react';
import Tabs from '../components/Tabs';
import tabs from '../components/Tabs/groupTabs.json';

export default class TabsPage extends Component {
  render() {
    return <Tabs items={tabs} />;
  }
}
