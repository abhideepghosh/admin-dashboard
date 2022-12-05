import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            What is this project about?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This project is an attempt to create an Industry Level Admin
            Dashboard. It uses features like Data Grids, Charts and Calendar
            with complete functionality to achieve the desired outcome.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            Team Behind this project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Project Was Built By Abhideep Ghosh And Swati Sharma.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            What are the Tech Stack used in this project ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The languages used are HTML, CSS and JavaScript. The backbone of
            this project is built on React.js Library.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            Which Modules are used in the project ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Modules Used: Material UI, mui Icons, mui Data Grid,
            react-router-dom, react-pro-sidebar, formik, yup, fullcalendar,
            fullcalendar timegrid, fullcalendar list, nivo graphs
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            What Funtionality Does this project holds?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fully functional calendar with event management, datagrids with
            filters and sorting functionality, dashboard, bar graph, line graph,
            pie chart and world geography chart.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
