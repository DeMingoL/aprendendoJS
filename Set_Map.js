//o SET é uma "estrutura de dados"... eu não sei o que é isso
let conjunto=new Set();

conjunto.add('teste');
conjunto.add('teste');//ele DESCONSIDERA elementos repetidos
conjunto.add('teste2');
console.log(conjunto.size);
//o SET simplemente não permite que existam valores repetidos nele

conjunto.delete('teste');
console.log(conjunto.size);

console.log(conjunto.has('teste'));

conjunto.add('teste');
let i=0;
for(i of conjunto.values()){console.log(i);}

console.log('\n');

conjunto.add({
    nome:'lucas',
    idade:23
});
i=0;
for(i of conjunto.values()){console.log(i);}

console.log('\n');

console.log(conjunto);

console.log('\n');

conjunto.add([1,1,1]);//mas eu posso adicionar dentro do set um vetor de
//coisas repetidas
i=0;
for(i of conjunto.values()){console.log(i);}

console.log('\n');

//existe um meio deu aderecar um elemento do set por numero?
//tipo: o elemento n do set ou conjunto[n]?
//tem como eu substituir um elemento do set?
//eu arranjei um jeito de fazer isso ali embaixo
//conjunto.delete(conjunto.);
//i=0;for(i of conjunto.values()){console.log(i);}

//converter um SET em um ARRAY
let vetor=Array.from(conjunto);
console.log(vetor);
//e nao destroi o set no processo:
console.log(conjunto);

vetor[0]=0;
console.log(vetor);

//converter um ARRAY em um SET
let conjunto2=new Set(vetor);
console.log(conjunto2);

//uma das mais praticas aplicacoes dos set eh usar pra sumir com valores
//duplicados. transforma um vetor num set e depois transforma num vetor de novo.
//um set pode ter valores, strings, objetos, vetores...
//pode ter outros sets?????????????????

//outro jeito de transformar um set num vetor:
let vetor2=[...conjunto];
console.log(vetor2);


console.log('\n');
console.log('\n');



vet=[1,2,3,4,5];
conj=new Set(vet);
console.log(vet);
console.log(conj);

//posso adicionar um set dentro de um set!!!
conj.add(new Set(vet));
console.log(conj);
//e eu posso SIM adicionar dois sets IGUAIS dentro de um set...!!!
conj.add(new Set(vet));
console.log(conj);

console.log(conj.size);

//NAO EXISTE INDEX pra acessar um elemento especifico de um set......

//vet.add(10);isso nao existe
vet[7]=10;
console.log(vet);


console.log('\n');
console.log('\n');

//MAP----------------------------------------------------------------------
//o OBJETO map

//A Map holds key-value pairs where the keys can be any datatype.
//'key'=index, um  ponteiro. que nao precisa ser um numero...
//pode ser uma string, ou ate um objeto...
let mapa=new Map([['nome','lucas'],['sobrenome','demingo']]);
console.log(mapa);

let obj={};
let a={};
let b={};

obj[a]='a';
console.log(obj);

obj[b]='b';
console.log(obj);//ele APAGOU o tal do a

    //eu so nao entendi qual eh o problema se ele poderia fazer simplesmente:
    obj['propriedadeA']={a:'a'};
    console.log(obj);
    //but anyway...

console.log('\n');
console.log(mapa);
mapa2=new Map([[{},'a'],[{},'b']]);
console.log(mapa2);

console.log('\n');

//set tem um metodo add...
//map tem um metodo set...
mapa2.set({},'c');
console.log(mapa2);

console.log('\n');

//deletando coisas dum map
let mapa3=new Map([['string',1]]);
console.log(mapa3);
mapa3.delete('string');//o argumento eh o index que eu quero deletar
console.log(mapa3);

console.log('\n');

mapa3=new Map([['teste',1]]);
console.log(mapa3);
console.log(mapa3.has('teste'));
console.log(mapa3.has('testexxxxxx'));

console.log('\n');

mapa3=new Map([[57,1]]);
console.log(mapa3);
console.log(mapa3.has(57));
console.log(mapa3.has(10000));

//---------------------------
//teste
obj={x:1};
conj=new Set([1,2,3,4,5,obj,obj]);//ele entende que os dois objetos sao duplicados
console.log(conj);
//mas ele nao reconheceria a duplicata se tem nome diferente.
console.log(conj.values());

vet=Array.from(conj);
console.log(vet);

//o INDEX dum elemento num set eh exatamente o valor do elemento...
//se o elemento for um objeto por exemplo, o index eh exatamente esse objeto.

//teoria de conjuntos usando set:

//uniao:
let vet2=[1,'lucas',false,{}];
let vet3=[1,true,'lucas',100];
let conj2=new Set([vet2,vet3]);
console.log(conj2);//fica so dois vetores no set...
//mas...
conj2=new Set([...vet2,...vet3]);
console.log(conj2);
//also,
let conj3=new Set([1,'lucas',false,{}]);
let conj4=new Set([1,true,'lucas',100]);
conj2=new Set([...vet2,...vet3]);
console.log(conj2);//da no mesmo no fim das contas...!

//intersecao:
conj2=[...conj3].filter(function(valor){return conj4.has(valor);});//um vetor
console.log(conj2);//apenas o que tem NOS 2 sets
//ou
conj2=new Set([...conj3].filter(function(valor){return conj4.has(valor);}));
console.log(conj2);

//diferenca:
//so os valores que tem em um set mas nao no outro
conj2=[...conj3].filter(function(valor){return !conj4.has(valor);});
//retorna apenas se o conj4 NAO tem o valor
console.log(conj2);

//weakset--------------------------------------------------------------
//eh um set onde quase tudo fica inmodificavel dentro a nao ser que voce saiba
//os index. eh uma parada pra SEGURANCA DE DADOS
let conj5=new WeakSet;
conj5.add({p1:132});
console.log(conj5);
//ele so tem os metodos add,has,delete