import './App.css';
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cornell <span className="Highlight">Semantic Search</span></h1>
        <div>
          <h2>I want to find a class about...</h2>
          <TextField
            label="Generative AI, Philosophy, American History, etc."
            sx={{
              m: 1,
              width: '40vw',
              input: { color: 'white' },
              "& .MuiInputLabel-root": { color: '#61dafb', fontStyle: 'italic', opacity: 0.7 },
              "& .MuiOutlinedInput-root": { "& > fieldset": { border: '2px solid #61dafb' } },
              "& .MuiOutlinedInput-root.Mui-disabled": { "& > fieldset": { border: '2px solid #61dafb' } },
              "& .MuiOutlinedInput-root:hover": { "& > fieldset": { border: '2px solid #61dafb' } },
              "& .MuiOutlinedInput-root:active": { "& > fieldset": { border: '2px solid #61dafb' } },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon style={{ color: "#61dafb", marginRight: 10 }} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
      </header>
    </div >
  )
}

export default App;
