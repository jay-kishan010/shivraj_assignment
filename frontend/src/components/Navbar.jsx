

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Button,  Stack, Tab, Tabs } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
        
        
            <AppBar sx={{background:"#fff"}}>
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                       
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROW1X5qGV11RoCeHxtDGXEUQDhC8Bk7iZuwg&s" alt="" />
                       
                    </Typography>
                    <Tabs variant='h4' sx={{flexGrow:1}}>
                        <Tab label="Home" component={Link} to="/" />
                        <Tab label="About Us" />

                        <Tab label="Projects" />
                        <Tab label="Members" />
                        <Tab label="Newspaper" />
                        <Tab label="Gallery" component={Link} to="/gallery" />
                        <Tab label="Contact" />
                        <Stack direction='row' display='block' spacing={2}>

                        <Button sx={{borderRadius:"20px",backgroundColor:"#3f51b5"}} size='large' variant="contained">JOIN US</Button>
                        <Button  sx={{borderRadius:"20px",backgroundColor:"#f73378"}} size='large' variant="contained">SUPPORT US</Button>
                        </Stack>


                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
