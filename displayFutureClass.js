function cal(day,min,hr) {
    switch(day-1){
        case 0:
            //sun
            return "No Class on Sunday"
             
        case 1:
            //mon
            if (hr >= 0 && hr <=7){
                return "Next INTRO TO DIGITAL BUSINESS";
            }
            else if (hr >= 8 && hr <=9){
                return "Now studying INTRO TO DIGITAL BUSINESS and Next is  MODERN LIFE ANIMATION on 13:00 at RB5301 Room"
            } 
            else if (hr >=10 && hr <=12) {
                return "Next MODERN LIFE ANIMATION";
            }
            else if (hr >=13 && hr <=15) {
                if (min > 30) {
                    return "Now studying FUNDAMENTAL ENG and No More Class Today";
                }
                else{
                    return "Now studying MODERN LIFE ANIMATION and Next is FUNDAMENTAL ENG on 14:30";
                }
            }
            else {
                return "No More Class Today";
            }
            
             
        case 2:
            //tue
            if (hr >= 0 && hr <=7){
                return "Next PROGRAMMING LOGICAL THINKING on 8:00 at LIC - B208";
            }
            else if (hr == 8){
                return "Now studying PROGRAMMING LOGICAL THINKING and Next is PROGRAMMING LOGICAL THINKING on 9:00 at ILC-C309 Room"
            } 
            else if (hr >=9 && hr <=10){
                return "Now studying PROGRAMMING LOGICAL THINKING and Next is CITIZENSHIP on 11:00 (Online)"
            }
            else if (hr >=11 && hr <=12) {
                if (min > 30) {
                    return "Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
                }
                else{
                    return "Now studying CITIZENSHIP and Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
                }
            } 
            else if  (hr == 14) {
                if (min > 30) {
                    return "Now studying MAN AND THE MODERN WORLD and No More Class Today";
                }
                else{
                    return "Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
                }
            }
             
        case 3:
            //wed
            return "No Class on Wednesday"
             
        case 4:
            //thu
            if (hr >= 0 && hr <=7){
                return   "Next DIGITAL LITERCY on 8:00 at ILC-B203";
            }
            else if (hr == 8){
                return   "Now studying DIGITAL LITERCY and Next is DIGITAL LITERCY on 9:00 at ILC-C207"
            } 
            else if (hr >=9 && hr <=10){
                return "Now studying DIGITAL LITERCY THINKING and Next is  MODERN LIFE ANIMATION on 13:00 at RB5301"
            }
            else if (hr >=13 && hr <=15) {
                if (min > 30) {
                    return "Now studying FUNDAMENTAL ENG and No More Class Today";
                }
                else{
                    return "Now studying MODERN LIFE ANIMATION and Next is FUNDAMENTAL ENG on 14:30";
                }
            }
            else {
                return "No More Class Today";
            }
             
        case 5:
            //fri
            if (hr >= 0 && hr <=10){
                  "Next DIGITAL LITERCY on 8:00 at ILC-B203";
            }
            else if (hr >=11 && hr <=12) {
                if (min > 30) {
                    return "Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
                }
                else{
                    return "Now studying CITIZENSHIP and Next is MAN AND THE MODERN WORLD on 14:30 at HB6240";
                }
            } 
             
        case 6:
            //sat
            return "No Class on Saturday"
            
    }
    
}


module.exports = async (msg) => {

var d = new Date();
var min = d.getMinutes();
var hr = d.getHours();
const day = d.getDay();

    res = await cal(day,min,hr);

    msg.channel.send(res);
}
