document.addEventListener(
    "DOMContentLoaded",
    () => {


        const elements = [

            document.querySelector(".date"),

            document.querySelector(".clock"),

            document.querySelector(".greeting"),

            document.querySelector(".search")

        ];



        elements.forEach(
            (element, index) => {


                if (!element) return;


                element.classList.add(
                    "enter"
                );


                element.style.animationDelay =
                `${index * 0.15}s`;


            }
        );


    }
);