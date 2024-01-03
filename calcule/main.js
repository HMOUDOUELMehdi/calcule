let display = document.getElementById('input')
let clear = document.getElementById('clear')
let equal = document.getElementById('equal')
let backspace = document.getElementById('backspace')

function cos() {
    display.value = eval(Math.cos(display.value))
}


function sin() {
    display.value = eval(Math.sin(display.value))
}


function dis(params) {
    display.value += params
}

clear.addEventListener('click', () => {
    display.value = ''
})

backspace.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
})


equal.addEventListener('click', () => {
    if (display.value != '') {
        try {
            display.value = eval(display.value)
            
        }
        catch {
            display.value = 'ERREUR!'
        }
    }
    else {
        display.value = 'Taper Quelque Chose.'
    }
    setTimeout(() => {display.value = ''},3000);
})



