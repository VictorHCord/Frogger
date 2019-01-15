# Projeto Front-end UDACITY: FROGGER.

Este é um projeto do curso de front-end avançado do curso da udacity
fazendo a utilização da ferramenta ES6 aonde foi feito um desenvolvimento
de um jogo chamado FROGGER.

### Pre-Requisitos

- Conhecimento em HTML, CSS E ES6

- Foi utilizado no projeto ES6


### Anotações
Este projeto ainda está em desenvolvimento, essa versão disponibilizada no Github
é a 1 versão do projeto com possiveis alterações.
Este projeto foi construido em conjunto com o curso da **Udacity** `NanoDegree Front-end avançado`

###Desafio
O Jogador deve chegar ao rio sem ser atingido pelo inimigo, caso o player
seja atingido pelo inimigo o jogo reiniciará, caso consiga passar sem ser atingido o player irá ganhar.

##Jogar
Utilize as setas do teclado para movimentar o personagem. 

###Com fazer para jogar
Dentro do projeto tem 2 pastas importante o **HTML** que é a pagina inicial do jogo, ao abrir esse item conseguira jogar normalmente e o **APP.JS** que está linkado na pagina para fazer o jogo rodar normalmente

### Example

- Exemplo de como foi feito o codigo para algumas funcionalidades

```
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
```

### E-mail para contatos
[Victor Hugo Cordeiro] = *victor_hugo.cordeiro@hotmail.com*


Autor do projeto: Victor Hugo Cordeiro
---


