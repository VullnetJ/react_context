import React, { Component } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import HeaderButton from './HeaderButton';

function ClickButton(props) {
  return (
    <HeaderButton onClick={props.changeTheme}>
      Press me
    </HeaderButton>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.dark,  // this we use as a default color
    };
    this.ChangingBetweenThemes = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ClickButton changeTheme={this.ChangingBetweenThemes} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
