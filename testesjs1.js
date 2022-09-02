//comeco da sessao de script
//iniciando VARIAVEIS
let name = 'lucas';//essas variaveis sao CASE SENSITIVE
console.log(name);

let firstname = 'lucas';
let lastname = 'de mingo';

let interestrate = 0.3;//mas em qualquer ponto do codigo depois eu posso fazer:
interestrate = 1;//e muda o valor da variavel!
console.log(interestrate);

//primitives:
//strings
//numbers
//boolean
//undefined
//null

let age = 30;//number
let isapproved = true;//boolean   true or false (reserved keywords)
let color = null;//NULL   pode ser usado pra limpar ua variavel ou deixar ela em branco ate ser estabelecida

let person = {
    name: 'lucas',
    age: 30//com isso aqui eu posso descartar a inicializacao de name e age ali em cima
};

console.log(person);

person.name = 'eduardo';
console.log(person);

console.log(person.name);

person['name'] = 'emanuelly';
console.log(person.name);
//o beneficio dessa notacao eh que esse 'name' pode ser uma variavel. ai eu seleciono em tempo real a priedade de 'erson' que eu quero acessar...

let selection = 'name';
person[selection] = 'carlos';
console.log(person.name);

//ARRAYS
let selectedcolors = ['red','blue'];//o index de posicao comeca em zero!
console.log(selectedcolors);
console.log(selectedcolors[0]);

//o tamanho dos arrays podem mudar dinamicamente
selectedcolors[2] = 'green';//igual matlab
console.log(selectedcolors);

//as variaveis dentro do vetor podem ser de tipos diferentes
selectedcolors[2] = 1;//igual matlab
console.log(selectedcolors);
//tecnicamente um vetor eh um OBJECT
console.log(selectedcolors.length);


//FUNCTIONS
function greet(firstname, lastname) {//entre parenteses fica o parametro
    //body of the function
    //display a msg on the console
    console.log('hello ' + firstname + ' ' + lastname);
}//nao precisa de ponto e virgula;

greet('matheus', 'soares');
greet('maria', 'lee');//se eu nao der um parametro ele aparece como undefined

function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);//ou...
console.log(square(2));

//strings
let message = ' first message ';//tipo = string
const anothermsg = new String('hi');//tipo = object
//mas eu posso fazer...
console.log(message);
console.log(message.length);
console.log(message[2]);//letra 3 da string
console.log(message.includes('first'));//pergunta se na string tem a palavra first
console.log(message.includes('caralho'));//pergunta se na string tem a palavra caralho
console.log(message.startsWith('f'));//pergunta se a string comeca com f. isso eh case sensitive
console.log(message.endsWith('.'));//pergunta se termina com ponto
console.log(message.indexOf('message'));//posicao do comeco da palavra message, 6
console.log(message.indexOf('febra'));//se a palavra nao ta na string ele da errado, -1
console.log(message.replace('first', 'second'));
console.log(message.toLocaleUpperCase());


console.log(message);
console.log(message.trim());

//escape notation
console.log('\n\'first\' message\n');
console.log(message.split(' '));//separa a string em um vetor de strings com base nos espacos

//template literals
message = //nao precisa escrever LET de novo
'\nfirst\n' + 
'message\n';
console.log(message);

message =
`this is my
'first' message
`;
console.log(message);

message = 
`
oi, ${firstname} ${3+57} ${message.length},

vai se fuder
`;
console.log(message);

//if...else
let hour=10;
if(hour>=6 && hour<12){
    console.log(`
    good
    morning
    `);
}
else if(hour>=12 && hour<18) {
    console.log(`
    good
    afternoon
    `);
}
else {
    console.log(`
    good
    evening
    `);
}

//for loop
//let i=0; e nao iniciar dentro do loop...
for (let i=0; i<=5; i++){
    if(i%2 != 0) console.log('impar ' + i);//resto da divisao de i/2
}
console.log('\n');
for (i=5; i>=1; i--){
    if(i%2 != 0) console.log('impar ' + i);//resto da divisao de i/2
}
//fim da sessao de script