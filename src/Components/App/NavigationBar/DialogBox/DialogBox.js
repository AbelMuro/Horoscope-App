import React, {useState, memo} from 'react';
import {Dialog, DialogTitle, 
    DialogContent, DialogActions, 
    Select, MenuItem} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import "./styles.css";


const months = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31
}


function DialogBox({open, handleDialog}) {
    const navigate = useNavigate();
    const [monthChoosen, setMonthChoosen] = useState("January");
    const [dayChoosen, setDayChoosen] = useState(1);

    const displayAllMonths = () => {
        const allMonths = [];

        for(let month in months){
            allMonths.push(
                <MenuItem value={month} key={month}>
                    {month}
                </MenuItem>)
        }

        return allMonths;
    }

    const displayDaysOfMonth = () => {
        const allDays = [];
    
        for(let d = 1; d <= months[monthChoosen]; d++){
            allDays.push(
                <MenuItem value={d} key={`${monthChoosen} ${d}`}>
                    {d}
                </MenuItem>)
        }
        return allDays;
    }

    const handleMonthChange = (e) => {
        setMonthChoosen(e.target.value);
    }

    const handleDayChange = (e) => {
        setDayChoosen(e.target.value);
    }

    const handleSubmit = () => {
        handleDialog();                     //will close the dialog
        let sign;
        if((monthChoosen == "March" && dayChoosen >= 21) || (monthChoosen == "April" && dayChoosen <= 19))
            sign = "aries";
        else if((monthChoosen == "April" && dayChoosen >= 20) || (monthChoosen == "May" && dayChoosen <= 20))
            sign = "taurus";
        else if((monthChoosen == "May" && dayChoosen >= 21) || (monthChoosen == "June" && dayChoosen <= 21))
            sign = "gemini";
        else if((monthChoosen == "June" && dayChoosen >= 22) || (monthChoosen == "July" && dayChoosen <= 22))
            sign = "cancer";
        else if((monthChoosen == "July" && dayChoosen >= 23) || (monthChoosen == "August" && dayChoosen <= 22))
            sign = "leo";
        else if((monthChoosen == "August" && dayChoosen >= 23) || (monthChoosen == "September" && dayChoosen <= 22))
            sign = "virgo";
        else if((monthChoosen == "September" && dayChoosen >= 22) || (monthChoosen == "October" && dayChoosen <= 23))
            sign = "libra";
        else if((monthChoosen == "October" && dayChoosen >= 23) || (monthChoosen == "November" && dayChoosen <= 21))
            sign = "scorpio";
        else if((monthChoosen == "November" && dayChoosen >= 22) || (monthChoosen == "December" && dayChoosen <= 21))
            sign = "sagittarius";
        else if((monthChoosen == "December" && dayChoosen >= 22) || (monthChoosen == "January" && dayChoosen <= 19))
            sign = "capricorn";
        else if((monthChoosen == "January" && dayChoosen >= 20) || (monthChoosen == "February" && dayChoosen <= 18))
            sign = "aquarius";
        else if((monthChoosen == "June" && dayChoosen >= 22) || (monthChoosen == "July" && dayChoosen <= 22))
            sign = "pisces";

        navigate(`/${sign}`, {state: {signName: sign}})
    }


        return(
            <Dialog open={open}>
                <DialogTitle>
                    Enter your birthday
                </DialogTitle>
                <DialogContent>
                    <Select label="Select month" 
                        sx={{width: "100px", width: "100%"}} 
                        value={monthChoosen} 
                        onChange={handleMonthChange}
                    > 
                        {displayAllMonths()}
                    </Select>
                    <Select label="Select day" 
                        sx={{width: "100px", width: "100%"}} 
                        value={dayChoosen} 
                        onChange={handleDayChange}
                    >
                        {displayDaysOfMonth()}
                    </Select>

                </DialogContent>
                <DialogActions>
                    <button onClick={handleDialog} className="cancel">
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className="submit">
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
        )
}

export default memo(DialogBox);