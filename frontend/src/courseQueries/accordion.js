import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccTab = ({ title, content }) => {
    return (
        <Accordion style={{ padding: 10, backgroundColor: "#3E4451" }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {content}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

const ActionAccordion = () => {
    return (
        <div style={{ alignSelf: 'flex-start', margin: 30, position: 'sticky', position: '-webkit-sticky', top: 30 }}>
            <AccTab title="Similar Courses" content="Coming Soon" />
            <AccTab title="Restrict Department" content="Coming Soon" />
            <AccTab title="Restrict Course Level" content="Coming Soon" />
        </div>
    )
}

export default ActionAccordion;