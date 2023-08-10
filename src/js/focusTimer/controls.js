import * as timer from './timer.js'
import state from './state.js'

export const buttonPlay = document.getElementById('button-play')
export const buttonReset = document.getElementById('button-reset')
export const buttonPause = document.getElementById('button-pause')
export const buttonSet = document.getElementById('button-set')

export const buttonPlusMinutes = document.getElementById('button-plusMinutes')
export const buttonReduceMinutes = document.getElementById('button-reduceMinutes')

export function play() {
    document.documentElement.classList.toggle('running')

    if(document.documentElement.classList.contains('pause')) {
        document.documentElement.classList.remove('pause')
    }

    state.isRunning = true

    timer.countdown()
}

export function reset() {
    document.documentElement.classList.remove('running')

    if(document.documentElement.classList.contains('pause')) {
        document.documentElement.classList.remove('pause')
    }

    state.isRunning = false

    timer.minutes.textContent = String(state.minutes).padStart(2, '0')
    timer.seconds.textContent = String(state.seconds).padStart(2, '0')
}

export function pause() {
    document.documentElement.classList.remove('running')
    document.documentElement.classList.add('pause')

    state.pauseClicked = !state.pauseClicked
}

export function set() {
    timer.minutes.setAttribute('contenteditable', true)
    timer.minutes.focus()

    timer.minutes.onkeypress = (event) => /\d/.test(event.key)

    timer.minutes.addEventListener('blur', () => {
        timer.minutes.removeAttribute('contenteditable')

        let time = Number(timer.minutes.textContent) > 60 ? 60 : timer.minutes.textContent

        state.minutes = String(time).padStart(2, '0')
        state.seconds = 0

        timer.updateDisplay(time, 0)
    })
}

export function reduceMinutes() {
    if(state.isRunning) {
        document.documentElement.classList.remove('running')
        state.isRunning = false
    }

    let newTime = Number(state.minutes) - 1

    if(newTime > 0) {
        state.minutes = newTime
        state.seconds = 0
        timer.updateDisplay(state.minutes, state.seconds)
    }
}

export function plusMinutes() {
    if(state.isRunning) {
        document.documentElement.classList.remove('running')
        state.isRunning = false
    }

    let newTime = Number(state.minutes) + 1

    if(61 > newTime > 0) {
        state.minutes = newTime
        state.seconds = 0
        timer.updateDisplay(state.minutes, state.seconds)
    }
}