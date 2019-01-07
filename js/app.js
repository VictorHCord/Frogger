"use strict";
//Variavel global

// Enemies our player must avoid
class Enemy {
    constructor(y){
            //Imagem do inimigo
        this.sprite = 'images/enemy-bug.png';

        //Posição incial do inimigo
        this.x = 0;
        this.y = y;
        //determinando a velocidade do inimigo
        this.speed = 50 + Math.floor(Math.random() * 120);

    }
    update (dt) {
        this.x += this.speed * dt;
        if(this.x > 500){
            this.x = -50;
            this.speed = 50 + Math.floor(Math.random()* 120)
        }
        
        //verificando a posição
        if(this.x >= player.x - 30 && this.x <= player.x + 30 && this.y >= player.y - 10 && this.y <= player.y + 1){
            player.x = 200;
            player.y = 400;
        }
    };
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
}

class Player {
    constructor(y){
        //Imagem do hogador
        this.sprite = 'images/char-boy.png';
    //Posição incial do jogador
    this.x = 210;
    this.y = 470;
    //determinando a velocidade
    this.speed = 50 + Math.floor(Math.random() *150 )

    };
    update(){
        if(this.y <= 50 ){
            //Localização do jogador
            this.x = 210;
            this.y = 470;
            alert({
                title: 'Parabens',
                text: 'Voce ganhou o jogo',
                type: 'success'
            });
        };

        Player.prototype.handleInput = function (keyPress) {
            // Definindo o eixo
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
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};



// Posicionaod os inimigos dentro do array
const allEnemies = [new Enemy(60), new Enemy(60), new Enemy(140), new Enemy(225), new Enemy(225)];

const player = new Player();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


