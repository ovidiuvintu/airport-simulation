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
const RepetitiveSubstep = ({ data, onDataChange, index }) => {

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
            />
    </Box>
  );
};

const Airports = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepData, setStepData] = useState({
    step1Field: '',
    repetitiveSubsteps: [''], // Initial repetitive substep
    step3Field: '',
  });

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [name, iatacode] = useState(''); // State for the input field

  const steps = ['Airport Details', 'Runways', 'Terminals'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleRepetitiveSubstepChange = (index, value) => {
    const newSubsteps = [...stepData.repetitiveSubsteps];
    newSubsteps[index] = value;
    setStepData({ ...stepData, repetitiveSubsteps: newSubsteps });
  };

  const addRepetitiveSubstep = () => {
    setStepData({
      ...stepData,
      repetitiveSubsteps: [...stepData.repetitiveSubsteps, ''],
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
            {stepData.repetitiveSubsteps.map((data, index) => (
              <RepetitiveSubstep
                key={index}
                index={index}
                data={data}
                onDataChange={handleRepetitiveSubstepChange}
              />
            ))}
            <Button color='inherit' onClick={addRepetitiveSubstep}>Add another runway</Button>
          </Box>
        );
      case 2:
        return (
          <Box>
            <p>Terminals</p>
            <input
              type="text"
              value={stepData.step3Field}
              onChange={(e) => setStepData({ ...stepData, step3Field: e.target.value })}
            />
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