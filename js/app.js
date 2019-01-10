'use strict'

// Informações sobre o inimigo
class Enemy {
    constructor(y){
    //imagem do inimigo
    this.sprite = 'images/enemy-bug.png';
    //ponto inicial
    this.x = 0;
    this.y = y;
    //Velocidade do inimigo
    this.speed = 50 + Math.floor(Math.random() * 110);
    
};

update(dt) {
    if(this.x <= 500){
        this.x += this.speed * dt;

    }else{
        this.x = - 2;
    }
    if(player.x >= this.x - 30 && player.x <= this.x + 30
        && player.y >= this.y - 30 && player.y <= this.y + 30){
            player.x = 210;
            player.y = 410;
        }
    };
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
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