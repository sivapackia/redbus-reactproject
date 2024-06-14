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
import { UpdateArray,BookingArray} from "../Reducer";
import { Calculate, Yard } from "@mui/icons-material";
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
  let busno=param.get("busno")
  let seatid=param.get("seatid")
  let id=param.get("id")
  let from=param.get("from")
  let to=param.get("to")
  let seatNo=param.get("seatId")
  console.log(seatNo)
  const nav=useNavigate()
  const[From,setfrom]=useState(from)
  const[To,setto]=useState(to)
  const[seat,setseat]=useState(true)
  const[board,setboard]=useState(true)
  const[board1,setboard1]=useState(false)
  const[drop,setdrop]=useState(false)
  const[detail,setDetail]=useState(false)
  const[count,setcount]=useState(1)
  const[boardpoint,setboardpoint]=useState("")
  const[droppoint,setdroppoint]=useState("")
  const[seatno,setseatno]=useState([seatNo])
  
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

const SeatBook=(e,f,busno,seatid)=>{
  let x=State.IsBooking.map((val,ind)=>{
            return {...val,bus:val.bus.map((a,b)=>{
              return{...a,seats:a.seats.map((value,index)=>{
               return  value.id===seatid  && value.isBooked===false && value.busno===busno ? ({...value,isSelect:!value.isSelect}) :value ;
              })}
            })}
          })
  let y=x.find((value,index)=>{
     return Number(id)===value.busid
  })
  console.log(y)

  let z=y.bus.find((value,index)=>{
    return value.busno===busno
  })
  console.log(z)
  let zz=[z]
console.log(zz)

let g=z.seats.filter((value,index)=>{
  return value.isBooked===false && value.isSelect===true
})
console.log(g)

let seatcount=g.map((value,index)=>{
         return value.id
})
console.log(seatcount)

if(g.length<=6 && g.length>=1){
  setcount(g.length)
  setseatno(seatcount)
  dispatch(BookingArray(x))
  console.log(seatcount)
}


else if(g.length==0){
  let y=x.map((val,ind)=>{
    return {...val,bus:val.bus.map((a,b)=>{
      return a.busno===busno ? ({...a,isbook:!a.isbook}):a
      })}
  })
  console.log(y)
  dispatch(UpdateArray(y))
  nav(`/Banner?id=${e.busid}&from=${from}&to=${to}`)
}

else{
  alert("The Maximum Number Of Seats That Can Be Selected Is 6")
}
}


const Board=(a)=>{
  setdrop(true)
  setboard(false)
}
const Drop=(a)=>{
  setdrop(false)
  setboard(true)
}

const mobile=()=>{
  setdrop(!drop)
  setboard(!board1)
  setseat(!seat)
}

const BookDetail=(value,index,a,b)=>{
  let x=a
  let y=b
  console.log(x)
  setDetail(true)
  setdrop(false)
  setboard(false)
  if(boardpoint===""){
    setboardpoint(a)
  }
  if(droppoint===""){
    setdroppoint(b)
  }
}

