//Isso é um comentário em J
// Number, String, Boolean, null e undefined, object
// Valores simbólicos = +infinity, -infinity e NaN 
// undefined é um tipo de dado para uma varável com valor não atribuído
// objeto = conjunto de chaves e valor
// array = são considerados objetos e servem como listas, poré com índice e não chave e valor

var meuPrimeiroNome = 3;
let testando = 2;
const ola = 4.7;
var nome = "Breno";
var pergunta1 = true;
var pergunta2 = false;
var casa = null;
var obj = {
    nome: "Matheus",
    idade: 30,
    profissão: "Dev",
    estaTrabalhando: true,
};

var arr = [5, "Matheus", true, {teste: 1, teste: "Fernando"}

];

var idade = 2;

var n1= 2

console.log(arr);
console.log(arr[3]);
arr[0] = 8

casa = "Freud";
console.log(teste);
console.log(testando);
console.log(ola);
console.log(typeof ola);
console.log("Hello Node.JS");
        alert("ATENÇÃO");
console.log("Este nome é:" + nome);
document.write('Ele disse: "Olá"');
console.log(nome);


if(idade >= 18){
    console.log("Você é maior de idade"); 
}else if(idade <= 7 && idade !== 1){
    console.log("Você é uma criança");
}else{
    console.log("Você é menor de idade");
}  

var n1= 2
if(n1 !== "2"){
    console.log("O número é: 2");
}

if(idade === 18 || idade > 18){
    console.log("Você é maior de idade"); 
}

var nome2 = "Matheus"
if(!(nome2 === "João")){
    console.log("Ok"); 
}

var x = 1

while(x < 6){
console.log("repetindo" + x)
x++;

}

var p = 0
var palavra = "Matheus"

while(p < 8){
console.log(palavra[p]);
p++;
// p += 1;
// p -= 1    seria tipo x = x -y, tem também com *= e /=
}

for(var i = 1; i < 7; i++){
    console.log("repetindo for" + i);
    if(i == 5){
        break // tem o continue também que pula
    }
}


for(var z = 1; z < 7; z++){
    if(z == 2 || z == 3){
        console.log("continue");
        continue;
    }
        console.log("repetindo for" + z);
    }

    function lala(){
        console.log("Hello!");
    }
lala();

var arr4 = [1,2,3,4];
for(var j = 0; j < arr4.length; j++){
    console.log(arr4[j]);
}

// console.log(arr4.length);

function laco(sobrenome){
    console.log("O seu sobrenome é:" + sobrenome);
}

laco("Fernandes");

function soma(a,b){
    var soma = a + b
    return soma; // ou return a + b ao invez de declarar a variável
}
var soma3 = soma(4,4);
console.log(soma3); // ou console.log(soma(4, 5)); ao invez de declarar a variável


if(true){

    let x = 4;

    console.log(x)
}
//methodsnumber
//parsefloat
console.log(parseFloat("12.99"));
console.log(Number.parseFloat("2.34"));
//parseint
console.log(parseInt("16.344"));
//isnan
console.log(isNaN("teste"));
console.log(isNaN(12));
console.log(isNaN("12"));
//max and min value
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//methodsstrings

var nome = "Sophia"
//lenght
console.log(nome.length);
//quantos caracteres

//indexoff

var frase = "o rato roeu a roupa do rei de roma";

console.log(frase.indexOf("roeu"));

//console.log(nome.indexOf("ph"));

//slice

//var Sophia = frase.slice(2, 4);

//console.log(Sophia);

var roeu = frase.slice(7, 11);

console.log(roeu);


//replace

var novafras = frase.replace("roeu", "testou");
console.log(novafras);


// toLowerCase and toUppercase
var frase1 = "Eu Gosto De Jogos";

console.log(frase1.toLowerCase());

var frasealta = frase1.toUpperCase();

console.log(frasealta);

console.log(frasealta.toLowerCase());

//trim

var nome5 = "     Lucas";

var nometrim = nome5.trim()

console.log(nome5);

console.log(nometrim);

//split

var console.log(frase.split(""));

var tags = "PHP, JS, GO, Python";
console.log(tags.split(", "));

// lastindexof

let frase = "o rato roeu a roupa do rei de roma roeu";


console.log(frase.lastIndexOf("roeu"));

//methodsarray

//lenght

//push

var arr5 = ["breno", "lucas", "Jeff"]
arr.push(3);
arr.push("qualquer");
//adciona no fim

console.log(arr5)

//pop

arr5.pop();
//remove no fim

//unshift
arr5.unshift("Fernando");
console.log(arr5);
//adciona no começo

//shift
arr5.shift();
//remove no começo

//lenght

console.log(arr5[arr5.length -1])
//acessar o último elemento do array

// isarray

console.log(Array.isArray(arr5));


//splice

arr5.splice(2,1);

console.log(arr5)

//indexof

console.log(arr5.indexOf(5))

//join 

console.log(arr5.join(" ,"));

//reverse

console.log(arr5.reverse());

let pessoa = {
    nome: "Carlos",
    idade: 28,
    falar: function(){
        console.log("olá, tudo bem?");
    },
    soma: function(a, b){
        return a + b;
    }
};

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(2, 2);
console.log(soma);