import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ submitFunc }) => {
    console.log(submitFunc)
    return (
        <TextField
            label="Generative AI, Philosophy, American History, etc."
            onKeyDown={event => {
                if (event.key === 'Enter') {
                    const query = event.target.value.replaceAll(' ', '+');
                    submitFunc(query);
                }
            }}
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
    )
}

export default SearchBar