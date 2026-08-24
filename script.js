let config = null;


async function loadConfig() {

    try {

        const response = await fetch("config.json");

        config = await response.json();


        setupTheme();


        updateAll();


        setInterval(
            updateAll,
            1000
        );


    } catch(error) {

        console.error(
            "Config loading failed:",
            error
        );

    }

}



function setupTheme() {

    const button =
    document.getElementById("theme-toggle");


    const saved =
    localStorage.getItem("theme");



    if(saved === "light") {

        document.body.classList.add("light");

    }



    if(button) {

        button.addEventListener(
            "click",
            () => {


                document.body.classList.toggle(
                    "light"
                );


                localStorage.setItem(
                    "theme",
                    document.body.classList.contains("light")
                    ? "light"
                    : "dark"
                );


            }
        );

    }

}




function updateAll() {


    const now = new Date();



    const clock =
    document.getElementById("clock");


    const date =
    document.getElementById("date");



    if(clock) {

        clock.textContent =
        now.toLocaleTimeString(
            [],
            {

                hour:"2-digit",
                minute:"2-digit"

            }
        );

    }



    if(date) {

        date.textContent =
        now.toLocaleDateString(
            [],
            {

                weekday:"long",
                year:"numeric",
                month:"long",
                day:"numeric"

            }
        );

    }



    updateGreeting(now);

}





function updateGreeting(now) {


    const hour =
    now.getHours();


    let message;
    let icon;



    if(hour >= 5 && hour < 12) {


        message =
        config.greeting.morning;


        icon =
        "sun";


    }


    else if(hour >= 12 && hour < 18) {


        message =
        config.greeting.afternoon;


        icon =
        "afternoon";


    }


    else if(hour >= 18 && hour < 23) {


        message =
        config.greeting.evening;


        icon =
        "sunset";


    }


    else {


        message =
        config.greeting.night;


        icon =
        "moon";


    }



    const greeting =
    document.getElementById("greeting");


    const weather =
    document.getElementById("weather-icon");



    if(greeting) {

        greeting.textContent =
        message;

    }



    if(weather) {

        weather.className =
        "weather-icon " + icon;

    }


}



loadConfig();