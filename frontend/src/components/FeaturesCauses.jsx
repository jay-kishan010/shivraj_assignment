import React from 'react'
import Typography from '@mui/material/Typography'
import { Card, CardContent, CardMedia, Paper } from '@mui/material'

const FeaturesCauses = () => {
  return (
    <div>
      <Typography variant="h3" color="initial" sx={{margin:"50px"}}>
        <strong>Features Causes</strong>
      </Typography>
    <Paper sx={{display:'flex', alignItems:"center", justifyContent:"center", gap:"3px"
    }}>
    <Card sx={{margin:"10px"}}>
<CardMedia    component="img"
          height="140" image='https://shivrajfoundation.org.in/wp-content/uploads/2024/08/F3.png'/>
<CardContent>
    <Typography variant="h5" color="initial">Healthy Food</Typography>
</CardContent>
      </Card>
      <Card>
<CardMedia    component="img"
          height="140" image='https://shivrajfoundation.org.in/wp-content/uploads/2024/08/F3.png'/>
<CardContent>
    <Typography variant="h5" color="initial">Healthy Food</Typography>
</CardContent>
      </Card>
      <Card>
<CardMedia    component="img"
          height="140" image='https://shivrajfoundation.org.in/wp-content/uploads/2024/08/F3.png'/>
<CardContent>
    <Typography variant="h5" color="initial">Healthy Food</Typography>
</CardContent>
      </Card>
    </Paper>
    </div>
  )
}

export default FeaturesCauses
