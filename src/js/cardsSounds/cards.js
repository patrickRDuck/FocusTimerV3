const cardTree = document.getElementById('tree')
const cardCloudRain = document.getElementById('cloud-rain')
const cardFlames = document.getElementById('flames')
const cardCoffeeShop = document.getElementById('coffee-shop')

export function activeCard(cardId) {
    document.querySelectorAll('.card').forEach((card) => {
        card.classList.remove('active')
    })

    document.getElementById(cardId).classList.add('active')
}