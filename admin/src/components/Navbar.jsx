
import { AppBar, Toolbar, Typography, Button, Stack, Tab, Tabs, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const Navbar = () => {
    const [authUser,setAuthUser]=useAuth();
    console.log(authUser)


    const handleLogout=()=>{
        try {
            setAuthUser(
                {
                    ...authUser,
                    user:null
                }
            )
            localStorage.removeItem("token");
            alert("logout successfully")
            window.location.reload();
        } catch (error) {
            alert("Error",error)
        }
    }
    return (
        <div>
            <AppBar sx={{ background: "#fff" }}>
                <Toolbar>
                
                    <Typography variant="h6" color="inherit">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROW1X5qGV11RoCeHxtDGXEUQDhC8Bk7iZuwg&s" 
                            alt="Logo" 
                            style={{ height: '40px', marginRight: '16px' }}
                        />
                    </Typography>

                  
                    <Tabs sx={{ flexGrow: 1 }}>
                        <Tab label="Home" component={Link} to="/" />
                        <Tab label="Dashboard" component={Link} to="/dashboard" />
                        <Tab label="Add Images" component={Link} to="/add-images" />
                        <Tab label="Add Members" component={Link} to="/add-members" />
                        <Tab label="Add Newspaper" component={Link} to="/add-newspaper" />
                        <Tab label="Add Gallery" component={Link} to="/add-gallery" />
                        <Tab label="Contact Info" component={Link} to="/contact-info" />
                    </Tabs>

                
                {
                  !  authUser ? (
                        <Stack direction="row" spacing={2}>
                        <Button
                            sx={{ borderRadius: "20px", backgroundColor: "#3f51b5" }}
                            size="large"
                            variant="contained"
                            component={Link}
                            to="/"
                        >
                            Login
                        </Button>
                        <Button
                            sx={{ borderRadius: "20px", backgroundColor: "#f73378" }}
                            size="large"
                            variant="contained"
                            component={Link}
                            to="/register"
                        >
                            Register
                        </Button>
                    </Stack>
                    ):
                    (
                        <Stack direction="row" spacing={2}>
                        
                        <Button
                            sx={{ borderRadius: "20px", backgroundColor: "#f73378" }}
                            size="large"
                            variant="contained"
                           onClick={handleLogout}
                        >
                            Logout
                        </Button>
                        </Stack>
                    )
                }
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
