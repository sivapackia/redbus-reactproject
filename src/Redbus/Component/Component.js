import React, { useState } from "react";
import  "./Component.scss"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { FaRegUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import Crowsel from "./Crowsel.js"
import { FiCopy } from "react-icons/fi"; 
import { FaCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
 



const Component=()=>{
    const pages = ['Bus Tickets','Cap Rental','Train Tickets'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const[from,setfrom]=useState("")
    const[to,setto]=useState("")
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const State=useSelector(
      ({data})=>data
    )

    let today=new Date ()
    console.log(today)
    let dd=today.getDate()
    console.log(dd)
    let mm=today.getMonth()+1
    console.log(mm)
    let yyyy=today.getFullYear()
    console.log(yyyy)

    const a=useNavigate()
  
    const Search=()=>{
      let x=State.Array.some((value,index)=>{
        return from==value.from && to==value.to
      })
      if(x==true){
        let x=State.Array.find((value,index)=>{
          return from==value.from && to==value.to 
        })
        a(`/Banner?id=${x.busid}&from=${from}&to=${to}`)
      }
      else{
        alert("ENTER FROM CITY NAME TIRUNELVELI AND TO CITY NAME CHENNAI")
      }
     
    }

    const Handle=(event)=>{
        if(event.target.name=="From"){
          setfrom((event.target.value).toUpperCase())
 
        }
        if(event.target.name=="To"){
          setto((event.target.value).toUpperCase())
        }
    }

    return(
        <>
      <Box className="global">
      <AppBar position="static" sx={{backgroundColor:"white",display:{sm:"none",xs:"none",md:"block"}}}> 
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{width:{md:"100%",xs:"100%",sm:"100%"},display:{sm:"none",md:"block"}}}>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          {/* laptop view */}
          <Box sx={{width:{md:"20%"},display:{xs:"none",md:"block"},my:3}}>
          <Typography component="img" src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none',sx:"none", md: 'flex' },width:{md:"10%"},alignItems:"center",justifyContent:"start",my:3}}>
            <Typography sx={{width:"30%",textAlign:"center"}}>
              <Typography component="img" src="https://st.redbus.in/web/images/layout/rb_vertical.svg">
              </Typography>
              <Button sx={{color: 'black', display: 'block',fontFamily:"cursive",fontWeight:"800"}}>
               Bus Tickets
              </Button>
            </Typography>
            <Typography  sx={{width:"30%",textAlign:"center"}}>
              <Typography component="img" src="https://st.redbus.in/web/images/layout/ryde_vertical.svg">
              </Typography>
              <Button sx={{color: 'black', display: 'block',fontFamily:"cursive",fontWeight:"800"}}>
               Cap Rendal
              </Button>
            </Typography>
            <Typography  sx={{width:"30%",textAlign:"center"}}>
              <Typography component="img" src="https://st.redbus.in/web/images/layout/rail_vertical.svg">
              </Typography>
              <Button sx={{color: 'black', display: 'block',fontFamily:"cursive",fontWeight:"800"}}>
               Train Tickets
              </Button>
              </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 ,width:{md:"40%"},my:3,textAlign:"end",display:{md:"block",sm:"none",xs:"none"}}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                 <FaRegUserCircle />
                <Typography component="span" sx={{marginLeft:"5px",fontSize:"14px",fontWeight:"800",fontFamily:"cursive"}}>
                  Account
                </Typography>
                <i style={{fontSize:"12px",fontWeight:"800",verticalAlign:" middle",marginLeft:"5px"}}><FaChevronDown /></i>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        </Box>
        </Toolbar>
      </Container>
    </AppBar>



 {/* mobile view */}
 <Box sx={{}} position="static">
    <AppBar sx={{backgroundColor:"white",display:{sm:"block",xs:"block",md:"none"}}}>
      <Container>
       <Toolbar>
        <Box sx={{width:{xs:"100%",sm:"100%"}}}>
          <Box sx={{ flexGrow: 1,display:"flex",alignItems:"center"}}>
            <Box sx={{display:"flex",alignItems:"center",width:{xs:"50%"}}}>
            <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{color:"red"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
            <Box sx={{}}>
            <Typography component="img" src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" width="100%"/>
            </Box>
            </Box>
            <Box sx={{ flexGrow: 1,width:{xs:"50%",sm:"50%"},my:3,textAlign:"end",display:{md:"none"}}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
                 <FaRegUserCircle />
                <Typography component="span" sx={{marginLeft:"5px",fontSize:"14px",fontWeight:"800",fontFamily:"cursive"}}>
                  Account
                </Typography>
                <i style={{fontSize:"12px",fontWeight:"800",verticalAlign:" middle",marginLeft:"5px"}}><FaChevronDown /></i>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex',md:"none" },width:{sm:"100%",xs:"100%"},alignItems:"center",justifyContent:"space-between",my:3}}>
            <Typography sx={{width:{sm:"30%",xs:"30%"},textAlign:{xs:"center"}}}>
              <Typography component="img" src="https://st.redbus.in/web/images/layout/rb_vertical.svg">
              </Typography>
              <Typography sx={{color: 'black', display:'block',fontFamily:"cursive",fontWeight:"800",fontSize:"10px"}}>
               Bus Tickets
              </Typography>
            </Typography>
            <Typography  sx={{width:{sm:"30%",xs:"30%"},textAlign:{xs:"center"}}}>
              <Typography component="img" src="https://st.redbus.in/web/images/layout/ryde_vertical.svg">
              </Typography>
              <Typography sx={{color: 'black', display: 'block',fontFamily:"cursive",fontWeight:"800",fontSize:"10px"}}>
               Cap Rendal
              </Typography>
            </Typography>
            <Typography  sx={{width:{sm:"30%",xs:"30%"},textAlign:{xs:"center"}}}>
              <Typography component="img" src="https://st.redbus.in/web/images/layout/rail_vertical.svg">
              </Typography>
              <Typography sx={{color: 'black', display: 'block',fontFamily:"cursive",fontWeight:"800",fontSize:"10px"}}>
               Train Tickets
              </Typography>
              </Typography>
             </Box>
          </Box>
       </Toolbar>
      </Container>
    </AppBar>
    </Box>
   
    {/* <second items>*/}
    <Box sx={{position:"relative",cursor:"pointer"}}>
      <Typography id="second_items" sx={{height:"100vh",display:{xs:"none",md:"block",sx:"none"}}}>
          <Box sx={{width:{xs:"100%",md:"100%",sx:"100%"}}}>
            <Box>
            <Typography variant="h4" sx={{fontWeight:"800",color:"white",textAlign:"center",paddingTop:"80px"}}>
                India's No. 1 Online Bus Ticket Booking Site
            </Typography>
          </Box>
          <Box sx={{backgroundColor:"white",width:"70%",position:"absolute",
          top:"160px",right:"140px",borderRadius:"30px"}}>
            <Box sx={{display:"flex"}}>
            <Typography sx={{width:"25%",textAlign:"center",borderRight:"1px solid gray",padding:"50px 0px"}}>
              <i style={{fontSize:"20px",color:"gray",verticalAlign:"middle",marginRight:"10px"}}><FaBus /></i>
              <Typography component="input" type="text" placeholder="From" className="Input" name="From" value={from} onChange={Handle}>
              </Typography>
            </Typography>
            <Typography sx={{width:"25%",textAlign:"center",borderRight:"1px solid gray",padding:"50px 0px"}}>
              <i style={{fontSize:"20px",color:"gray",verticalAlign:"middle",marginRight:"10px"}}><FaBus /></i>
              <Typography component="input" type="text" placeholder="To" className="Input" name="To" value={to} onChange={Handle}>
              </Typography>
            </Typography>
            <Typography sx={{width:"25%",textAlign:"center",borderRight:"1px solid gray",padding:"50px 0px"}}>
              <Typography component="input" type="date" className="Input">
              </Typography>
            </Typography>
            <Typography sx={{width:"25%",textAlign:"center",borderRadius:"0px 30px 30px 0px",padding:"50px 0px",backgroundColor:"rgb(216, 78, 85)"}}  onClick={()=>Search()}>
              <Typography component="h5" sx={{fontWeight:"800",color:"white"}}>
                SEARCH BUSES
              </Typography>
            </Typography>
            </Box>
          </Box>
          </Box>
      </Typography>
    </Box>
    <Box sx={{marginTop:"200px"}}>
    <Box sx={{display:{xs:"block",md:"none",sx:"block"},width:{xs:"90%",sm:"90%",margin:"auto"}}}>
      <Box sx={{backgroundColor:"white",boxShadow:"0px 0px 5px gray",padding:{xs:"20px 15px",sm:"25px 15px"}}}>
      <Typography sx={{width:{xs:"95%",sm:"95%"},textAlign:"center",borderRight:"1px solid gray",padding:"20px 0px",boxShadow:"0px 0px 5px gray",margin:"auto",marginBottom:"15px"}}>
              <i style={{fontSize:"20px",color:"gray",verticalAlign:"middle",marginRight:"10px"}}><FaBus /></i>
              <Typography component="input" type="text" placeholder="From" className="Input" name="From" value={from} onChange={Handle}>
              </Typography>
      </Typography>
      <Typography sx={{width:{xs:"95%",sm:"95%"},textAlign:"center",borderRight:"1px solid gray",padding:"20px 0px",boxShadow:"0px 0px 5px gray",margin:"auto",marginBottom:"15px"}}>
              <i style={{fontSize:"20px",color:"gray",verticalAlign:"middle",marginRight:"10px"}}><FaBus /></i>
              <Typography component="input" type="text" placeholder="To" className="Input" name="To" value={to} onChange={Handle}>
              </Typography>
      </Typography>
      <Typography sx={{width:{xs:"95%",sm:"95%"},textAlign:"center",borderRight:"1px solid gray",padding:"20px 0px",boxShadow:"0px 0px 5px gray",margin:"auto",marginBottom:"15px"}}>
              <Typography component="input" type="date" className="Input">
              </Typography>
            </Typography>
      <Typography sx={{width:{xs:"95%",sm:"95%"},textAlign:"center",borderRadius:"10px",padding:"20px 0px",backgroundColor:"rgb(216, 78, 85)",boxShadow:"0px 0px 5px gray",margin:"auto",marginBottom:"15px"}}  onClick={()=>Search()}>
              <Typography component="h5" sx={{fontWeight:"800",color:"white"}}>
                SEARCH BUSES
              </Typography>
        </Typography>
      </Box>
    </Box>
    </Box>
    {/* Third part */}
    <Box  id="third_items" sx={{display:{xs:"none",md:"block",sx:"none"},position:"relative",marginBottom:"0px"}}>
       <Box sx={{width:{md:"80%",sx:"80%",xs:"100%"},position:"absolute",bottom:"200px",right:"0px"}}>
        <Typography sx={{width:"95%",backgroundColor:"white",height:"300px",boxShadow:"0px 0px 10px gray",borderRadius:"30px"}}>
          <Typography variant="h4" sx={{marginTop:"30px",marginLeft:"30px",display:"inline-block"}}>
              TRENDING OFFERS
          </Typography>
          <Typography style={{width:"100%"}}>
             <Crowsel/>
          </Typography>
        </Typography>
    <Box sx={{display:{xs:"block",md:"none",sx:"block"},width:{xs:"100%",md:"100%",sx:"100%"},margin:{xs:"10px 0px"}}}>
    <Crowsel/> 
    </Box>
    </Box>
    </Box> 
    {/* <Fourth part> */}
    <Box sx={{Width:{md:"100%",sx:"100%",xs:"100%"},marginTop:{xs:"50px",md:"-120px"},marginBottom:{xs:"50px"}}}>
      <Container>
      <Box sx={{width:{md:"100%",sx:"100%",xs:"100%"},display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Typography component="img" src="https://st.redbus.in/Images/99/webreferal.png" sx={{width:{xs:"100%",md:"100%",sm:"100%"}}}>
        </Typography>
      </Box>
      </Container>
    </Box>
    {/* <fivth page> */}
    <Box sx={{Width:{md:"100%"},display:{xs:"none",sm:"none"}}}>
      <Container>
        <Box id="fivth-page">
          <Typography component="h1" sx={{color:"white",fontWeight:800,fontSize:"30px",paddingLeft:"35px",paddingTop:"35px",fontFamily:"inherit"}}>
              ENJOY THE APP!
          </Typography>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-around",marginBottom:"revert",width:{md:"80%"}}}>
            <Box sx={{Width:{md:"30%"},backgroundColor:"white",padding:"40px 60px",borderRadius:"10px",boxShadow:"0px 0px 10px gray",marginLeft:"35px",marginTop:"15px"}}>
              <Typography sx={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"revert"}}>
              <i style={{height:"25px",width:"25px",lineHeight:"30px",borderRadius:"20px",backgroundColor:"green",color:'white',textAlign:"center"}}><FaCheck /></i>
              <Typography component="p" sx={{marginLeft:"10px",color:"black",width:"80%",fontFamily:"fantasy"}}> 
                 Quick access
              </Typography>
              </Typography>
              <Typography sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <i style={{height:"25px",width:"25px",lineHeight:"30px",borderRadius:"20px",backgroundColor:"green",color:'white',textAlign:"center"}}><FaCheck /></i>
              <Typography component="p" sx={{marginLeft:"10px",color:"black",width:"80%",fontFamily:"fantasy"}}> 
                 Superior live tracking
              </Typography>
              </Typography>
              <Box sx={{display:"flex"}}>
              <Box sx={{marginTop:"25px",width:"50%",padding:"10px"}}>
                  <Typography component="h2" sx={{fontWeight:"800",marginTop:"15px",color:"gray"}}>
                      4.5
                      <i style={{marginLeft:"10px"}}><FaStar /></i>
                  </Typography>
                  <Typography component="p">
                      50M+ downloads
                  </Typography>
                  <Typography component="h4" sx={{fontWeight:"800"}}>
                      Play Store
                  </Typography>
              </Box>
              <Box sx={{marginTop:"25px",width:"50%",padding:"10px",marginLeft:"20px"}}>
                  <Typography component="h2" sx={{fontWeight:"800",marginTop:"15px",color:"gray"}}>
                      4.6
                      <i style={{marginLeft:"10px"}}><FaStar /></i>
                  </Typography>
                  <Typography component="p">
                      50M+ downloads
                  </Typography>
                  <Typography component="h4" sx={{fontWeight:"800"}}>
                      App Store
                  </Typography>
              </Box>
              </Box>
            </Box>
            <Box sx={{width:{md:"20%"}}}>
              <Box>
                <Typography component="h2" sx={{fontWeight:"800",color:"white",marginBottom:"15px"}}>
                  Scan to download
                </Typography>
                <Typography component="img" src="https://s1.rdbuz.com/web/images/homeV2/qrCode.svg">
                </Typography>
              </Box>
            </Box>
            <Box sx={{width:{md:"20%"}}}>
            <Box>
                <Typography component="h2" sx={{fontWeight:"800",color:"white",marginBottom:"15px",marginTop:"28px"}}>
                   Download the App on
                </Typography>
                <Typography component="img" src="https://s2.rdbuz.com/web/images/homeV2/appinstall/playStore.svg">
                </Typography>
                <Typography component="img" src="https://s3.rdbuz.com/web/images/homeV2/appinstall/appStore.svg" sx={{marginTop:"15px"}}>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
    {/* <sixth page} */}
    <Box sx={{Width:{md:"100%"}}}>
      <Container>
        <Box sx={{width:{md:"100%"}}}>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Typography component="img" src="https://s1.rdbuz.com/web/images/homeV2/primoSection/primoTopBanner.svg"  style={{width:"50%"}}>
          </Typography>
          </Box>
          <Box>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:{md:"space-between",sm:"center"},marginTop:"35px",flexWrap:"wrap"}}>
            <Box sx={{width:{md:"33.33%",sm:"100%",xs:"100%"}}}>
                <div style={{width:"90%"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#3c1053",borderRadius:"20px",padding:"20px 20px",margin:"15px"}}>
                <div style={{width:"35%",marginRight:"5px"}}>
                    <img src="https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg1.svg" width="100%" height="100%" style={{}}/>
                </div>
                <div style={{width:"65%",marginLeft:"5px"}}>
                  <h3 style={{color:"white",display:"inline-block",fontWeight:"700",margin:"0px"}}>1 of 5 buses qualify</h3>
                  <p style={{color:"white",fontWeight:"700",fontSize:"14px"}}>Primo’s strict safety <br/>qualification ensures a safer travel for you</p>
                </div>
                </div>
              </div>
            </Box>
            <Box sx={{width:{md:"33.33%",sm:"100%",xs:"100%"}}}>
                <div style={{width:"90%"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#3c1053",borderRadius:"20px",padding:"20px 20px",margin:"15px"}}>
                <div style={{width:"35%",marginRight:"5px"}}>
                    <img src="https://s3.rdbuz.com/web/images/homeV2/primoSection/primoSubImg2.svg" width="100%" height="100%" style={{}}/>
                </div>
                <div style={{width:"65%",marginLeft:"5px"}}>
                  <h3 style={{color:"white",display:"inline-block",fontWeight:"700",margin:"0px"}}>Preferred by 90%</h3>
                  <p style={{color:"white",fontWeight:"700",fontSize:"14px"}}>90% of travellers re-book Primo buses for its punctuality and comfort</p>
                </div>
                </div>
              </div>
            </Box>
            <Box sx={{width:{md:"33.33%",sm:"100%",xs:"100%"}}}>
                <div style={{width:"90%"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#3c1053",borderRadius:"20px",padding:"20px 20px",margin:"15px"}}>
                <div style={{width:"35%",marginRight:"5px"}}>
                    <img src="https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg3.svg" width="100%" height="100%" style={{}}/>
                </div>
                <div style={{width:"65%",marginLeft:"5px"}}>
                  <h3 style={{color:"white",display:"inline-block",fontWeight:"700",margin:"0px"}}>monthly travellers</h3>
                  <p style={{color:"white",fontWeight:"700",fontSize:"14px"}}>Primo’s strict safety qualification ensures a safer travel for you</p>
                </div>
                </div>
              </div>
            </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
    {/* <Footer> */}
    <Box sx={{width:{md:"100%",backgroundColor:"#4a4a4a3d",height:"0px",marginTop:"30px"}}}>
      <Container>
        <Box sx={{display:"flex",justifyContent:"space-between",padding:"10px 15px",paddingTop:"30px",flexWrap:"wrap"}}>
          <Box  sx={{width:{md:"20%",sm:"100%",xs:"100%"},marginRight:"10px"}}>
            <Typography component="img" src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg">
            </Typography>
            <Typography component="p" sx={{color:"black",fontSize:"1rem",marginTop:"15px",cursor: "pointer"}}>
            redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally.
            redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.
            </Typography>
            <Typography sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"25px",paddingRight:"20px"}}>
              <i style={{fontSize:"20px"}}><FaFacebookF /></i>
              <i  style={{fontSize:"20px"}}><FaLinkedinIn /></i>
              <i  style={{fontSize:"20px"}}><FaTwitter /></i>
              <i  style={{fontSize:"20px"}}><FaInstagramSquare /></i>
            </Typography>
          </Box>
          <Box sx={{width:{md:"20%",sm:"50%"},marginTop:{sm:"10px",xs:"15px"}}}>
            <Typography variant="h6" fontWeight="800" sx={{fontFamily:"revert"}}>
                About redBus
            </Typography>
            <Typography sx={{cursor: "pointer"}}>
              <p>About Us</p>
              <p>Investor Realtions</p>
              <p>Contact Us</p>
              <p>Mobile Version</p>
              <p>redBus On Mobile</p>
              <p>Offers</p>

            </Typography>
          </Box>
          <Box sx={{width:{md:"19%",sm:"50%"},marginTop:{sm:"10px",xs:"15px"}}}>
            <Typography variant="h6" fontWeight="800" sx={{fontFamily:"revert"}}>
                Info
            </Typography>
            <Typography sx={{cursor: "pointer"}}>
              <p>T&C</p>
              <p>Privacy Policy</p>
              <p>FAQ</p>
              <p>Blog</p>
              <p>redBus On Mobile</p>
              <p>User Agreement</p>
            </Typography>
          </Box>
          <Box sx={{width:{md:"20%",sm:"50%"}}}>
            <Typography variant="h6" fontWeight="800" sx={{fontFamily:"revert"}}>
                Global Sites
            </Typography>
            <Typography sx={{cursor: "pointer"}}>
              <p>India</p>
              <p>Singapore</p>
              <p>Malaysia</p>
              <p>Peru</p>
              <p>Colombia</p>
              <p>Indonesia</p>
            </Typography>
          </Box>
          <Box sx={{width:{md:"20%",sm:"50%"}}}>
            <Typography variant="h6" fontWeight="800" sx={{fontFamily:"revert"}}>
                Our Partners
            </Typography>
            <Typography sx={{cursor: "pointer"}}>
              <p>Goibibo Bus</p>
              <p>Goibibo  Hotels</p>
              <p>Contact Us</p>
              <p>Makemytrib Bus</p>
              <p>Makemytrip Hotels</p>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
    </Box>
        </>
    )
}
export default Component