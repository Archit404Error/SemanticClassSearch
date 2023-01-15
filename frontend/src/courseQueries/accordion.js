import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    InputLabel,
    TextField,
    Select, MenuItem,
    FormControl,
    Autocomplete
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import courseDeps from '../courseDeps.json';

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

const ActionAccordion = ({ submitFunc, amt, setAmt, dep, setDep, level, setLevel }) => {
    return (
        <div style={{ alignSelf: 'flex-start', margin: 30, position: 'sticky', position: '-webkit-sticky', top: 30 }}>
            <AccTab title="Results Shown">
                <FormControl>
                    <InputLabel>Results</InputLabel>
                    <Select
                        value={amt}
                        label="Results"
                        onChange={(ev) => { setAmt(ev.target.value); submitFunc({ resAmt: ev.target.value }) }}
                    >
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </FormControl>
            </AccTab>
            <AccTab title="Restrict Department">
                <Autocomplete
                    disablePortal
                    value={dep}
                    onChange={(ev, newValue) => {
                        if (newValue !== '') {
                            setDep(newValue)
                            submitFunc({ resDep: newValue })
                        }
                    }}
                    options={courseDeps}
                    renderInput={(params) => <TextField {...params} label="Department" />}
                />
            </AccTab>
            <AccTab title="Restrict Course Level" content="Coming Soon">
                <FormControl>
                    <InputLabel>Level</InputLabel>
                    <Select
                        value={level}
                        label="Level"
                        onChange={(ev) => { setLevel(ev.target.value); submitFunc({ resLevel: ev.target.value }) }}
                    >
                        <MenuItem value={2000}>&lt; 2000</MenuItem>
                        <MenuItem value={3000}>&lt; 3000</MenuItem>
                        <MenuItem value={4000}>&lt; 4000</MenuItem>
                        <MenuItem value={5000}>&lt; 5000</MenuItem>
                        <MenuItem value={6000}>&lt; 6000</MenuItem>
                        <MenuItem value={7000}>&lt; 7000</MenuItem>
                    </Select>
                </FormControl>
            </AccTab>
        </div>
    )
}

export default ActionAccordion;