//switch...case:
function casos(num){
    switch(num){
        case 1:ans='um';break;//eu nao precisei inicializar a variavel ans
        case 2:ans='dois';break;
        case 3:ans='tres';break;
        default:ans='...';}
    return ans;
}
console.log('switch:  ',casos(2));

function check(){
    let a=1;
    let b=1;
    a==b ? console.log('check:  true') : console.log('check:  false');
    //return a==b; que faz a mesma coisa
}
// console.log('check:  ',check());
check();



//arrow functions:
//checksign=(num)=> {return num>0 ? 'positive' : num<0 ? 'negative' : 'zero';}
checksign=(num)=> num>0 ? 'positive' : num<0 ? 'negative' : 'zero';
console.log('checksign:  ',checksign(10));

let v1=[1.00001,2,3,4.8,-5];
squareints=(v1)=>v1
.filter((num)=>Number.isInteger(num)&&num>0)
.map((num)=>Math.pow(num,2));
//tanto o filter quanto o map usao um foreach interno
console.log('squareints:  ',squareints(v1));




//default parameters:
increment=(function(){
    return function increment(num=1,val=1){return num + val;}})();
console.log('increment:  ',increment(1));//da 2 pq o val=1
console.log('increment:  ',increment(1,2));
//da 3 pq eu estabeleci um valor pra val
console.log('increment:  ',increment());//da 2 pq o num=1 e o val=1


//rest operator:
sum=(function(){
    return function sum(x,y,z){
        const args=[x,y,z];
        return args.reduce(   (a,b)=>a+b      ,0);}})();
//o reduce tambe faz um for each. a e b sao pra voce dizer
//o que fazer com os valores dele. a eh o valor k e
//b eh o valor k+1.
//observe que a e b sao dois parametros e ele vai logo falando o que fazer
//com eles. ai o 0 eh outro parametro que vem depois.
console.log('rest operator sum:  ',sum(1,2,3));
    //mas envez de fazer isso, eu posso fazer:
    sum=(function(){
        return function sum(...porra){
            return porra.reduce(   (a,b)=>a+b      ,0);}})();
    console.log('rest operator sum:  ',sum(1,2,3,4,5,6));
    //esse aproach me deixa colocar quantos argumentos eu quiser na funcao.

//destructuring:
const voxel = {x:3.6,y:7.4,z:6.54};
let {x:a,y:b,z:c} = voxel;
console.log('destructuring:  ',a,b,c);

let obj={p1:1,p2:2};
let {p1:d}=obj;
console.log('destructuring:  ',d);

obj={
    p1:{p3:3,p4:4},
    p2:{p5:5,p6:6}};
let {p1:{p3:e},p2:{p5:f}}=obj;
console.log('destructuring:  ',e,f);

let [x,y,,,z]=[1,2,3,4,5,6,7,8];
console.log('destructuring arrays:  ',x,y,z);

a=6;
b=7;
[a,b]=[b,a];
console.log('trocando a ordem do vetor:  ',a,b);

[,,,...v]=[1,2,3,4,5,6,7,8];
console.log('destructuring arrays:  ',v);

obj={p1:1,p2:2,p3:3,p4:4,p5:5};
half=({p1,p2})=>{return (p1+p2)/2;}
console.log('usando so algumas propriedades de um objeto como param:',half(obj));

//import export
//em um arquivo: export capitalizeString=(string)=>string.toUpperCase();
//em outro arquivo: import {capitalizeString} from './nomedoarquivo.js';
//ai eu posso meter um 
//const cap=capitalizeString('ola');