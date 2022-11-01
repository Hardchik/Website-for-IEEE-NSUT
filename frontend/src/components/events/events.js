import React, { useEffect } from 'react'
import './events.css'
import eventsIMG from './events.png'

export default function Events() {
    useEffect(()=>{
        let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
        // console.log(countDownDate);

        let counter = setInterval(() => {
        // Get Date Now
        let dateNow = new Date().getTime();

        // Find The Date Difference Between Now And Countdown Date
        let dateDiff = countDownDate - dateNow;

        // Get Time Units
        // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

        document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        if (dateDiff < 0) {
            clearInterval(counter);
        }
        }, 1000);
    })
    return (
    <div className='html'>
        <div className='body'>
            <div class="events" id="events">
            <div class="dots dots-up"></div>
            <div class="dots dots-down"></div>
            <h2 class="main-title">Latest Events</h2>
                <div class="events_container">
                    <img src={eventsIMG} alt="" />
                    <div class="info">
                    <div class="time">
                        <div class="unit">
                        <span class="days">15</span>
                        <span>Days</span>
                        </div>
                        <div class="unit">
                        <span class="hours">08</span>
                        <span>Hours</span>
                        </div>
                        <div class="unit">
                        <span class="minutes">45</span>
                        <span>Minutes</span>
                        </div>
                        <div class="unit">
                        <span class="seconds">55</span>
                        <span>Seconds</span>
                        </div>
                    </div>
                    <h2 class="title">Project INSPIRE 2022</h2>
                    <p class="description">
                        With a motivation instilled by receiving the IEEE WIE Special Support Fund 2021 for 
                        the Project INSPIRE . We IEEE NSUT is coming up with the series of events and 
                        workshops under this project to promote the Women In Engineering by inspiring 
                        girls to follow their academic interests to a career in engineering and making them 
                        aware about perks and benefits.
                    </p>
                    </div>
                    <div class="subscribe" id="subscribe">
                        <form action="">
                            <input type="email" placeholder="Enter Your Email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div>   
    )
}