
// Run Seconds 
var displaySeconds = function() {
    var currentTime = new Date();
    var currentSeconds = Number(currentTime.getSeconds()) + 1 ;
    var secondsDigit_1 = document.getElementById("secondsDigit1");
    var secondsDigit_2 = document.getElementById("secondsDigit2");
    if(currentSeconds < 10) {
        var current_Seconds = "0" + currentSeconds;
        secondsDigit_1.innerHTML = current_Seconds[0];
        secondsDigit_2.innerHTML = current_Seconds[1];
    } else {
        current_Seconds = currentSeconds.toString();
        secondsDigit_1.innerHTML = current_Seconds[0];
        secondsDigit_2.innerHTML = current_Seconds[1];
    }
}

// Run Minutes
var displayMinutes = () => {
    var currentTime = new Date();
    var currentMinutes = Number(currentTime.getMinutes());
    var minutesDigit_1 = document.getElementById("minutesDigit1");
    var minutesDigit_2 = document.getElementById("minutesDigit2");
    if(currentMinutes < 10) {
        var current_Minutes = "0" + currentMinutes;
        minutesDigit_1.innerHTML = current_Minutes[0];
        minutesDigit_2.innerHTML = current_Minutes[1];
    } else {
        current_Minutes = currentMinutes.toString();
        minutesDigit_1.innerHTML = current_Minutes[0];
        minutesDigit_2.innerHTML = current_Minutes[1];
    }
}

// Run Hours
var displayHours = () => {
    var currentTime = new Date();
    var currentHours = Number(currentTime.getHours());
    var hoursDigit_1 = document.getElementById("hoursDigit1");
    var hoursDigit_2 = document.getElementById("hoursDigit2");
    
    if(currentHours < 12) {
        if(currentHours < 10) {
            var current_Hours = "0" + currentHours;
            hoursDigit_1.innerHTML = current_Hours[0];
            hoursDigit_2.innerHTML = current_Hours[1];
        } else {
            current_Hours = currentHours.toString();
            hoursDigit_1.innerHTML = current_Hours[0];
            hoursDigit_2.innerHTML = current_Hours[1];
        } 
    } else { 
            var current_Hours = currentHours - 12;
            if(current_Hours < 10) {
                current_Hours = "0" + current_Hours;
                hoursDigit_1.innerHTML = current_Hours[0];
                hoursDigit_2.innerHTML = current_Hours[1];
            } else {
                current_Hours = current_Hours.toString();
                hoursDigit_1.innerHTML = current_Hours[0];
                hoursDigit_2.innerHTML = current_Hours[1];
            }
    }
    if( currentHours ==  0) {
        current_Hours = "12";
        hoursDigit_1.innerHTML = current_Hours[0];
        hoursDigit_2.innerHTML = current_Hours[1];
    }
    if( currentHours ==  12) {
        current_Hours = "12";
        hoursDigit_1.innerHTML = current_Hours[0];
        hoursDigit_2.innerHTML = current_Hours[1];
    }
}


//For AM and PM

var am_pm = () => {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var containerA_P = document.getElementById("am-pm-A-P");
    if(currentHours < 12) {
        containerA_P.innerHTML = "A";
    }
    else {
        containerA_P.innerHTML = "P";
    }
}

// For Date, Month, Year and Day
// Name of Day
var displayDay = () => {
    var currentTime = new Date();
    var currentDay = currentTime.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var daysContainer = document.getElementById("dayToday");
    var dayName;
    switch(currentDay) {
        case 0 :
            dayName = days[0];
            break;
        case 1 :
            dayName = days[1];
            break;
        case 2 :
            dayName = days[2];
            break;
        case 3 :
            dayName = days[3];
            break;
        case 4 :
            dayName = days[4];
            break;
        case 5 :
            dayName = days[5];
            break;
        case 6 :
            dayName = days[6];
            break;
    }
    daysContainer.innerHTML = dayName;

}
//For Date, Month and Year
var displayDate = () => {
    var currentTime = new Date();
    var currentDate = currentTime.getDate();
    var currentMonth = currentTime.getMonth();
    var currentYear = currentTime.getFullYear();
    //creating array for Months
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //creating array for abbriviation i.e., st, nd, rd & th
    var abbr = ["st", "nd", "rd", "th"];
    var containerDate = document.getElementById("dateToday");
    var containerAbbr = document.getElementById("dateAbbri");
    var containerMonth = document.getElementById("monthToday");
    var containerYear = document.getElementById("yearToday");
    containerDate.innerHTML = currentDate;
    containerYear.innerHTML = currentYear;
    let i = currentMonth;
    let j = months.length - 1;
    var month_Name;
    for(j=0 ; j <= i ; j++ ) {
        if(j == i ) {
            month_Name = months[j];
            containerMonth.innerHTML = month_Name;
            break;
        }

    }
    // For abbriviation like 1st 2nd 3rd and 5th
//     var current_Date = currentDate;
//     //convert a number to string  from 1 to 9
//     if(current_Date < 10) {
//         current_Date = current_Date.toString();
//         //access 0th property of string
//         var digit_1 = current_Date[0];
//         digit_1 = Number(digit_1);
//         //take the legth of array Abbr
//         var dateNumber = digit_1 - 1;
//         var lenAbbr = abbr.length - 1;
//         /*create a loop that gives a exact position of abbriviation in array according to current date*/
//         if(dateNumber <= 2) {
//             for(lenAbbr=0 ; lenAbbr <= dateNumber ; lenAbbr++) {
//                 if(lenAbbr == dateNumber) {
//                     containerAbbr.innerHTML = abbr[lenAbbr];
//                     break;
//                 }
//             }
//         } else {
//             containerAbbr.innerHTML = abbr[3];
//         }
//     } else {
//         // if the date is between 11 & 20 then bypass the loop
//         if( current_Date > 20 | current_Date == 10) {
//         current_Date = current_Date.toString();
//         var digit_2 = current_Date[1];
//         digit_2 = Number(digit_2);
//         dateNumber = digit_2 - 1;
//         //if 2nd digit is 0 then th abbriviation is called
//         if(digit_2 == 0 ) {
//             containerAbbr.innerHTML = abbr[3];
//         }
//         //run loop to fix exact abbrivation that is 1st, 2nd, 23rd etc.....
//         if(dateNumber <= 2) {
//             for(lenAbbr=0 ; lenAbbr <= dateNumber ; lenAbbr++) {
//                 if(lenAbbr == dateNumber) {
//                     containerAbbr.innerHTML = abbr[lenAbbr];
//                     break;
//                 }
//             }
//         } else {
//             containerAbbr.innerHTML = abbr[3];
//         }
//     } else {
//         //if date is between 11-20 then this statement is to be executed
//         containerAbbr.innerHTML = abbr[3];
//     }
// }
}
// Envocation of all the time functions
displaySeconds();
displayMinutes();
displayHours();
am_pm();
displayDay();
displayDate();
var displaySeconds = setInterval(displaySeconds, 1000);
var displayMinutes = setInterval(displayMinutes, 1000);
var displayHours = setInterval(displayHours, 1000);
var displayAm_Pm = setInterval(am_pm, 1000);
var display_Day = setInterval(displayDay, 1000); 
var display_Date = setInterval(displayDate, 1000); 
