import React, {Component} from 'react';
import {ThemeContext} from './ThemeContext';

class HeaderButton extends Component {
    render() {
      let props = this.props;
      let theme = this.context;
      return (
        <button
          {...props}
          style={{backgroundColor: theme.background, color: 'white'}}
        />
      );
    }
  }
  HeaderButton.contextType = ThemeContext;
  
  export default HeaderButton;

