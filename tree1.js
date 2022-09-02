let tree = {
    name:'avo',
    child:[
        {name:'tio1'},
        {name:'pai',
        child:[
            {name:'irmao1'},
            {name:'irmao2'}]},
        {name:'tio2'},
        {name:'tio3',
        child:[
            {name:'primo'}]}]
}
//as funcoes devem necessariamente estarem definidas
//ANTES de serem chamadas??

//funcao de correr pela arvore e escrever os membros dela
function start(node){
    console.log('node:',node.name);
    if(node.child){//se o node (objeto, pessoa) tiver uma propriedade child:
        node.child.forEach(function(child){start(child);})}
}
start(tree);//passa o node que eu quiser. no caso, o maior
//que eh a propria arvore.

let vet=[1,2,3,4,5,6];
vet.forEach(function(){console.log('oi')});
//o for each eh um loop for por um vetor

console.log('\n\n');


// class ponto{
//     constructor(nome){//isso eh outro jeito de fazer uma constructor function
//     //basicamente
//         this.nome=nome;
//         this.esquerdo=null;
//         this.direito=null;}
// }

// class arvorebin{
//     constructor(){
//         this.raiz=null;}}


function ponto(dados){//constructor function
    this.dados=dados;
    this.filhos=[];
}

class arvore{
    constructor(){//eu poderia fazer isso aqui usando a mesma syntax do
    //ponto() ali em cima??
        this.raiz=null;}//a raiz seria o primeiro pai
        //quando eu adicionar a primeira pessoa ela assume a raiz
    
    adicionar(dados,pnt){//metodo
        //(dados da pessoa que eu quero add, ponto no qual eu estou add)
        //tambem conhecido como: (nome do filho,nome do pai)
        const novopnt=new ponto(dados);//crio um novo ponto com os dados que eu entrei
        const pai=pnt ? this.findbfs(pnt) : null;
        //se pnt for definido, retorna o findbfs.
        //se nao for definido, retorna null
            if(pai){pai.filhos.push(novopnt);}//<= se pai nao for null
            //add um filho a esse pai

            if(!this.raiz){this.raiz=novopnt;}//<= se pai for null
            //esse ponto vira a raiz da arvore
    }
    findbfs(dados){
        //const queue=[this.raiz];//por que vetor? pq ele vai adicionar coisas no vetor depois
        //a queue is a separate data structure...
        //nao servia pra nada essa porra...???
        
        let novopntaux=null;

        //nao entendi essa syntax.
        //acho que eh basicamente traversebfs recebe novopnt como param e faz {...}
        //MAS... como eh que essa porra aqui se comunica com ela mesma ali embaixo?????
        //sera que eh: ele chama a funcao que ta definida ali embaixo, e roda ela com
        //o parametro novopnt, mas so se novopnt.dados==dados. ai depois disso, se rodou,
        //ele ainda faz o novopntaux=novopnt??
        this.traversebfs(novopnt=>{
            if(novopnt.dados==dados){novopntaux=novopnt;}})
        
        return novopntaux;
    }
    //CB stands for callback...
    traversebfs(cb){
        const queue=[this.raiz];
        if(cb){while(queue.length){
            const novopnt=queue.shift();
            cb(novopnt)//if parametroCB == novopnt ???????
            //ai se SIM, ele faz isso aqui embaixo?????
            for(const filho of novopnt.filhos){queue.push(filho);}//um FOREACH nao resolve?
        }}
    }
}

let arv1=new arvore();

arv1.adicionar('pnt1');
arv1.adicionar('pnt2','pnt1');
arv1.adicionar('pnt3','pnt1');
arv1.adicionar('pnt4','pnt2');
arv1.adicionar('pnt5','pnt2');
arv1.adicionar('pnt6','pnt1');
arv1.adicionar('pnt7','pnt3');
arv1.adicionar('pnt8','pnt7');

arv1.traversebfs((novopnt)=>{console.log('ponto: ',novopnt);});