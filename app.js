var cartaCollor = {
    nome: "Fernando Collor",
    imagem: "http://www.e-farsas.com/wp-content/uploads/collor_slogan.jpg",
    atributos: {
        carisma: 60,
        experiência: 75,
        radicalismo: 50,
        reputação: 20,
        votação: 100
    }
}

var cartaLula = {
    nome: "Luís I. Lula da Silva",
    imagem: "https://www.ocafezinho.com/wp-content/uploads/2018/04/lula-da-silva-1989.jpg",
    atributos: {
        carisma: 90,
        experiência: 50,
        radicalismo: 85,
        reputação: 40,
        votação: 51
    }
}

var cartaBrizola = {
    nome: "Leonel Brizola",
    imagem: "https://live.staticflickr.com/5529/11037960865_2ef80f9af9_c.jpg",
    atributos: {
        carisma: 85,
        experiência: 90,
        radicalismo: 75,
        reputação: 90,
        votação: 49
    }
}

var cartaCovas = {
    nome: "Mário Covas",
    imagem: "https://efemeridesdoefemello.files.wordpress.com/2014/09/15set14b.jpg",
    atributos: {
        carisma: 65,
        experiência: 70,
        radicalismo: 65,
        reputação: 50,
        votação: 34
    }
}

var cartaMaluf = {
    nome: "Paulo Maluf",
    imagem: "http://1.bp.blogspot.com/-lKiqc1oYoHI/U7AEZnwbqGI/AAAAAAAACaE/ARE3MVqCgJg/s1600/Paulo+Maluf+1989.jpg",
    atributos: {
        carisma: 70,
        experiência: 80,
        radicalismo: 70,
        reputação: 10,
        votação: 26
    }
}

var cartaAfif = {
    nome: "Guilherme Afif",
    imagem: "http://4.bp.blogspot.com/-a5oZviE9jtc/U4uVw-Hf-PI/AAAAAAAACYM/Qzk-Bp2a4Do/s1600/Guilherme+Afif+1989.jpg",
    atributos: {
        carisma: 10,
        experiência: 55,
        radicalismo: 10,
        reputação: 60,
        votação: 14
    }
}

var cartaUlysses = {
    nome: "Ulysses Guimarães",
    imagem: "https://efemeridesdoefemello.files.wordpress.com/2014/09/15set14e.jpg",
    atributos: {
        carisma: 65,
        experiência: 65,
        radicalismo: 30,
        reputação: 80,
        votação: 14
    }
}

var cartaEneas = {
    nome: "Enéas Carneiro",
    imagem: "https://www.jws.com.br/wp-content/uploads/2012/10/en%C3%A9as.jpg",
    atributos: {
        carisma: 75,
        experiência: 0,
        radicalismo: 90,
        reputação: 90,
        votação: 2
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaCollor, cartaLula, cartaBrizola, cartaCovas, cartaMaluf, cartaAfif, cartaUlysses, cartaEneas]
//            0           1           2          3         4            5            6           7     
var pontosJogador = 0
var pontosMaquina = 0

  atualizaPlacar()
  atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html  
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador "+ pontosJogador + "/"+ pontosMaquina + " Maquina"
  
  divPlacar.innerHTML = html 
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
 
  exibeCartaJogador()  
 
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://i.pinimg.com/originals/9f/1a/10/9f1a105324f0d6e5bcbc17cd99b63989.gif" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>' 
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado")
    
    if (cartaJogador.atributos[atributoSelecionado] >       cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Você venceu!</p>' 
      pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu!</p>'
      pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
      pontosMaquina ++ 
      pontosJogador ++
    
  
 if (cartas.length == 0) {
   alert("Fim do Jogo!")
   if (pontosJogador > pontosMaquina){
     htmlResultado = '<p class="resultado-final">Você venceu!</p>'
   } else if (pontosJogador < pontosMaquina){
     htmlResultado = '<p class="resultado-final">Você perdeu! "</p>'
   } else { '<p class="resultado-final">Empate!</p>'
   } 
 } else {
     document.getElementById('btnProximaRodada').disabled = false
 }
  
  divResultado.innerHTML = htmlResultado
 document.getElementById('btnJogar').disabled = true

  atualizaPlacar()
  exibeCartaMaquina()
  atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://i.pinimg.com/originals/9f/1a/10/9f1a105324f0d6e5bcbc17cd99b63989.gif" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
           opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true 
  document.getElementById('btnProximaRodada').disabled = true 
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
  
}

function exibeAjuda() {
  alert("Para ganhar o jogo, o atributo da carta do jogador deve ser maior que o atributo da carta da máquina. Passo 1: O jogo inicia quando você clica no botão de Sortear Carta. Passo 2. Assim que a carta for exibida, você deve analisar os atributos do candidato e selecionar aquele que você acha que teria mais chances de ganhar da carta da máquina. Passo 3. Depois é só clicar em Jogar. Serão 4 rodadas. Divirta-se!")
}
