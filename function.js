//Variaveis
let BolinhaX = 300;
let BolinhaY = 200;
let BolinhaDiametro = 15;
let BolinhaRaio = BolinhaDiametro / 2;

//Movimentação
let BolinhaVelocidadeX = 5;
let BolinhaVelocidadeY = 5;

//Placar
let Placar1 = 0;
let Placar2 = 0;

//Criação do fundo
function setup() {
  createCanvas(600, 400);
}

//Criação de desenhos
function draw() {
  background(0);
  mostrarBolinha();
  movimentacaoBolinha();
  verificarBorda();
  
}

function mostrarBolinha(){
  circle(BolinhaX,BolinhaY,BolinhaDiametro); //Bolinha
}

function movimentacaoBolinha(){
  BolinhaX += BolinhaVelocidadeX;
  BolinhaY += BolinhaVelocidadeY;
}

function verificarBorda(){
  //Bordas
  if(BolinhaX + BolinhaRaio > width){
    BolinhaVelocidadeX *= -1;
    Placar2 += 1;
    print("Placar 2: " + Placar2);
  }
  if(BolinhaX - BolinhaRaio < 0){
    BolinhaVelocidadeX *= -1;
    Placar1 += 1;
    print ("Placar 1: " + Placar1);
  }
  if(BolinhaY + BolinhaRaio > height || BolinhaY - BolinhaRaio < 0){
    BolinhaVelocidadeY *= -1;
  }
}
