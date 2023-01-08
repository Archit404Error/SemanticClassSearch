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
      </header>
    </div >
  )
}

export default App;
