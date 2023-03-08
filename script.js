setInterval(() =>{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hrs = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let am = hrs >= 12 ? "PM" : "AM";
    
    //conversion from 24hr clock to 12hr clock
    if (hrs >= 12){
        ampm.innerHTML = 'PM';
    }else {
        ampm.innerHTML = 'AM';
    }
     
    if (hrs > 12){
        hrs = hrs - 12;
    }

    // Making single digit to double digits
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    ampm.innerHTML = am;
})

