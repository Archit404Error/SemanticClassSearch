import './App.css';
import CourseQueries from './courseQueries';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cornell <span className="Highlight">Semantic Search</span></h1>
        <div>
          <h2>I want to find a class about...</h2>
          <CourseQueries />
        </div>
        <p>Site built by <a target="_blank" href="https://architmehta.me" rel="noreferrer">Archit Mehta</a></p>
      </header>
    </div >
  )
}

export default App;
