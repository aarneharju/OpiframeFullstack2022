import { useState } from 'react';
import './App.css';
import { themes, ThemeContext } from './context/ThemeContext';
import Headline from './context/Headline';
import Paragraph from './context/Paragraph';
import ThemeButton from './context/ThemeButton';

function App() {

  const [state, setState] = useState({
    theme: themes.dark
  });

  const toggleTheme = () => {
    if (state.theme === themes.dark) {
      setState({
        theme: themes.light
      })
    } else {
      setState({
        theme: themes.dark
      })
    }
  }
  return (
    <ThemeContext.Provider value={state.theme}>
      <div className="App">
        <Headline>
          Context
        </Headline>
        <Paragraph>
          Context provides a way to pass data through the component tree without having to pass props down manually at every level.
        </Paragraph>
        <ThemeButton toggleTheme={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
