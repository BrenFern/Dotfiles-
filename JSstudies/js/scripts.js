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


