class Player {
    constructor (name, totalCoins, status, hasStar, gameActive){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }

    setName(namePicked){
       if (namePicked === Mario) {
           return this.name = 'Mario'
       } else if (namePicked === Luigi) {
          return this.name = 'Luigi'
       }
    }

    gotHit() {
        if(this.status === 'Small') {
            return this.status = 'Dead', this.gameActive = false
        } else if (this.status === 'Big') {
            return this.status = 'Small'
        } else if (this.status === 'Powered Up') {
            return this.status = 'Big'
        } else if (this.status === 'Powered Up', this.hasStar === true) {
            return this.status = 'Powered Up', this.hasStar = false
        }
    }

    gotPowerup() {
        if(this.status === 'Small') {
            return this.status = 'Big'
        } else if (this.status === 'Big') {
            return this.status = 'Powered Up'
        } else if (this.status === 'Powered Up') {
            return this.status = 'Powered Up', this.hasStar = true, console.log('You have a star!\n')
        }
    }

    gameActive() {
        if(this.status === 'Dead') {
            return this.gameActive = false
        }
    }

    addCoin() {
        return this.totalCoins += 1
    }

    print() {
        console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins} \n`)
    }

}

const luigi = new Player ('Luigi', 0, 'Powered Up', false, true)
function game(player) {
    let id = setInterval(() => {
                if(player.gameActive === true) {
                    player.print()
                } else if(player.gameActive === false) {
                    console.log('You have died.'), player.print(), clearInterval(id)
                }
                let result = Math.floor(Math.random() * 3)
                if (result === 0) {
                    return player.gotHit()
                } else if (result === 1) {
                    return player.gotPowerup()
                } else if (result === 2) {
                    return player.addCoin()
                } 
        }, 1000); 
}
game(luigi)