const Booking=()=>{
  let x=State.IsBooking.map((val,ind)=>{
    return {...val,bus:val.bus.map((a,b)=>{
      return{...a,seats:a.seats.map((value,index)=>{
       return value.isSelect===true && value.isBooked===false ? ({...value,isBooked:!value.isBooked}) :value ;
      })}
    })}
  })
  console.log(x)
  dispatch(BookingArray(x))

  let y=x.filter((val,ind)=>{
    return val.bus.filter((value,index)=>{
      return value.isSeat===true && value.isbook===true
    })
  })
let z=y.find((val,ind)=>{
  return val.bus.find((value,index)=>{
    return value.isSeat===true && value.isbook===true
  })
})
console.log(z)

let d=z.bus.some((value,index)=>{
  return value.isSeat===true && value.busno==busno && value.isbook===true
})
console.log(d)

if(d===true){
  let y=x.map((val,ind)=>{
    return {...val,bus:val.bus.map((a,b)=>{
      return a.isSeat===true? ({...a,isSeat:!a.isSeat,isbook:!a.isbook}):a
      })}
  })
  console.log(y)
    dispatch(UpdateArray(y))
    nav(`/`)
}

}
console.log(State.IsBooking)
console.log(State.Array)
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
          <Box sx={{ flexGrow: 1,width:{xs:"50%",sm:"100%"},display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <Box sx={{marginRight:{xs:"150px",display:"flex",alignItems:"center",justifyContent:"space-between"}}}>
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
                State.IsBooking.map((value,index)=>{
                    return value.bus.map((a,b)=>{
                        return(
                            <>
                             {(a.isbook && a.busno===Number(busno) ) &&   
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
                                <Box sx={{width:{md:"96%"},display:{md:"block",sm:"none"},backgroundColor:"#eeeded",
                                  boxShadow:"0px 0px 5px gray",padding:"15px 20px",cursor: "pointer",margin:"20px 0px",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
                                    <Box sx={{width:{md:"40%"},border:"0.5px solid white",padding:"10px 15px",boxShadow:"0px 0px 5px gray",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"around"}}>
                            {
                              a.seats.map((c,d)=>{
                                return(
                                  <>
                                  {
                                    (c.isBooked) &&
                                    <Typography sx={{width:"15%",padding:"10px 0px",margin:"5px",color:"black"}}  component="img" src={Unavailable}>
                                    </Typography>
                                  }
                                     { (c.isSelect && c.isBooked ===false) && 
                                     <Typography sx={{width:"15%",padding:"5px 0px",margin:"5px",backgroundColor:"#d84e55 ",color:"white",borderRadius:"10px",textAlign:"center",boxShadow:"0px 0px 2px gray",fontFamily:"monospace"}} onClick={()=>SeatBook(value,index,a.busno,c.id)} component="p">
                                     {c.id}
                                    </Typography> 
                              }
                              {(c.isSelect===false && c.isBooked ===false) && 
                                    <Typography sx={{width:"15%",padding:"10px 0px",margin:"5px",color:"black"}} onClick={()=>SeatBook(value,index,a.busno,c.id)} component="img" src={Available}>
                                    </Typography>
                              }
                                    
                              
                                  </>
                                )
                              })
                            }
                          </Box>
                          <Box sx={{width:{md:"50%"}}}>
                                    <Box sx={{width:{md:"100%"},backgroundColor:"white",padding:"15px 10px",marginLeft:"25px"}}>
                                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                                      {board &&
                                      <>
                                          <Typography component="h1" variant="h6" sx={{fontWeight:"800",color:"#d84e55",borderBottom:"5px solid #d84e55"}}> 
                                                            {a.bord} 
                                          </Typography>
                                          <Typography component="h1" variant="h6" sx={{fontWeight:"800",color:"black"}} onClick={Board}>
                                                            {a.drop} 
                                          </Typography>
                                          </>
                                          }

                                    {drop &&
                                      <>
                                          <Typography component="h1" variant="h6" sx={{fontWeight:"800",color:"black"}} onClick={Drop}> 
                                                            {a.bord} 
                                          </Typography>
                                          <Typography component="h1" variant="h6" sx={{fontWeight:"800",color:"#d84e55",borderBottom:"5px solid #d84e55"}}>
                                                            {a.drop} 
                                          </Typography>
                                          </>
                                          }
          
                                      </Box>
                                            {board &&
                                            <Box>
                                             <FormControl sx={{marginTop:"10px"}}>
                                                <RadioGroup
                                                  aria-labelledby="demo-radio-buttons-group-label"
                                                  name="radio-buttons-group"
                                                  sx={{color:"black"}}
                                                  defaultValue={a.drop1}
                                                >
                                                  <FormControlLabel value={a.drop1} control={<Radio />} label={a.drop1} onClick={()=>setboardpoint(a.drop1)}/>
                                                  <FormControlLabel value={a.drop2} control={<Radio />} label={a.drop2} onClick={()=>setboardpoint(a.drop2)}/>
                                                  <FormControlLabel value={a.drop3} control={<Radio />} label={a.drop3} onClick={()=>setboardpoint(a.drop3)} />
                                                </RadioGroup>
                                              </FormControl>
                                            </Box>
                    }
                    {drop &&
                                            <Box>
                                              <FormControl sx={{marginTop:"10px"}}>
                                                <RadioGroup
                                                  aria-labelledby="demo-radio-buttons-group-label"
                                                  name="radio-buttons-group"
                                                  sx={{color:"black"}}
                                                  defaultValue={a.board1}
                                                >
                                                  <FormControlLabel value={a.board1} control={<Radio />} label={a.board1}  onClick={()=>setdroppoint(a.board1)}/>
                                                  <FormControlLabel value={a.board2} control={<Radio />} label={a.board2}  onClick={()=>setdroppoint(a.board2)}/>
                                                  <FormControlLabel value={a.board3} control={<Radio />} label={a.board3}  onClick={()=>setdroppoint(a.board3)}/>
                                                </RadioGroup>
                                              </FormControl>
                                            </Box>
                             }
                                       
                                      <Box sx={{width:{md:"100%",sm:"100%",xs:"100%"},padding:"10px 15px"}}>
                                        {detail ? 
                                      <Box>
                                        <Typography component="h3" variant="h4"  sx={{color:"black",fontWeight:"700",textAlign:"center",color:"#d84e55",width:{md:"100%",sm:"100%",xs:"100%"}}}>
                                             Booking Detail
                                        </Typography>
                                        <Box>
                                      <Box sx={{display:"flex",alignItems:"center"}}>
                                      <Typography component="p" sx={{fontWeight:"700",fontSize:"18px",margin:"10px",width:"100%",color:"blue",width:{md:"30%",sm:"20%",xs:"30%"}}} >
                                        Boarding Place :
                                      </Typography>
                                      <Typography component="span" sx={{color:"green",fontWeight:"700",fontSize:"18px",margin:"10px",display:"inline-block"}}>{boardpoint}
                                      </Typography>
                                      </Box>
                                      <Box sx={{display:"flex",alignItems:"center"}}>
                                      <Typography component="p"  sx={{fontWeight:"700",fontSize:"18px",margin:"10px",width:"100%",color:"blue",width:{md:"30%",sm:"20%",xs:"30%"}}} >
                                        Droping Place :
                                      </Typography>
                                      <Typography component="span" sx={{color:"green",fontWeight:"700",fontSize:"18px",margin:"10px",display:"inline-block"}}>{droppoint}
                                      </Typography>
                                      </Box>
                                      <Box sx={{display:"flex",alignItems:"center"}}>
                                      <Typography component="p"  sx={{fontWeight:"700",fontSize:"18px",margin:"10px",width:"100%",color:"blue",width:{md:"17%",sm:"17%",xs:"17%"}}} >
                                        Seat No :
                                      </Typography>
                                      {seatno.map((value,index)=>{
                                        return(
                                          <>
                                      <Typography component="span" sx={{color:"green",fontWeight:"700",fontSize:"18px",margin:"10px",display:"inline-block"}}>
                                        {value} 
                                      </Typography>
                                      </>
                                        )
                                      })}
                                      </Box>
                                        
                                      <Box>
                                              <Typography component="p" sx={{color:"black",fontSize:"12px",marginTop:"20px",display:"flex",justifyContent:"space-evenly"}}>
                                                  <span style={{fontWeight:"800"}}><span style={{fontWeight:"800",fontSize:"15px",color:"green"}}>Amount</span> (Taxes will be calculated during payment)</span>
                                                  <span style={{fontWeight:"800",fontSize:"15px",color:"blue"}}>INR {a.fare*count}.000</span>
                                              </Typography>
                                      </Box> 
                                      <Box>
                                              <Typography component="p" sx={{color:"white",fontSize:"18px",marginTop:"15px",padding:"10px",textAlign:"center",backgroundColor:"#d84e55",width:"90%",fontWeight:"700"}} onClick={()=>Booking()}>
                                                    PROCEED TO BOOK
                                              </Typography>
                                            </Box>    
                                      </Box>
                                     </Box>:
                                            <Box>
                                              <Typography component="p" sx={{color:"black",fontSize:"12px",marginTop:"20px",display:"flex",justifyContent:"space-evenly"}}>
                                                  <span><span style={{fontWeight:"800",fontSize:"15px"}}>Amount</span> (Taxes will be calculated during payment)</span>
                                                  <span style={{fontWeight:"800",fontSize:"15px",color:"blue"}}>INR {a.fare*count}.000</span>
                                              </Typography>
                                            </Box>  
                    }

                                     {board &&
                                            <Box>
                                              <Typography component="p" sx={{color:"white",fontSize:"17px",marginTop:"15px",padding:"10px",textAlign:"center",backgroundColor:"#d84e55"}} onClick={Board}>
                                                    CONTINUE
                                              </Typography>
                                            </Box>
                             }
                                {drop &&
                                            <Box>
                                              <Typography component="p" sx={{color:"white",fontSize:"17px",marginTop:"15px",padding:"10px",textAlign:"center",backgroundColor:"#d84e55"}} onClick={()=>BookDetail(value,index,a.drop1,a.board1)}>
                                                    CONTINUE
                                              </Typography>
                                            </Box>
                             }
                                          </Box>
                                          </Box>
                                     </Box>
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
    </Box>
    {/* third section */}
    <Box sx={{width:{xs:"100%", sm:"100%"},display:{xs:"block",sm:"block",md:"none"},marginTop:"20px"}}>
          {
            State.IsBooking.map((value,index)=>{
              return value.bus.map((a,b)=>{
               return(
                <>
                { (a.isSeat) && 
                <Box sx={{width:{xs:"100%", sm:"100%"},display:{xs:"block",sm:"block",md:"none"}}}>
                <Box sx={{width:{xs:"85%",sm:"85%"},display:{md:"none",sm:"block",xs:"block"},backgroundColor:"#eeeded",
                boxShadow:"0px 0px 5px gray",padding:"15px 20px",cursor: "pointer",margin:"auto"}}>
                  {seat && 
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
                }
                   {seat && 
                <Box sx={{width:{md:"100%"},padding:"10px 15px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around",flex:"wrap",boxShadow:"0px 0px 5px gray"}}>
                  {
                    a.seats.map((c,d)=>{
                      return(
                        <>
                        {c.isBooked &&
                        <Typography sx={{width:{sm:"20%",xs:"29%"},padding:{xs:"10px 0px",sm:"0px 0px"},margin:"5px",color:"black"}}  component="img" src={Unavailable}>
                        </Typography>
                  }
                          { (c.isSelect && c.isBooked===false) &&
                          <Typography sx={{width:"15%",padding:{xs:"10px 20px",sm:"20px 20px"},margin:"5px",color:"black",backgroundColor:"#d84e55 ",color:"white",borderRadius:"10px",textAlign:"center",boxShadow:"0px 0px 2px gray",fontFamily:"monospace",fontSize:{sm:"25px"}}} onClick={()=>SeatBook(value,index,a.busno,c.id)} component="p">
                          {c.id}
                         </Typography> 
                    }
                     { (c.isSelect===false && c.isBooked===false) &&
                                    <Typography sx={{width:{sm:"20%",xs:"29%"},padding:{xs:"10px 0px",sm:"0px 0px"},margin:"5px",color:"black"}} onClick={()=>SeatBook(value,index,a.busno,c.id)} component="img" src={Available}>
                                    </Typography>
                    }
                                    
                    
                        </>
                      )
                    })
                  }
                  <Box sx={{textAlign:{sm:"center"}}}>
                    <Typography component="p" sx={{color:"white",fontSize:{xs:"17px",sm:"22px"},marginTop:{xs:"15px",sm:"25px"},padding:{xs:"10px",sm:"20px"},textAlign:"center",backgroundColor:"#d84e55",borderRadius:"5px",marginBottom:"10px"}} onClick={()=>mobile()}>
                    Select Boarding && Droping Point
                    </Typography>
                    </Box>
                </Box>
              }
              <Box>
              { (board && drop) &&
              <Box sx={{width:{xs:"85%",sm:"85%"},display:{md:"none"}}}>
                <Box>
                <Box>
                <Typography component="h1" variant="h6" sx={{fontWeight:"800",color:"#d84e55",borderBottom:"5px solid #d84e55",display:"inline-block"}}> 
                {a.bord} 
                </Typography>
                </Box>
                <Box>
                                             <FormControl sx={{marginTop:"10px"}}>
                                                <RadioGroup
                                                  aria-labelledby="demo-radio-buttons-group-label"
                                                  name="radio-buttons-group"
                                                  sx={{color:"black"}}
                                                  defaultValue={a.drop1}
                                                >
                                                  <FormControlLabel value={a.drop1} control={<Radio />} label={a.drop1} onClick={()=>setboardpoint(a.drop1)}/>
                                                  <FormControlLabel value={a.drop2} control={<Radio />} label={a.drop2} onClick={()=>setboardpoint(a.drop2)}/>
                                                  <FormControlLabel value={a.drop3} control={<Radio />} label={a.drop3} onClick={()=>setboardpoint(a.drop3)} />
                                                </RadioGroup>
                                              </FormControl>
                                            </Box>
                                            <Box>
                <Typography component="h1" variant="h6" sx={{fontWeight:"800",color:"#d84e55",borderBottom:"5px solid #d84e55",display:"inline-block"}}> 
                {a.drop} 
                </Typography>
                </Box>
                                            <Box>
                                              <FormControl sx={{marginTop:"10px"}}>
                                                <RadioGroup
                                                  aria-labelledby="demo-radio-buttons-group-label"
                                                  name="radio-buttons-group"
                                                  sx={{color:"black"}}
                                                  defaultValue={a.board1}
                                                >
                                                  <FormControlLabel value={a.board1} control={<Radio />} label={a.board1}  onClick={()=>setdroppoint(a.board1)}/>
                                                  <FormControlLabel value={a.board2} control={<Radio />} label={a.board2}  onClick={()=>setdroppoint(a.board2)}/>
                                                  <FormControlLabel value={a.board3} control={<Radio />} label={a.board3}  onClick={()=>setdroppoint(a.board3)}/>
                                                </RadioGroup>
                                              </FormControl>
                                            </Box>
              </Box>
              <Box>
                                              <Typography component="p" sx={{color:"black",fontSize:"12px",marginTop:"20px",display:"flex",justifyContent:"space-evenly"}}>
                                                  <span style={{width:"50%",fontSize:"10px",fontWeight:"800"}}><span style={{fontWeight:"800",fontSize:"15px",color:"green"}}>Amount</span> (Taxes will be calculated during payment)</span>
                                                  <span style={{fontWeight:"800",fontSize:"15px",color:"blue"}}>INR {a.fare*count}.000</span>
                                              </Typography>
                                            </Box> 
              <Box>
                                              <Typography component="p" sx={{color:"white",fontSize:"17px",fontWeight:"800",marginTop:"15px",padding:"10px",textAlign:"center",backgroundColor:"#d84e55"}} onClick={()=>BookDetail(value,index,a.drop1,a.board1)}>
                                                    CONTINUE
                                              </Typography>
                                            </Box>
                                            </Box>
                                             }
                                            
                                         {detail &&  
                                       <Box>
                                        <Typography component="h3" variant="h4"  sx={{color:"black",fontWeight:"700",textAlign:"center",color:"#d84e55",width:"100%"}}>
                                             Booking Detail
                                        </Typography>
                                        <Box>
                                      <Box sx={{display:"flex",alignItems:"center"}}>
                                      <Typography sx={{fontWeight:"700",fontSize:"14px",margin:"10px",width:"100%",color:"blue",width:"36%"}} >
                                        Boarding Place :
                                      </Typography>
                                      <Typography component="span" sx={{color:"green",fontWeight:"700",fontSize:"13px",margin:"10px",display:"inline-block"}}>{boardpoint}
                                      </Typography>
                                      </Box>
                                      <Box sx={{display:"flex",alignItems:"center"}}>
                                      <Typography sx={{fontWeight:"700",fontSize:"14px",margin:"10px",width:"100%",color:"blue",width:"36%"}} >
                                        Droping Place :
                                      </Typography>
                                      <Typography component="span" sx={{color:"green",fontWeight:"700",fontSize:"13px",margin:"10px",display:"inline-block"}}>{droppoint}
                                      </Typography>
                                      </Box>
                                      <Box sx={{display:"flex",alignItems:"center"}}>
                                      <Typography sx={{fontWeight:"700",fontSize:"14px",margin:"10px",width:"100%",color:"blue",width:"21%"}} >
                                        Seat No :
                                      </Typography>
                                      {seatno.map((value,index)=>{
                                        return(
                                          <>
                                      <Typography component="span" sx={{color:"green",fontWeight:"700",fontSize:{xs:"11px",sm:"18px"},margin:"10px",display:"inline-block"}}>
                                        {value} 
                                      </Typography>
                                      </>
                                        )
                                      })}
                                      </Box>
                                        
                                      <Box>
                                      <Typography component="p" sx={{color:"black",fontSize:"12px",marginTop:"20px",display:"flex",justifyContent:"space-evenly"}}>
                                                  <span style={{width:"50%",fontSize:"10px",fontWeight:"800"}}><span style={{fontWeight:"800",fontSize:"15px",color:"green"}}>Amount</span> (Taxes will be calculated during payment)</span>
                                                  <span style={{fontWeight:"800",fontSize:"15px",color:"blue"}}>INR {a.fare*count}.000</span>
                                              </Typography>
                                      </Box> 
                                      <Box>
                                              <Typography component="p" sx={{color:"white",fontSize:"18px",marginTop:"15px",padding:"10px",textAlign:"center",backgroundColor:"#d84e55",width:"90%",fontWeight:"700"}} onClick={()=>Booking()}>
                                                    PROCEED TO BOOK
                                              </Typography>
                                            </Box>    
                                      </Box>
                                     </Box>
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