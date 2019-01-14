'use strict'

// Enemies our player must avoid
class Enemy {
    constructor(y) {
        //Enemy image
        this.sprite = 'images/enemy-bug.png';
        //Enemy positioning
        this.x = 0;
        this.y = y;
        //Enemy speed
        this.speed = 50 + Math.floor(Math.random() * 120); // Random enemy speed
    }

    update(dt) {
        //Adjust speed across browsers
        this.x += this.speed * dt;

        // Prevent the enemies to "run away" 
        if (this.x > 500) {
            this.x = -50;
            this.speed = 50 + Math.floor(Math.random() * 150)
        }
        //Check Collision player x enemy
        
        if (player.x < this.x + 60 &&
            player.x + 37 > this.x &&
            player.y < this.y + 25 &&
            30 + player.y > this.y) {
            player.x = 200;
            player.y = 410;
        }
    };
    // Drawing enemy on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

class Player {
    constructor() {
        //Imagem do jogador
        this.sprite = 'images/char-boy.png';
        //Posição inicial do joogador
        this.x = 200;
        this.y = 410;
    };
    update() {
        if (this.y <= 50) {
            //resetando a localização do jogador
            this.x = 200;
            this.y = 410;
        };

        Player.prototype.handleInput = function (keyPress) {
            // Setting x and y axis boundaries
            if (keyPress == 'left' && this.x > 10) {
                this.x -= 102;
            };

            if (keyPress == 'up' && this.y > 50) {
                this.y -= 85;
            };

            if (keyPress == 'right' && this.x < 405) {
                this.x += 102;
            };

            if (keyPress == 'down' && this.y < 400) {
                this.y += 85;
            };
        };
    }
};
// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Array dos inimigos
const allEnemies = [new Enemy(60), new Enemy(60), new Enemy(140), new Enemy(225), new Enemy(225)];

const player = new Player();
document.addEventListener('keyup', function (e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
    };

    player.handleInput(allowedKeys[e.keyCode]);
});