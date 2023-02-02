import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {styled} from "@mui/system";
import "./styles.css"

const PositionedLeftArrow = styled(ArrowBackIosIcon)`
    color: white;
    font-size: 50px;
    display: block;
    margin: auto;
    
    &: hover{
        cursor: pointer;
        color: yellow;
    }
`
const PositionedRightArrow = styled(ArrowForwardIosIcon)`
    color: white;
    font-size: 50px;
    display: block;
    margin: auto;
    
    &: hover{
        cursor: pointer;
        color: yellow;
    }
`


function Arrows({setState}){

    const handleClick = (e) =>{
        //note to my future self, what the following function does is select either 
        //<p> yesterday </p> or 
        //<p> tomorrow</p> 
        //from the DOM
        //and will change the innerHTML based on what the user has clicked on
        const left = document.querySelector(".left");
        const right = document.querySelector(".right"); 
        const currentReading = document.querySelector(".currentReading");
        let day = e.target.parentElement;       
        const tagName = day.tagName.toLowerCase();             

        if(tagName == "svg")                                    
            day = day.parentElement.lastElementChild.innerHTML;
        else 
            day = day.lastElementChild.innerHTML;
  
        if(day == "yesterday"){
            right.style.display = "";
            right.lastElementChild.innerHTML = "today"
            left.style.display = "none";
            currentReading.innerHTML = "yesterday";
        }
        else if(day == "tomorrow"){
            left.style.display = "";
            left.lastElementChild.innerHTML = "today"
            right.style.display = "none";
            currentReading.innerHTML = "tomorrow";
        }
        else if(day == "today"){
            left.style.display = "";
            left.lastElementChild.innerHTML = "yesterday";
            right.style.display = "";
            right.lastElementChild.innerHTML = "tomorrow";
            currentReading.innerHTML = "today";
        }
        setState(day);
    }


    return(
        <>
            <p className="currentReading">today</p>
            <div className="left">
                <PositionedLeftArrow onClick={handleClick}/>
                <p>
                    yesterday
                </p>
                </div>
            <div className="right">
                <PositionedRightArrow onClick={handleClick}/> 
                <p>
                    tomorrow
                </p>
            </div>
        </>
    )
}

export default Arrows;