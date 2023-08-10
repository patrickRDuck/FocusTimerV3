import { activeCard } from "./cards.js"
import * as sounds from "./sounds.js"

let identificator

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        switch(identificator) {
            case 'cardCloudRain':
                sounds.cardCloudRain_audio.pause()
                sounds.cardCloudRain_audio.currentTime = 0
                break
            case 'cardCoffeeShop':
                sounds.cardCoffeeShop_audio.pause()
                sounds.cardCoffeeShop_audio.currentTime = 0
                break
            case 'cardFlames':
                sounds.cardFlames_audio.pause()
                sounds.cardFlames_audio.currentTime = 0
                break
            case 'cardTree':
                sounds.cardTree_audio.pause()
                sounds.cardTree_audio.currentTime = 0
            default:
                break
        }

        let categoryValue = card.dataset.category
        identificator = categoryValue

        if(document.getElementById(categoryValue).classList.contains('active')) {
            document.getElementById(categoryValue).classList.remove('active')  
            return
        }

        activeCard(categoryValue)


        sounds.audio(categoryValue, true)
    })
})