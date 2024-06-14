import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FiCopy } from "react-icons/fi";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div style={{width:"90%"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"blue",borderRadius:"20px",padding:"10px 15px",margin:"15px"}}>
            <div style={{width:"20%"}}>
                <img src="https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png" width="100%" style={{borderRadius:"50%"}}/>
            </div>
            <div style={{width:"80%",marginLeft:"5px"}}>
              <h4 style={{color:"white",padding:"2px 5px",backgroundColor:'#ffffff85',display:"inline-block",margin:"0px",borderRadius:"10px"}}>Bus</h4>
              <h3 style={{color:"white",padding:"2px 5px",display:"inline-block",fontWeight:"700",margin:"0px"}}>Save Up To Rs 250 On Bus Tickets</h3>
              <h5 style={{color:"white",fontWeight:"700",margin:"0px"}}>Valid Till 31 Dec</h5>
              <h4 style={{color:"white",padding:"2px 5px",fontWeight:"700",margin:"0px",backgroundColor:'#ffffff85',display:"inline-block",border:"1px dotted white"}}>FIRST</h4>
              <i style={{color:"white",fontSize:"28px",verticalAlign:"middle",marginLeft:"5px"}}><FiCopy /></i>
            </div>
            </div>
          </div>
          <div style={{width:"90%"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#7e141a",borderRadius:"20px",padding:"10px 15px",margin:"15px"}}>
            <div style={{width:"20%"}}>
                <img src="https://st.redbus.in/Images/INDOFFER/80x80/BUS300.png" width="100%" style={{borderRadius:"50%"}}/>
            </div>
            <div style={{width:"80%",marginLeft:"5px"}}>
              <h4 style={{color:"white",padding:"2px 5px",backgroundColor:'#ffffff85',display:"inline-block",margin:"0px",borderRadius:"10px"}}>Bus</h4>
              <h3 style={{color:"white",padding:"2px 5px",display:"inline-block",fontWeight:"700",margin:"0px"}}>Save Up To Rs 250 On Bus Tickets</h3>
              <h5 style={{color:"white",fontWeight:"700",margin:"0px"}}>Valid Till 31 Dec</h5>
              <h4 style={{color:"white",padding:"2px 5px",fontWeight:"700",margin:"0px",backgroundColor:'#ffffff85',display:"inline-block",border:"1px dotted white"}}>FIRST</h4>
              <i style={{color:"white",fontSize:"28px",verticalAlign:"middle",marginLeft:"5px"}}><FiCopy /></i>
            </div>
            </div>
          </div>
          <div style={{width:"90%"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#06763e",borderRadius:"20px",padding:"10px 15px",margin:"15px"}}>
            <div style={{width:"20%"}}>
                <img src="https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png" width="100%" style={{borderRadius:"50%"}}/>
            </div>
            <div style={{width:"80%",marginLeft:"5px"}}>
              <h4 style={{color:"white",padding:"2px 5px",backgroundColor:'#ffffff85',display:"inline-block",margin:"0px",borderRadius:"10px"}}>Bus</h4>
              <h3 style={{color:"white",padding:"2px 5px",display:"inline-block",fontWeight:"700",margin:"0px"}}>Save Up To Rs 250 On Bus Tickets</h3>
              <h5 style={{color:"white",fontWeight:"700",margin:"0px"}}>Valid Till 31 Dec</h5>
              <h4 style={{color:"white",padding:"2px 5px",fontWeight:"700",margin:"0px",backgroundColor:'#ffffff85',display:"inline-block",border:"1px dotted white"}}>FIRST</h4>
              <i style={{color:"white",fontSize:"28px",verticalAlign:"middle",marginLeft:"5px"}}><FiCopy /></i>
            </div>
            </div>
          </div>
          <div style={{width:"90%"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#187d97",borderRadius:"20px",padding:"10px 15px",margin:"15px"}}>
            <div style={{width:"20%"}}>
                <img src="https://st.redbus.in/Images/INDOFFER/80x80/RBTRIP.png" width="100%" style={{borderRadius:"50%"}}/>
            </div>
            <div style={{width:"80%",marginLeft:"5px"}}>
              <h4 style={{color:"white",padding:"2px 5px",backgroundColor:'#ffffff85',display:"inline-block",margin:"0px",borderRadius:"10px"}}>Bus</h4>
              <h3 style={{color:"white",padding:"2px 5px",display:"inline-block",fontWeight:"700",margin:"0px"}}>Save Up To Rs 250 On Bus Tickets</h3>
              <h5 style={{color:"white",fontWeight:"700",margin:"0px"}}>Valid Till 31 Dec</h5>
              <h4 style={{color:"white",padding:"2px 5px",fontWeight:"700",margin:"0px",backgroundColor:'#ffffff85',display:"inline-block",border:"1px dotted white"}}>FIRST</h4>
              <i style={{color:"white",fontSize:"28px",verticalAlign:"middle",marginLeft:"5px"}}><FiCopy /></i>
            </div>
            </div>
          </div>
          <div style={{width:"90%"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#ce7700",borderRadius:"20px",padding:"10px 15px",margin:"15px"}}>
            <div style={{width:"20%"}}>
                <img src="https://st.redbus.in/Images/INDOFFER/80x80/Chartered.png" width="100%" style={{borderRadius:"50%"}}/>
            </div>
            <div style={{width:"80%",marginLeft:"5px"}}>
              <h4 style={{color:"white",padding:"2px 5px",backgroundColor:'#ffffff85',display:"inline-block",margin:"0px",borderRadius:"10px"}}>Bus</h4>
              <h3 style={{color:"white",padding:"2px 5px",display:"inline-block",fontWeight:"700",margin:"0px"}}>Save Up To Rs 250 On Bus Tickets</h3>
              <h5 style={{color:"white",fontWeight:"700",margin:"0px"}}>Valid Till 31 Dec</h5>
              <h4 style={{color:"white",padding:"2px 5px",fontWeight:"700",margin:"0px",backgroundColor:'#ffffff85',display:"inline-block",border:"1px dotted white"}}>FIRST</h4>
              <i style={{color:"white",fontSize:"28px",verticalAlign:"middle",marginLeft:"5px"}}><FiCopy /></i>
            </div>
            </div>
          </div>
          <div style={{width:"90%"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#3c1053",borderRadius:"20px",padding:"10px 15px",margin:"15px"}}>
            <div style={{width:"20%"}}>
                <img src="https://st.redbus.in/Images/TSRTC/80x80.png" width="100%" style={{borderRadius:"50%"}}/>
            </div>
            <div style={{width:"80%",marginLeft:"5px"}}>
              <h4 style={{color:"white",padding:"2px 5px",backgroundColor:'#ffffff85',display:"inline-block",margin:"0px",borderRadius:"10px"}}>Bus</h4>
              <h3 style={{color:"white",padding:"2px 5px",display:"inline-block",fontWeight:"700",margin:"0px"}}>Save Up To Rs 250 On Bus Tickets</h3>
              <h5 style={{color:"white",fontWeight:"700",margin:"0px"}}>Valid Till 31 Dec</h5>
              <h4 style={{color:"white",padding:"2px 5px",fontWeight:"700",margin:"0px",backgroundColor:'#ffffff85',display:"inline-block",border:"1px dotted white"}}>FIRST</h4>
              <i style={{color:"white",fontSize:"28px",verticalAlign:"middle",marginLeft:"5px"}}><FiCopy /></i>
            </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}