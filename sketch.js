let filmesPorIdade = {
  "crianças": [
    "Toy Story",
    "O Rei Leão",
    "Frozen",
    "Moana",
    "Zootopia"
  ],
  "adolescentes": [
    "Harry Potter e a Pedra Filosofal",
    "Jogos Vorazes",
    "Homem-Aranha: De Volta ao Lar",
    "A Culpa é das Estrelas",
    "Maze Runner: Correr ou Morrer"
  ],
  "adultos": [
    "O Poderoso Chefão",
    "Pulp Fiction",
    "Clube da Luta",
    "Forrest Gump",
    "A Origem"
  ]
};

let botao;
let inputIdade;
let filmeRecomendado = "";

function setup() {
  createCanvas(400, 300);
  textAlign(CENTER, CENTER);
  
  createP('Insira a sua idade:').position(150, 50);
  inputIdade = createInput().position(150, 90);
  
  botao = createButton('Recomendar Filme');
  botao.position(150, 130);
  botao.mousePressed(recomendarFilme);
}

function draw() {
  background(220);
  textSize(20);
  text('Recomendador de Filmes', width / 2, 20);
  textSize(24);
  text(filmeRecomendado, width / 2, height / 2 + 60);
}

function recomendarFilme() {
  let idade = int(inputIdade.value());
  if (isNaN(idade) || idade < 0) {
    filmeRecomendado = "Por favor, insira uma idade válida.";
    return;
  }
  
  let categoria;
  if (idade < 13) {
    categoria = "crianças";
  } else if (idade >= 13 && idade < 18) {
    categoria = "adolescentes";
  } else {
    categoria = "adultos";
  }
  
  let filmes = filmesPorIdade[categoria];
  let indice = floor(random(filmes.length));
  filmeRecomendado = filmes[indice];
}


