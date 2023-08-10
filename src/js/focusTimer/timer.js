import { reset } from './controls.js'
import state from './state.js'

export const minutes = document.getElementById('minutes')
export const seconds = document.getElementById('seconds')

export function countdown() {
    if(state.pauseClicked) {
        state.pauseClicked = !state.pauseClicked
        return
    }

    if(!state.isRunning) {
        return;
    }

    let newMinutes = Number(minutes.textContent)
    let newSeconds = Number(seconds.textContent)


    newSeconds--

    if(newSeconds < 0) {
        newSeconds = 59
        newMinutes--
    }

    if(newMinutes < 0) {
        reset()
        return
    }

    updateDisplay(newMinutes, newSeconds)

    setTimeout(countdown, 1000)
}

export function updateDisplay(minute, second) {
    minutes.textContent = String(minute).padStart(2, '0')
    seconds.textContent = String(second).padStart(2, '0')
}
