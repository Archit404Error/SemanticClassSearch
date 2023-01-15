import { Accordion, AccordionSummary, AccordionDetails, Typography, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const AccTab = ({ title, children }) => {
    return (
        <Accordion style={{ padding: 10, backgroundColor: "#3E4451", alignContent: "flex-start", alignItems: "flex-start", textAlign: "left" }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}

const ActionAccordion = ({ submitFunc, query }) => {
    const [resultCount, setResultCount] = useState(20)

    return (
        <div style={{ alignSelf: 'flex-start', margin: 30, position: 'sticky', position: '-webkit-sticky', top: 30 }}>
            <AccTab title="Results Shown">
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Results</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={resultCount}
                        label="Results"
                        onChange={(ev) => { setResultCount(ev.target.value); submitFunc(query, ev.target.value) }}
                    >
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </FormControl>
            </AccTab>
            <AccTab title="Restrict Department">
                <Typography>Coming Soon</Typography>
            </AccTab>
            <AccTab title="Restrict Course Level" content="Coming Soon">
                <Typography>Coming Soon</Typography>
            </AccTab>
        </div>
    )
}

export default ActionAccordion;