import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//for steps.
// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 800,
//   bgcolor: 'lightblue',
//   border: 'none',
//   boxShadow: 24,
//   p: 18,
// };

export default function Post() {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  //   //for step.
  //   const [activeStep, setActiveStep] = React.useState(0);
  //   const [skipped, setSkipped] = React.useState(new Set());

  //   const isStepOptional = (step) => {
  //     return step === 1;
  //   };

  //   const isStepSkipped = (step) => {
  //     return skipped.has(step);
  //   };

  //   const handleNext = () => {
  //     let newSkipped = skipped;
  //     if (isStepSkipped(activeStep)) {
  //       newSkipped = new Set(newSkipped.values());
  //       newSkipped.delete(activeStep);
  //     }

  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped(newSkipped);
  //   };

  //   const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   };

  //   const handleSkip = () => {
  //     if (!isStepOptional(activeStep)) {
  //       // You probably want to guard against something like this,
  //       // it should never occur unless someone's actively trying to break something.
  //       throw new Error("You can't skip a step that isn't optional.");
  //     }

  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped((prevSkipped) => {
  //       const newSkipped = new Set(prevSkipped.values());
  //       newSkipped.add(activeStep);
  //       return newSkipped;
  //     });
  //   };

  //   const handleReset = () => {
  //     setActiveStep(0);
  //   };


  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 100;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 10, 180, 80);


  return (
    <>
      <div>
        <canvas>Hey</canvas>
      </div>

    </>
    // <div>
    //   <Button onClick={handleOpen}>Open modal</Button>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={style}>
    //       <Stepper activeStep={activeStep}>
    //         {steps.map((label, index) => {
    //           const stepProps = {};
    //           const labelProps = {};
    //           if (isStepOptional(index)) {
    //             labelProps.optional = (
    //               <Typography variant="caption">Optional</Typography>
    //             );
    //           }
    //           if (isStepSkipped(index)) {
    //             stepProps.completed = false;
    //           }
    //           return (
    //             <Step key={label} {...stepProps}>
    //               <StepLabel {...labelProps}>{label}</StepLabel>
    //             </Step>
    //           );
    //         })}
    //       </Stepper>
    //       {activeStep === steps.length ? (
    //         <React.Fragment>
    //           <Typography sx={{ mt: 2, mb: 1 }}>
    //             All steps completed - you&apos;re finished
    //           </Typography>
    //           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
    //             <Box sx={{ flex: '1 1 auto' }} />
    //             <Button onClick={handleReset}>Reset</Button>
    //           </Box>
    //         </React.Fragment>
    //       ) : (
    //         <React.Fragment>
    //           <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
    //           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
    //             <Button
    //               color="inherit"
    //               disabled={activeStep === 0}
    //               onClick={handleBack}
    //               sx={{ mr: 1 }}
    //             >
    //               Back
    //             </Button>
    //             <Box sx={{ flex: '1 1 auto' }} />
    //             {isStepOptional(activeStep) && (
    //               <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
    //                 Skip
    //               </Button>
    //             )}

    //             <Button onClick={handleNext}>
    //               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
    //             </Button>
    //           </Box>
    //         </React.Fragment>
    //       )}
    //     </Box>
    //   </Modal>
    // </div>


  );
}
