import { Text, View } from 'react-native'
import React, { Component } from 'react';
import { SearchBar } from '@rneui/themed';


export default class Search extends Component {
    state = {
        search: '',
      };

      updateSearch = (search) => {
        this.setState({ search });
      };

     

  render() {
    const { search } = this.state;
    return (
      <View>
         <SearchBar
         lightTheme
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
      />
      </View>
    )
  }
}