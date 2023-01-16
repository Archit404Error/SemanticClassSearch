import React, { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";

const JobQuery = () => {
    const [query, setQuery] = useState("")
    const [searched, setSearched] = useState(false)

    return (
        <div style={{ backgroundColor: '#3E4451', padding: 20, textAlign: 'left', borderRadius: 10 }}>
            <p style={{ margin: 0, marginBottom: 20 }}>Job Description</p>
            <TextField
                multiline
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                rows={5}
                label="Paste Job Description"
                placeholder="Paste Job Description to find similar classes"
                sx={{ width: "100%", marginBottom: '20px' }}
            />
            <Button variant="text" onClick={() => setQuery('')}>Clear</Button>
            <Button variant="outlined" sx={{ position: 'absolute', right: 20 }} onClick={() => setSearched(true)}>Search</Button>
            {searched &&
                <Alert severity="info" sx={{ marginTop: '20px' }}>This features is coming soon!</Alert>
            }
        </div>
    )
}

export default JobQuery;