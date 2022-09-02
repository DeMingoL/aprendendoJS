//pra abrir o server tem que clicar com o botao direito no .html e clicar em open with live server
//programacao orientada ao objeto

//encapsulation----reduce complexity, increase reusability
//abstraction-----reduce complexity, isolate impact of changes
//inheritance------eliminate redundant code
//polymorphism-----refactor ugly switch/case statements

let employee={
    basesalary:30000,
    overtime:10,
    rate:20,
    getwage: function(){return this.basesalary+(this.overtime*this.rate);}
    //o basesalary DESSE OBJETO, o overtime DESSE OBJETO, o rate DESSE OBJETO...
};
console.log(employee.getwage());

console.log('hello my dude');

const circle1={
    radius:1,//isso eh uma property
    location:{x:1,y:1},//objeto dentro de objeto!
    draw: function(){console.log('draw1');}//uma funcao dentro dum objeto eh um METHOD
};
circle1.draw();//eu chamei o methodo draw, do objeto circle



//factories
//se um objeto tem um ou mais methods, ele tem um COMPORTAMENTO

//factory function
    //uma funcao que retorna um objeto
    function createcircle(radius){
        return {//estou retornando um objeto dentro de uma funcao!
            radius,//isso significa   radius:radius    o primeiro eh a propriedade e o segundo eh o parametro.
            draw: function(){console.log('draw2');}
        };
    }
    const circle2=createcircle(1);
    circle2.draw();//eu chamei o methodo draw, do objeto circle.

//constructor function
    //uma funcao que usa THIS e NEW pra criar um objeto
    function circleconstructor1(radius){
        //console.log('this',this);//teste
        this.radius = radius;//o parametro
        this.draw = function(){console.log('draw3');}
    }
    const circle3 = new circleconstructor1(10);
    //1 cria um objeto vazio
    //2 this aponta pra esse objeto
    //3 retorna o objeto

    //todo objeto tem uma propriedade CONSTRUCTOR
    //let x = {};//let x = new object{}
    //new String();//''  ``  ""
    //new Boolean();
    //new Number();

    //funcoes tambem sao objetos, com propriedades e metodos.

    const circleconstructor2 = new Function('radius', `
    this.radius = radius;
    this.draw = function(){console.log('draw3');}
    `);
    //sem o function de cima com F maiusculo, nao funciona...??
    const circle4 = new circleconstructor2(1);//isso eh um objeto

    circleconstructor1.call({},1);//===== const circle3 = new circleconstructor1(1);
    //circleconstructor1.apply({},[1,2,3,4,5]);//pra usar um array como argumento

//value types: number, string, boolean, symbol, undefined, null
//reference types: object, array, function
let x={value:10};
let y=x;
x.value=20;

let number=10;
function increase(number){number++;}
increase(number);
console.log(number);
//eu somei numero+1 mas nao guardei em lugar nenhum.

number={value:10};
function increase(number){number.value++;}
increase(number);
console.log(number);
//aqui ele guarda a incrementacao na propriedade do objeto numero.

//adicionar propriedades a objetos existentes
//propriedades que por acaso tambem sao objetos!
circle3.location1={x:1};
circle3['location2']={x:1};//faz a mesma coisa
    //serve pra fazer:
    const propertyname='location3';
    circle3[propertyname]={x:1};

//excluir propriedades de um objeto
delete circle3.location2;
delete circle3.location3;

//enumerationg properties
    for(let key in circle3){console.log(key);}//escreve no console o nome de todas as propriedades e metodos
    for(let key in circle3){console.log(key, circle3[key]);}//agora ele tambem mostra o contedudo de cada propriedade
    
    for(let key in circle3){
        if(typeof circle3[key]!='function'){console.log(key, circle3[key]);}
    }//agora ele mostra so o que nao eh funcao
    
    const keys=Object.keys(circle3);
    console.log(keys);

    if('radius' in circle3){console.log('has a radius');}

console.log('\n');
//abstraction-------hide details and show only essentials
//private properties and methods
    function circleconstructor5(radius){
        this.radius=radius;
        //this.defautloc={x:0,y:0}; i want it to die outside of the scope of this function, so...
        let defautloc={x:0,y:0};
        //this.comploc=function(){} i do the same for this...
        let comploc=function(factor){};
        this.draw=function(){
            comploc(0.1);
            //"defaultloc" use like this
            //"this.radius" use like this
            console.log('draw');
        };
    }//the result is that complo and default radius cannot be accessed outside the scope of the constructor function
    const circle5 = new circleconstructor5(10);

//getters and setters
    function circleconstructor6(radius){
        this.radius=radius;
        let defautloc={x:0,y:0};
        this.getdefaultloc=function(){return defautloc;};//a function so i can SEE defaultloc, but not edit it
        this.draw=function(){console.log('draw');};
    }
    const circle6 = new circleconstructor6(10);
    circle6.getdefaultloc();//mas existe outra forma de fazer isso...

    function circleconstructor7(radius){
        this.radius=radius;
        let defautloc={x:0,y:0};
        this.draw=function(){console.log('draw');};
        Object.defineProperty(this,'defaultloc',{
            get:function(){return defautloc;},
            set:function(value){
                if(!value.x || !value.y){throw new Error('invalid location');}//se ele nao entrar aqui, segue o codigo eu acho
                defautloc=value;
            }
        });
    }
    const circle7 = new circleconstructor7(10);
    const circle8 = new circleconstructor7(10);
    let value={x:1,y:1};
    circle8.defautloc=value;//"mudei" o defaultloc do circle8 hehehe

//exercise stopwatch
function stopwatch(){//acho que isso eh tecnicamente uma constructor function
    let starttime,endtime,running,duration=0;
    this.start=function(){
        if(running){throw new Error(' already started ');}//se running=1
        //caso contrario,
        running=true;
        starttime=new Date();//funcao pronta do JS eu acho
    };
    this.stop=function(){
        if(!running){throw new Error(' hasnt started ');}
        running=false;
        endtime=new Date();
        
        //como endtime e starttime sao agora objetos "Date", eles tem propriedades tipo "gettime"
        const seconds=(endtime.getTime() - starttime.getTime())/1000;//dividido por 1000 pra sair em segundos
        duration += seconds;//duration = duration + seconds...
    };
    this.reset=function(){
        starttime=null;
        endtime=null;
        running=false;
        duration=0;
    };
    Object.defineProperty(this,'duration',{
        get:function(){return duration;}
    });
}
const sw = new stopwatch();
//no console:
//"sw.start()"
//"sw.stop()"
//"sw.duration"
//"sw.reset()"