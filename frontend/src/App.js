import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import CourseQueries from './courseQueries';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <header className="App-header">
          <h1 style={{ marginBottom: 0 }}>Cornell <span>Semantic Search</span></h1>
          <span><p style={{ marginTop: 15 }}><i>a smarter way to discover interesting courses</i></p></span>
          <h2>I want to find a class about...</h2>
          <CourseQueries />
          <p>Site built by <a target="_blank" href="https://architmehta.me" rel="noreferrer">Archit Mehta</a></p>
        </header>
      </ThemeProvider>
    </div>
  )
}

export default App;
