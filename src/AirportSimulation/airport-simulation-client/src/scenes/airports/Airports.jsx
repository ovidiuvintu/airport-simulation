import React, { useState } from 'react';
import { 
  useTheme,
  Stepper, 
  Step, 
  StepLabel, 
  Button, 
  Box, 
  TextField } from '@mui/material';
  
import { tokens } from "../../theme";

import Header from "../../components/Header";

// Subcomponent for the repetitive part
const RunwaySubstep = ({ data, onDataChange, index }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Manage internal state for this instance of the substep
  const handleChange = (event) => {
    onDataChange(index, event.target.value);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <p>Runway {index + 1}</p>
      {/* <input type="text" value={data} onChange={handleChange} /> */}
      <TextField  style={{width:"200px"}}
                  InputLabelProps={{
                  sx: {
                        '&.Mui-focused': {
                            color: colors.greenAccent[100], // Sets the label color to green when focused
                        },
                    },
                  }}
                  required
                  variant='filled'
                  width="200"
                  id="outlined-required"
                  label="Runway Name"
                  defaultValue=""
                  name='runwayName'
                  onChange={handleChange}
            />
    </Box>
  );
};


// Subcomponent for the repetitive part
const TerminalSubstep = ({ data, onDataChange, index }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Manage internal state for this instance of the substep
  const handleChange = (event) => {
    onDataChange(index, event.target.value);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <p>Terminal {index + 1}</p>
      {/* <input type="text" value={data} onChange={handleChange} /> */}
      <TextField  style={{width:"200px"}}
                  InputLabelProps={{
                  sx: {
                        '&.Mui-focused': {
                            color: colors.greenAccent[100], // Sets the label color to green when focused
                        },
                    },
                  }}
                  required
                  variant='filled'
                  width="200"
                  id="outlined-required"
                  label="Terminal Name"
                  defaultValue=""
                  onChange={handleChange}
                  name='terminalName'
            />
    </Box>
  );
};

const Airports = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepData, setStepData] = useState({
    step1Field: '',
    runwaySubsteps: [''], // Initial repetitive substep
    terminalSubsteps: [''], // Initial repetitive substep
  });

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const steps = ['Airport Details', 'Runways', 'Terminals'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleRunwayChange = (index, value) => {
    const newSubsteps = [...stepData.runwaySubsteps];
    newSubsteps[index] = value;
    setStepData({ ...stepData, runwaySubsteps: newSubsteps });
  };

  const addRunway = () => {
    setStepData({
      ...stepData,
      runwaySubsteps: [...stepData.runwaySubsteps, ''],
    });
  };

  const handleTerminalChange = (index, value) => {
    const newSubsteps = [...stepData.terminalSubsteps];
    newSubsteps[index] = value;
    setStepData({ ...stepData, terminalSubsteps: newSubsteps });
  };

  const addTerminal = () => {
    setStepData({
      ...stepData,
      terminalSubsteps: [...stepData.terminalSubsteps, ''],
    });
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
         <Box>
            <p>Airport Details</p>
            <TextField  style={{width:"200px"}}
                        InputLabelProps={{
                          sx: {
                            '&.Mui-focused': {
                              color: colors.greenAccent[100], // Sets the label color to green when focused
                            },
                          },
                        }}
                        required
                        variant='filled'
                        width="200"
                        id="outlined-required"
                        label="Airport Name"
                        defaultValue=""
                        name='airportName'
            />
            <TextField  style={{width:"200px",marginLeft:"15px"}}
                        InputLabelProps={{
                          sx: {
                            '&.Mui-focused': {
                              color: colors.greenAccent[100], // Sets the label color to green when focused
                            },
                          },
                        }}
                        required
                        variant='filled'
                        width="200"
                        id="outlined-required"
                        label="Airport IATA Code"
                        defaultValue=""
                        name='airportIataCode'
            />
          </Box>
        );
      case 1:
        return (
          <Box>
            <p>Runways</p>
            {stepData.runwaySubsteps.map((data, index) => (
              <RunwaySubstep
                key={index}
                index={index}
                data={data}
                onDataChange={handleRunwayChange}
              />
            ))}
            <Button color='inherit' onClick={addRunway}>Add another runway</Button>
          </Box>
        );
      case 2:
        return (
          <Box>
            <p>Terminals</p>
             {stepData.terminalSubsteps.map((data, index) => (
              <TerminalSubstep
                key={index}
                index={index}
                data={data}
                onDataChange={handleTerminalChange}
              />
            ))}
            <Button color='inherit' onClick={addTerminal}>Add another terminal</Button>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box m="20px">
      <Header title="AIRPORTS" subtitle="Airport Designer" />
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2 }}>
        {getStepContent(activeStep)}
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button color="inherit" onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Airports;