import React, { useEffect, useState } from "react";
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
import "./Banner.scss"
import { BsFillTrainFreightFrontFill } from "react-icons/bs";
import { FaBusAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa6";
import { FaRadio } from "react-icons/fa6";
import { FaChargingStation } from "react-icons/fa6";
import { SiEsea } from "react-icons/si";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Available from '../icons/available.jpg'
import Unavailable from '../icons/unavailable.jpg'
import Female from "../icons/femaleseat.jpg"
import { useNavigate, useSearchParams } from "react-router-dom";
import { BookingArray, UpdateArray} from "../Reducer";
import { Yard } from "@mui/icons-material";
import { CgArrowLongRightR } from "react-icons/cg";

const Banner=()=>{
    const pages = ['Bus Tickets','Cap Rental','Train Tickets'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const State=useSelector(
      ({data})=>data
  )
  const dispatch=useDispatch()
  const[param]=useSearchParams()
  let id=param.get("id")
  let from=param.get("from")
  let to=param.get("to")
  const[From,setfrom]=useState(from)
  const[To,setto]=useState(to)
  const nav=useNavigate()
  const[seatno,setseat]=useState([])
  
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

const View=(a,b,busno)=>{
  let x=State.Array.map((val,ind)=>{
    return {...val,bus:val.bus.map((a,b)=>{
      return a.busno===busno ? ({...a,isSeat:(!a.isSeat)}):a
      })}
  })
  dispatch(UpdateArray(x))
}

const Board=(p,n,busno,seatid,busid)=>{   
  let w=busid 
  console.log(w) 

  let x=State.Array.map((val,ind)=>{
    return {...val,bus:val.bus.map((a,b)=>{
      return a.busno===busno && busid===Number(id) ? ({...a,isbook:!a.isbook}):a
      })}
  })
  console.log(x)
  dispatch(UpdateArray(x))

  let z=x.find((value,index)=>{
    return value.bus.find((val,ind)=>{
      return val.busno===busno
    })
  })
  console.log(z)

  let k=z.bus.find((value,index)=>{
    return value.busno===busno && value.isSeat===true
  })
  console.log(k)
  let kk=[k]
 
let m=kk.some((value,index)=>{
  return value.busno===busno && value.isSeat===true
})
console.log(m)

if(m===true){
  let y=x.map((value,index)=>{
    return {...value,bus:value.bus.map((val,ind)=>{
      return {...val,seats:val.seats.map((one,two)=>{
        return one.id===seatid && one.busno===busno && busid===Number(id) && one.isBooked===false ? ({...one,isSelect:!one.isSelect}):one
      })}
    })}
  })
  console.log(y)
  let z=y.filter((val,ind)=>{
    return val.bus.filter((value,index)=>{
     return value.seats.filter((a,b)=>{
      return a.isSelect===true &&a.id===seatid && a.busno===busno 
     })
    })
  })
  console.log(z)
  let m=z.find((val,ind)=>{
    return val.bus.find((value,index)=>{
      return value.seats.find((a,b)=>{
        return a.isSelect===true && a.busno===busno 
      })
    })
  })
  console.log(m)
  let k=m.bus.find((value,index)=>{
    return value.seats.find((val,index)=>{
      return val.isSelect===true && val.busno===busno 
    })
  })
  console.log(k)

  let g=k.seats.filter((value,index)=>{
    return value.isBooked===false && value.isSelect===true
  })
  console.log(g)
  
  let seatcount=g.find((value,index)=>{
           return value.id
  })
  console.log(seatcount.id)
  let mm=seatcount.id
  dispatch(BookingArray(y))
  nav(`/Booking?busno=${k.busno}&seatid=${seatid}&id=${id}&from=${from}&to=${to}&seatId=${mm}`)
}
}


    return(
      <>
      <Box id="Global_2">
      <AppBar position="static" sx={{backgroundColor:"#d84f57",cursor:"pointer"}}> 
      <Container>
        <Toolbar disableGutters>
          <Box sx={{width:"100%",display:{sm:"none",md:"block"}}}>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>

          {/* laptop view */}
          <Box sx={{width:{md:"50%"},display:{xs:"none",md:"block"},my:3}}>
            <Box sx={{display:"flex",alignItems:"center"}}>
          <Typography component="img" src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"/>
          <Typography component="h1" variant="h5" sx={{color:"white",fontWeight:"800",marginLeft:"30px"}}>Bus Tickets</Typography>
          </Box>
          </Box>
          <Box sx={{ flexGrow: 0 ,width:{md:"30%"},my:3,textAlign:"end",display:{md:"block",sm:"none",xs:"none"}}}>
            <Tooltip title="Open settings">
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <Box>
                <Typography component="span" sx={{marginLeft:"10px",fontSize:"14px",fontWeight:"800",fontFamily:"cursive",color:"white"}}>
                  Help
                </Typography>
                </Box>
                <Box>
                <Typography component="span" sx={{marginLeft:"10px",fontSize:"14px",fontWeight:"800",fontFamily:"cursive",color:"white"}}>
                  Manage Booking
                </Typography>
                <Typography component="i" sx={{fontSize:"14px",fontWeight:"800",marginLeft:"10px",marginTop:"5px",color:"white"}}><FaChevronDown /></Typography>
                </Box>
              <Box>
              <IconButton onClick={handleOpenUserMenu} sx={{ p:0 }}>
              <Typography component="i" sx={{fontSize:"20px",fontWeight:"800",marginLeft:"5px",marginTop:"5px",color:"white"}}><FaRegUserCircle /></Typography>
                <Typography component="span" sx={{marginLeft:"10px",fontSize:"14px",fontWeight:"800",fontFamily:"cursive",color:"white"}}>
                  Account
                </Typography>
                <Typography component="i" sx={{fontSize:"14px",fontWeight:"800",marginLeft:"10px",marginTop:"5px",color:"white"}}><FaChevronDown /></Typography>
              </IconButton>
              </Box>
              </Box>
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

         {/* mobile view */}
         <Box sx={{width:{xs:"100%",md:"100%"},display:{xs:"block",sm:"block",md:"none"}}}>
          <Box sx={{ flexGrow: 1,width:{xs:"50%",sm:"100%"},display:"flex",alignItems:"center",justifyContent:""}}>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginRight:{xs:"150px"}}}>
            <Typography component="img" src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"/>
            </Box>
          <Box sx={{ flexGrow: 0 ,width:{xs:"50%",sm:"100%"},my:3,textAlign:"end",display:{md:"none"}}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                 <i style={{fontSize:"20px",fontWeight:"800",verticalAlign:" middle",marginLeft:"5px",color:"white"}}><FaRegUserCircle /></i>
                <Typography component="span" sx={{marginLeft:"5px",fontSize:"14px",fontWeight:"800",fontFamily:"cursive",color:"white"}}>
                  Account
                </Typography>
                <i style={{fontSize:"12px",fontWeight:"800",verticalAlign:" middle",marginLeft:"5px",color:"white"}}><FaChevronDown /></i>
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
    {/* <first section> */}
    <Box sx={{width:{md:"100%"},display:{md:"block",sm:"block",xs:"block"}}}>
        <Box sx={{width:{md:"100%"},color:"black",padding:"10px 0px",borderBottom:"0.4px solid gray"}}>
            <Typography component="p" sx={{fontWeight:"800",marginLeft:"30px"}}>
               <span style={{color:"blue"}}>{From}</span> <i style={{verticalAlign:"middle",fontSize:"20px",margin:"0px 10px",display:"inline-block",marginTop:"5px"}}><CgArrowLongRightR /></i><span style={{color:"green"}}>{To}</span>
            </Typography>
        </Box>
    </Box>
    {/* <third section> */}
    <Box sx={{width:{md:"98%"},display:{md:"block",sm:"none",xs:"none"},cursor:"pointer"}}>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Box sx={{width:{md:"20%"},display:{md:"block",sm:"none"}}}>
            <Box>
                <Typography component="h3" variant="h6" fontWeight="800" sx={{borderBottom:"0.4px solid gray",padding:"10px 20px"}}>
                     Filter
                </Typography>
            </Box>
            <Box>
                <Typography component="p"  sx={{borderBottom:"0.4px solid gray",padding:"10px 20px",color:"gray"}}>
                <i style={{marginRight:"10px"}}><BsFillTrainFreightFrontFill /></i>
                     Live Tracking
                </Typography>
            </Box>
            <Box>
                <Typography component="p"  sx={{borderBottom:"0.4px solid gray",padding:"10px 20px",color:"gray"}}>
                <i style={{marginRight:"10px"}}><FaBusAlt /></i>
                     Promo Bus
                </Typography>
            </Box>
            <Box>
                <Typography component="p" variant="p" fontWeight="700" sx={{padding:"20px 20px"}}>
                     Sort By
                </Typography>
                <Typography component="p"  sx={{padding:"10px 20px",color:"gray"}}>
                     Fare Low to High
                </Typography>
                <Typography component="p"  sx={{padding:"10px 20px",color:"gray"}}>
                     Fare High to Low
                </Typography>
                <Typography component="p"  sx={{padding:"10px 20px",color:"gray"}}>
                     Rating Low to High
                </Typography>
                <Typography component="p"  sx={{padding:"10px 20px",color:"gray"}}>
                     Rating High to Low
                </Typography>
                <Typography component="p"  sx={{padding:"10px 20px",color:"gray"}}>
                     Duration Time
                </Typography>
                <Typography component="p"  sx={{padding:"10px 20px",color:"gray"}}>
                     Departure
                </Typography>
            </Box>
        </Box>
        <Box sx={{width:{md:"75%"},display:{md:"block",sm:"none"},cursor:"pointer"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}> 
            <Box sx={{width:{md:"12%"},marginTop:"10px"}}>
                <Typography component="p" sx={{color:"gray",fontSize:"12px"}}>
                       Buses Found
                </Typography>
            </Box>
            <Box sx={{width:{md:"12%"},marginTop:"10px"}}>
                <Typography component="p" sx={{color:"gray",fontSize:"12px"}}>
                       Sort by
                </Typography>
            </Box>
            <Box sx={{width:{md:"12%"},marginTop:"10px"}}>
                <Typography component="p" sx={{color:"gray",fontSize:"12px"}}>
                       Departure
                </Typography>
            </Box>
            <Box sx={{width:{md:"12%"},marginTop:"10px"}}>
                <Typography component="p" sx={{color:"gray",fontSize:"12px"}}>
                       Duration
                </Typography>
            </Box>
            <Box sx={{width:{md:"12%"},marginTop:"10px"}}>
                <Typography component="p" sx={{color:"gray",fontSize:"12px"}}>
                       Arrival
                </Typography>
            </Box>
            <Box sx={{width:{md:"12%"},marginTop:"10px"}}>
                <Typography component="p" sx={{color:"gray",fontSize:"12px"}}>
                       Ratings
                </Typography>
            </Box>
            <Box sx={{width:{md:"12%"},marginTop:"10px"}}>
                <Typography component="p" sx={{color:"gray",fontSize:"12px"}}>
                       Fair
                </Typography>
            </Box>
            <Box sx={{width:{md:"12%"},marginTop:"10px"}}>
                <Typography component="p" sx={{color:"gray",fontSize:"12px"}}>
                       Seat Avaliabilty
                </Typography>
            </Box>
            </Box>
            
            {
                State.Array.map((value,index)=>{
                    return value.bus.map((a,b)=>{
                        return(
                            <>
                            <Box sx={{width:{md:"98%"},display:{md:"block",sm:"none"},marginTop:"20px",backgroundColor:"white",boxShadow:"0px 0px 5px gray",padding:"15px 20px",cursor: "pointer"}}>
                            <Box  sx={{display:"flex",justifyContent:"space-between"}}>
                            <Box sx={{width:{md:"24%"},padding:"10px 15px"}}>
                            <Box>
                            <Typography component="p" sx={{fontSize:"12px",fontWeight:"800",color:"#9e0ef8"}}>
                            {a.Busname}
                            </Typography>
                            </Box>
                            <Box>
                            <Typography component="p" sx={{fontSize:"14px",color:"gray",marginTop:"15px"}}>
                            {a.type}
                            </Typography>
                            </Box>
                            </Box>
                            <Box sx={{width:{md:"12%"},padding:"10px 15px"}}>
                            <Box>
                            <Typography component="p" sx={{fontSize:"12px",fontWeight:"800"}}>
                            {a.starttime}
                            </Typography>
                            </Box>
                            <Box>
                            <Typography component="p" sx={{fontSize:"13px",color:"gray",marginTop:"15px"}}>
                            {a.start}
                            </Typography>
                            </Box>
                            </Box>
                            <Box sx={{width:{md:"12%"},padding:"10px 15px"}}>
                            <Box>
                            <Typography component="p" sx={{fontSize:"12px",fontWeight:"800",color:"gray"}}>
                            {a.duration}
                            </Typography>
                            </Box>
                            </Box>
                            <Box sx={{width:{md:"12%"},padding:"10px 15px"}}>
                            <Box>
                            <Typography component="p" sx={{fontSize:"12px",fontWeight:"800"}}>
                            {a.arrival}
                            </Typography>
                            </Box>
                            </Box>
                            <Box sx={{width:{md:"12%"},padding:"10px 15px"}}>
                            <Box sx={{padding:"5px 10px",backgroundColor:"#38b87c",display:"inline-block",borderRadius:"3px"}}>
                            <Typography component="p" sx={{fontSize:"12px",fontWeight:"800",color:"white"}}>
                            <i style={{fontSize:"12px",marginRight:"5px"}}><FaStar /></i>
                            {a.rating}
                            </Typography>
                            </Box>
                            </Box>
                            <Box sx={{width:{md:"10%"},padding:"10px 15px"}}>
                            <Box>
                            <Typography component="p" sx={{fontSize:"12px",fontWeight:"800"}}>
                            {a.fare}
                            </Typography>
                            </Box>
                            </Box>
                            <Box sx={{width:{md:"14%"},padding:"10px 15px"}}>
                            <Box>
                            <Typography component="p" sx={{fontSize:"12px",fontWeight:"800",color:"green"}}>
                            {a.seatavabilty}
                            </Typography>
                            </Box>
                            <Box>
                            <Typography component="p" sx={{fontSize:"12px",fontWeight:"800",color:"blue",marginTop:"5px"}}>
                            {a.windowset}
                            </Typography>
                            </Box>
                            </Box>
                            </Box>
                            <Box>
                                <Typography component="i" sx={{padding:"10px 15px"}}>
                                <BsFillTrainFreightFrontFill />
                                </Typography>
                                <Typography component="i"sx={{padding:"10px 15px"}}>
                                <FaGasPump />
                                </Typography>
                                <Typography component="i"sx={{padding:"10px 15px"}}>
                                <FaRadio />
                                </Typography>
                                <Typography component="i"sx={{padding:"10px 15px"}}>
                                <FaChargingStation />
                                </Typography>
                                <Typography component="i"sx={{padding:"10px 15px"}}>
                                <SiEsea />
                                </Typography>
                                <Typography component="span"sx={{padding:"10px 0px",fontSize:"15px"}}>
                                {a.tracking}
                                </Typography>
                                <Typography component="span"sx={{padding:"10px 10px",fontSize:"13px",color:"red"}}>
                                {a.return}
                                </Typography>
                            </Box>
                            <Box sx={{padding:"10px 15px",color:"white",boxShadow:"0px 0px 5px gray",marginTop:"10px"}}> 
                                <Box sx={{display:"flex",justifyContent:"end"}}>
                                    <Typography sx={{padding:"5px 10px",backgroundColor:"#d84f57",display:"inline-block",fontWeight:"700",color:"white",borderRadius:"5px"}} component="h5" onClick={()=>View(a,b,a.busno)}>
                                          View Seats 
                                    </Typography>
                                </Box>
                        { (a.isSeat) && 
                                <Box sx={{width:{md:"96%"},display:{md:"block",sm:"none"},backgroundColor:"#eeeded",
                                  boxShadow:"0px 0px 5px gray",padding:"15px 20px",cursor: "pointer",margin:"20px 0px",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
                                    <Box sx={{width:{md:"40%"},padding:"10px 15px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"around",boxShadow:"0px 0px 5px gray"}}>
                            {
                              a.seats.map((c,d)=>{
                                return(
                                  <>
                                  {c.isBooked ?
                                  <Typography sx={{width:"15%",padding:"10px 0px",margin:"5px",color:"black"}}  component="img" src={Unavailable}>
                                  </Typography>
                                  :
                                    <Typography sx={{width:"15%",padding:"10px 0px",margin:"5px",color:"black"}} onClick={()=>Board(c,d,c.busno,c.id,value.busid)} component="img" src={Available}>
                                    </Typography>
                              }
                                  </>
                                )
                              })
                            }
                          </Box>
                          <Box sx={{width:{md:"50%"}}}>
                            <Typography component="h2" variant="h6" sx={{fontWeight:800,color:"black",textAlign:"center"}}>
                                  SEAT LEGEND
                            </Typography>
                            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",marginTop:"20px"}}>
                              <Typography component="p" sx={{color:"black"}}>
                                <span style={{padding:"0px 15px",border:"1px solid green",marginRight:"10px",fontWeight:"800"}}></span>
                                Avaliable
                              </Typography>
                              <Typography component="p" sx={{color:"black"}}>
                              <span style={{padding:"0px 15px",border:"1px solid red",marginRight:"10px",fontWeight:"800"}}></span>
                                Un-Avaliable
                              </Typography>
                              <Typography component="p" sx={{color:"black"}}>
                              <span style={{padding:"0px 15px",border:"1px solid hotpink",marginRight:"10px",fontWeight:"800"}}></span>
                                Fe-male
                              </Typography>
                            </Box>
                          </Box>
                          </Box>
            }
                            </Box>
                            </Box>
                            </>
                        )
                    })
                })
            }
        </Box>
        </Box>
    </Box>
    {/* third section */}
    <Box sx={{width:{xs:"100%", sm:"100%"},display:{xs:"block",sm:"block",md:"none"}}}>
          {
            State.Array.map((value,index)=>{
              return value.bus.map((a,b)=>{
               return(
                <>
                <Box sx={{width:{xs:"100%", sm:"100%"},display:{xs:"block",sm:"block",md:"none"},margin:"20px 0px"}} onClick={()=>View(a,b,a.busno)}>
                <Box sx={{width:{xs:"85%", sm:"90%"},backgroundColor:"white",margin:"auto",boxShadow:"0px 0px 5px gray",padding:"20px 15px",borderRadius:"5px"}}>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Box sx={{with:{xs:"90%",sm:"90%"}}}>
                  <Typography component="h4" varient="h5" style={{fontWeight:"800"}}>
                         {a.starttime}
                  </Typography>
                  <Typography component="p" varient="h6" sx={{color:"gray",fontWeight:"600",fontSize:"15px"}}>
                         {a.duration}
                  </Typography>
                  <Typography component="h4" sx={{fontWeight:"800",fontSize:"25px",fontFamily:"initial",color:"#9e0ef8"}}>
                         {a.Busname}
                  </Typography>
                  <Typography component="p" sx={{color:"gray",fontWeight:"800",fontSize:"13px"}}>
                         {a.type}
                  </Typography>
                </Box>
                <Box sx={{with:{xs:"10%",sm:"10%"}}}>
                  <Box>
                  <Typography component="h4" sx={{fontWeight:"800",fontSize:"20px",fontFamily:"initial",marginBottom:"30px"}}>
                         {a.fare}
                  </Typography>
                  </Box>
                <Box sx={{padding:"3px 8px",backgroundColor:"#38b87c",display:"inline-block",borderRadius:"3px"}}>
                            <Typography component="p" sx={{fontSize:"12px",fontWeight:"800",color:"white"}}>
                            <i style={{fontSize:"12px",marginRight:"5px"}}><FaStar /></i>
                            {a.rating}
                </Typography>
                </Box>

                </Box>
                </Box>
                </Box>
                </Box>
                { (a.isSeat) && 
                <Box sx={{width:{xs:"100%", sm:"100%"},display:{xs:"block",sm:"block",md:"none"}}}>
                <Box sx={{width:{xs:"85%",sm:"85%"},display:{md:"none",sm:"block",xs:"block"},backgroundColor:"#eeeded",
                boxShadow:"0px 0px 5px gray",padding:"15px 20px",cursor: "pointer",margin:"auto"}}>
                  <Box sx={{width:{xs:"100%",sm:"100%"},marginBottom:"20px"}}>
                            <Typography component="h2" variant="h6" sx={{fontWeight:800,color:"black",textAlign:"center"}}>
                                  SEAT LEGEND
                            </Typography>
                            <Box sx={{marginTop:"20px",display:{sm:"flex",alignItems:"center",justifyContent:"space-evenly"}}}>
                              <Typography component="p" sx={{color:"black",marginBottom:{xs:"10px"}}}>
                                <span style={{padding:"0px 15px",border:"1px solid green",marginRight:"10px",fontWeight:"800"}}></span>
                                Avaliable
                              </Typography>
                              <Typography component="p" sx={{color:"black",marginBottom:{xs:"10px"}}}>
                              <span style={{padding:"0px 15px",border:"1px solid red",marginRight:"10px",fontWeight:"800"}}></span>
                                Un-Avaliable
                              </Typography>
                              <Typography component="p" sx={{color:"black",marginBottom:{xs:"10px"}}}>
                              <span style={{padding:"0px 15px",border:"1px solid hotpink",marginRight:"10px",fontWeight:"800"}}></span>
                                Fe-male
                              </Typography>
                            </Box>
                   </Box>
                <Box sx={{width:{md:"100%"},padding:"10px 15px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around",boxShadow:"0px 0px 5px gray"}}>
                  {
                    a.seats.map((c,d)=>{
                      return(
                        <>
                        { c.isBooked ?
                                  <Typography sx={{width:{sm:"20%",xs:"29%"},padding:"10px 0px",margin:"5px",color:"black"}}  component="img" src={Unavailable}>
                                  </Typography>:
                          <Typography sx={{width:{sm:"20%",xs:"29%"},padding:"10px 0px",margin:"5px",color:"black"}} onClick={()=>Board(c,d,c.busno,c.id,value.busid)} component="img" src={Available}>
                          </Typography>
                    }
                        </>
                      )
                    })
                  }
                </Box>
                </Box>
                </Box>
              }
                </>
               )
              })
            })
          }
    </Box>
</Box>
        </>
    )
}
export default Banner