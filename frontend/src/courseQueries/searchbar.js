import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ submitFunc, query, queryChange }) => {
    return (
        <TextField
            label="Ex: Generative AI, Starting a Business, Adventurous Outdoor PE Sports"
            onKeyDown={event => {
                if (event.key === 'Enter') {
                    const query = event.target.value.replaceAll(' ', '+');
                    submitFunc(query);
                } else {
                    queryChange(event.target.value)
                }
            }}
            sx={{
                m: 1,
                width: '40vw',
                minWidth: '350px',
                input: { color: 'white' },
                "& .MuiInputLabel-root": { color: '#61dafb', fontStyle: 'italic', opacity: 0.7 },
                "& .MuiOutlinedInput-root": { "& > fieldset": { border: '2px solid #61dafb' } },
                "& .MuiOutlinedInput-root.Mui-disabled": { "& > fieldset": { border: '2px solid #61dafb' } },
                "& .MuiOutlinedInput-root:hover": { "& > fieldset": { border: '2px solid #61dafb' } },
                "& .MuiOutlinedInput-root:active": { "& > fieldset": { border: '2px solid #61dafb' } },
                "& .MuiOutlinedInput-root:focus": { "& > fieldset": { border: '2px solid #61dafb' } },
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton onClick={() => submitFunc(query.replaceAll(' ', '+'))}>
                            <SearchIcon style={{ color: "#61dafb" }} />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

export default SearchBar