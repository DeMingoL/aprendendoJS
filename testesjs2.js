//getters and setters----------------------------------------------
let person = {
    firstname:'1lucas',
    lastname:'deMingo'
};//objetos sempre terminam em ;
console.log(person.firstname + ' ' + person.lastname);
console.log(`${person.firstname} ${person.lastname}`);
//mas existe uma opcoes mais elegantes:

person = {
    firstname:'2lucas',
    lastname:'deMingo',
    //fullname: function(){} existe uma syntax mais simples:
    fullname(){console.log(`${person.firstname} ${person.lastname}`);}
};
console.log(person.fullname());
//but we can do better:

//getters-----access properties
//setters-----change properties

person = {
    firstname:'3lucas',
    lastname:'deMingo',
    get fullname(){
        console.log(`${person.firstname} ${person.lastname}`);},
    set fullname(stringnome){
        const firstandlast = stringnome.split(' ');
        //cria um vetor de strings separadas pelo que eu denotei
        this.firstname = firstandlast[0];
        this.lastname = firstandlast[1];}
};

console.log(person.fullname);
//ai agora eu acesso o fullname como se fosse uma propriedade normal
//sem usar parenteses()...

person.fullname = '4lucas deMingo';
console.log(person.fullname);
console.log(person);

console.log('\n');


//escopo------------------------------------------------
function start(){const message1 = 'hi';}
//message1 so existe dentro do escopo da funcao
//console.log(message1);//daria um erro
//portanto, eu posso muito bem iniciar message1 de novo como constante:
function stop(){const message='bye';}

//mas se eu tiver uma variavel global:
const color='red';
function start2(){
    const color='blue';
    console.log(color);
}
start2();//ele printa BLUE pq o escopo LOCAL tem prioridade
//definir variaveis constantes globais eh ma pratica...

console.log('\n');


//clonando objetos----------------------------------------
const circulo1={
    raio:1,
    draw(){console.log('\"desenhou um circulo\"');}
};

const circulo2={};//objeto vazio
for(let key in circulo1){circulo2[key]=circulo1[key];}
console.log(circulo1);
console.log(circulo2);

//outra forma:
const circulo3=Object.assign({},circulo1);
console.log(circulo3);

//adicionando uma propriedade:
const circulo4=Object.assign({
    color:'yellow'
},circulo1);
console.log(circulo4);

//um jeito mais simples
const circulo5={...circulo1};
console.log(circulo5);

console.log('\n');


//entendendo o THIS-------------------------------------------
const video={
    title:'aula',
    play(){console.log(this);}
};
video.play();
//mesmo seeu adicionar posteriormente um metodo no objeto video:
video.stop=function(){console.log(this);};
video.stop();

function playvideo(){console.log(this);}
//isso nao vai dar certo porque o this nesse caso apontaria
//para um OBJETO GLOBAL tipo a janela do browser...

//se eu fizer uma constructor function:
function videoconstrutor(titulo){
    this.titulo=titulo;//ele ta automaticamente criando uma
    //propriedade titulo e preenchendo ela com o argumento
    console.log(this);
}
const video2 = new videoconstrutor('aula2');
//nao sei porque ele printa isso no console automaticamente...

const video3={
    titulo:'aula3',
    tags:['a','b','c'],
    play(){console.log(this);},
    showtags(){
        this.tags.forEach(//funcao pronta
            function(tag){console.log(this.titulo,tag);},
            this//outro parametro do forEach()
            //ele vai ajudar a marcar que, aqui dentro,
            //ainda estamos falando do objeto video3
        );
    }
};
video3.showtags();

console.log('\n');

//array filters--------------------------------------------------
const numbers=[1,-1,2,3];
const filtered=numbers.filter(function(value){
    //o METODO "filter" vai passar pelo vetor e executar
    //a funcao que eu escrever.
    return value>=0;//retorna SE o value>=0
});
console.log(filtered);

//outro jeito de escrver:
const filtered2=numbers.filter(n=> n>=0);
console.log(filtered2);

//uma coisa pratica seria filtrar um vetor de OBJETOS com base eu uma
//propriedade deles


console.log('\n');

//array maps-----------------------------------------------------
let filtered2items=filtered2.map(n => '<li>' + n + '</li>');
console.log(filtered2items);

let filtered2itemsjoined=filtered2items.join();
//transforma numa string unica
console.log(filtered2itemsjoined);
//o joins usa a virgula como separador padrao
//mas eu posso mudar pra mixturar tudo:
let joined=filtered2items.join('');
console.log(joined);

joined='<ul>'+filtered2items.join('')+'</ul>';
console.log(joined);
//eu nao faco ideia do que sao essas paradas entre <>

console.log('\n');

filtereditems=filtered2.map(n => {
    let obj={value:n};//cria um vetor de objetos chamado obj
    return obj;});
console.log(filtereditems);
    
    //outra syntax:
    filtereditems=filtered2.map(n => {
        return {value:n};});
    console.log(filtereditems);
        
        //outra syntax 2:
        filtereditems=filtered2.map(n => ({value:n}));
        console.log(filtereditems);

//observe que tanto o MAP quanto o FILTER, retornam um novo vetor,
//nao modificam o original.

//also, eu posso chamar os metodos em sequencia:
filtereditems=numbers.filter(n=> n>=0).map(n=> ({value:n}));
console.log(filtereditems);
//ou um embaixo do outro:
filtereditems=numbers
.filter(n=> n>=0)
.map(n=> ({value:n}));
console.log(filtereditems);
//ou
filtereditems=
numbers.filter(n=> n>=0)
.map(n=> ({value:n}));
console.log(filtereditems);

//ai:
filtereditems=numbers
.filter(n=> n>=0)
.map(n=> ({value:n}))
.filter(obj=> obj.value>1);
console.log(filtereditems);

filtereditems=numbers
.filter(n=> n>=0)
.map(n=> ({value:n}))
.filter(obj=> obj.value>1)
.map(obj=> obj.value);//destranformei de objeto pra numero
console.log(filtereditems);

console.log('\n');

//array reduce-------------------------------------------------------
console.log(numbers);

//somar todos os valores de um vetor e guardar numa variavel:
let sum=0;
let n=0;//inicializar a variavel dentro do cabecalho do FOR
//me deixa nervoso...
for(n of numbers){sum+=n;}
console.log(sum);//=5

//ou...
//REDUZIR todo o vetor a uma unica variavel!
sum=numbers.reduce((accumulator, currentvalue)=>{
    return accumulator+currentvalue;
},0);//esse zero eh o valor inicial pro parametro accumulator
//se eu metesse outro numero depois do zero, seria o valor inicial
//pro currentvalue?? nao! nao muda nada se eu faco isso.
//acho que a funcao reduce sabe pegar esse segundo parametro e
//colocar os valores dos vetores nelepra usar...
console.log(sum);

//se nao tiver o ) como parametro pro accumulator, o valor inicial
//dele sera vetor[0]. e nesse caso, o somatorio comeca na primeira
//casa do vetor, nao com um valor escolhido.
sum=numbers.reduce((accumulator, currentvalue)=>{
    return accumulator+currentvalue;
});
console.log(sum);

sum=numbers.reduce((accumulator, currentvalue)=>{
    return accumulator+currentvalue;
},10);
console.log(sum);

//also
sum=numbers.reduce(
    (accumulator, currentvalue)=>accumulator+currentvalue
);
console.log(sum);