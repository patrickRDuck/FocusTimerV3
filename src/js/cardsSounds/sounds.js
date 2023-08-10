export const cardCloudRain_audio = new Audio(`./assets/cardCloudRain-audio.wav`)
export const cardCoffeeShop_audio = new Audio(`./assets/cardCoffeeShop-audio.wav`)
export const cardFlames_audio = new Audio(`./assets/cardFlames-audio.wav`)
export const cardTree_audio = new Audio(`./assets/cardTree-audio.wav`)

export function audio(id, boolean) {
    switch(id) {
        case 'cardCloudRain':
            cardCloudRain_audio.loop
            cardCloudRain_audio.play()
            break
        case 'cardCoffeeShop': 
            cardCoffeeShop_audio.loop
            cardCoffeeShop_audio.play()
            break
        case 'cardFlames':
            cardFlames_audio.loop
            cardFlames_audio.play()
            break
        case 'cardTree':
            cardTree_audio.loop
            cardTree_audio.play()
            break
    }
}