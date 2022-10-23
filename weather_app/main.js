
/*get the required elements by their id names*/
let change_btn = document.getElementById("change");
let current = document.getElementById("current_weather");
let emoji = document.getElementById('current_emoji')


/*create a function for the output code*/
const prompt_weather = () =>{
    let city = prompt('What city do you live in?')
    let temp = prompt('What temperature is it?')

    if (city && temp != null ){
        current.innerHTML = 'Currently ' + temp + '°' +  ' in ' + city
        emoji.innerHTML = '😟'
    }
}

/*add an eventListener to the button when clicked*/
change_btn.addEventListener("click", prompt_weather)