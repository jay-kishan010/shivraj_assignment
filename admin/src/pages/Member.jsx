
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const Member = () => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
    
     
      const FormContainer = styled('form')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2), 
        marginTop: theme.spacing(4),
      }));
    
  
      const ButtonContainer = styled('div')(({ theme }) => ({
        display: 'flex',
        gap: theme.spacing(2), 
        marginTop: theme.spacing(2),
      }));

  return (
    <Container maxWidth="sm" sx={{mt:"10%"}}>
      <Typography
        variant="h4"
        color="primary"
        sx={{ textAlign: 'center', marginBottom: 4 }}
      >
        Add a New Member
      </Typography>

      <FormContainer noValidate autoComplete="off">
        <TextField
          label="Name"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />
        <TextField
          label="Designation"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ alignSelf: 'flex-start' }} >
          Upload Photo
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
          />
        </Button>
        <ButtonContainer>
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
          <Button variant="outlined" color="secondary" fullWidth>
            Cancel
          </Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  )
}

export default Member
