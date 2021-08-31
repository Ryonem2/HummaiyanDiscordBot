const Discord = require("discord.js");
const { prefix } = require("./auth.json");

module.exports = (msg) => {
    // let calMsg = [];
    let res = 0
    const m = msg.content;
    const convertedMeg = m.toLowerCase();
    const calMsg = convertedMeg.split(' ')
    // const len = calMsg.lenght;
    console.log(`m = ${m} , convertedMsg = ${convertedMeg}, calMsg =${calMsg}`)
    // console.log(len)
    if(calMsg[0] == '#calc'){
        // calMsg.shift();
        calMsg2 = calMsg[1].split('')
        calMsg3 = [];
        ress = [1,2,3,4]

        calMsg2.map((v,i) => {
            if (i%2==0 || i == 0){
                return calMsg3.push(parseInt(v))
            }
            else {
                return calMsg3.push(v)
            }
        })

        for(a=0;a<calMsg3.length;a++){
            
            if (calMsg3[a] == 'x') {
                calMsg3[a-1] = calMsg3[a-1]*calMsg3[a+1]
                calMsg3.splice(a,2);
                a--;
            }
            if (calMsg3[a] == '/') {
                calMsg3[a-1] = calMsg3[a-1]/calMsg3[a+1]
                calMsg3.splice(a,2);
                a--;
            }
        }
        for(b=0;b<calMsg3.length;b++){
            if (calMsg3[b] == '+'){
                calMsg3[b-1] = calMsg3[b-1]+calMsg3[b+1]
                calMsg3.splice(b,2);
                b--;
                console.log(calMsg3);
            }
            if (calMsg3[b] == '-'){
                calMsg3[b-1] = calMsg3[b-1]-calMsg3[b+1]
                calMsg3.splice(b,2);
                b--;
                console.log(calMsg3);
            }

            
        }
        msg.channel.send(calMsg3);
    }
    
    
    
}