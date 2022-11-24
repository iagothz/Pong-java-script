//Variaveis da Bolinha
let BolinhaX = 300;
let BolinhaY = 200;
let BolinhaDiametro = 15;
let BolinhaRaio = BolinhaDiametro / 2;

//Variaveis Raquete Aliada
let RaqueteAliadoPosX = 5;
let RaqueteAliadoPosY = 150;
let RaqueteAliadoWidth = 8;
let RaqueteAliadoHeight = 75;

//Variaveis Raquete do Oponente
let RaqueteOponentePosX = 588;
let RaqueteOponentePosY = 150;
let RaqueteOponenteWidth = 8;
let RaqueteOponenteHeight = 75;
let RaqueteOponenteVelocidadeY;


//Movimentação
let BolinhaVelocidadeX = 5;
let BolinhaVelocidadeY = 5;

//Colisão
let hit = false;

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
  //Chamada de métodos bolinha
  mostrarBolinha();
  movimentacaoBolinha();
  verificarBorda();
  //Chamada de métodos Raquete Aliado
  mostrarRaqueteAliado();
  movimentacaoRaqueteAliado();
  //Chamada de métodos Raquete Oponente
  mostrarRaqueteOponente();
  //movimentacaoRaqueteOponente();
  //colisaoComRaquete();
  colisaoComRaqueteLib();
  //Placar
  placar();
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
    Placar1 += 1;
    print("Placar 1: " + Placar1);
  }
  if(BolinhaX - BolinhaRaio < 0){
    BolinhaVelocidadeX *= -1;
    Placar2 += 1;
    print ("Placar 2: " + Placar2);
  }
  if(BolinhaY + BolinhaRaio > height || BolinhaY - BolinhaRaio < 0){
    BolinhaVelocidadeY *= -1;
  }
}

//Raquete Aliada
function mostrarRaqueteAliado(){
  rect(RaqueteAliadoPosX, RaqueteAliadoPosY, RaqueteAliadoWidth, RaqueteAliadoHeight)
  
}

function movimentacaoRaqueteAliado(){
  if (keyIsDown(UP_ARROW) && RaqueteAliadoPosY > 10){
    RaqueteAliadoPosY -= 7;
  }
  if (keyIsDown(DOWN_ARROW) && RaqueteAliadoPosY < (390 - RaqueteAliadoHeight)){
    RaqueteAliadoPosY += 7;
  }
}
 

function colisaoComRaquete(){
  if(BolinhaX - BolinhaRaio < RaqueteAliadoPosX + RaqueteAliadoWidth && BolinhaY - BolinhaRaio < RaqueteAliadoHeight + RaqueteAliadoPosY && BolinhaY + BolinhaRaio > RaqueteAliadoPosY){
    BolinhaVelocidadeX *= -1;
  }
  if(BolinhaX - BolinhaRaio < RaqueteOponentePosX + RaqueteOponenteWidth && BolinhaY - BolinhaRaio < RaqueteOponenteHeight + RaqueteOponentePosY && BolinhaY + BolinhaRaio > RaqueteOponentePosY){
    BolinhaVelocidadeX *= -1;
  }
}

function colisaoComRaqueteLib(){
  colisao = collideRectCircle(RaqueteAliadoPosX, RaqueteAliadoPosY, RaqueteAliadoWidth, RaqueteAliadoHeight, BolinhaX, BolinhaY, BolinhaRaio);
  colisaoOponente = collideRectCircle(RaqueteOponentePosX, RaqueteOponentePosY, RaqueteOponenteWidth, RaqueteOponenteHeight, BolinhaX, BolinhaY, BolinhaRaio);
  
  if(colisao == true || colisaoOponente == true){
    BolinhaVelocidadeX *= -1;
  }
}

function mostrarRaqueteOponente(){
  rect(RaqueteOponentePosX, RaqueteOponentePosY, RaqueteOponenteWidth, RaqueteOponenteHeight)
}

function movimentacaoRaqueteOponente(){
  
  RaqueteOponenteVelocidadeY = BolinhaY - RaqueteOponentePosY - RaqueteOponenteWidth / 2 - 30;
  RaqueteOponentePosY += RaqueteOponenteVelocidadeY;
}
function placar(){
  fill(255)
  text(Placar1, 270, 25)
  text(Placar2, 320, 25)
  
  if (Placar1 >= 5){
    text("JOGADOR 1 GANHOU!!", 250, 200)
    BolinhaVelocidadeX = 0;
    BolinhaX = 584
    BolinhaVelocidadeY = 0;
  }
  if (Placar2 >= 5){
    text("JOGADOR 2 GANHOU!!", 250, 200)
    BolinhaVelocidadeX = 0;
    BolinhaX = 16
    BolinhaVelocidadeY = 0;
  }
}