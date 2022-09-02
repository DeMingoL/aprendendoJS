class node {
    constructor(name){
        this.name=name;
        this.left=null;
        this.right=null;}
}

const a = new node('a');
const b = new node('b');
const c = new node('c');
const d = new node('d');
const e = new node('e');
const f = new node('f');

a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;

//depth first traversal: the traversal must go first deeper within the tree and then go to the next sibling.
let depthfirstvalues=(root)=>{//eu nao exatamente quale a dessa syntax de uma constante ser uma funcao...
    if(!root){return [];}
    let str=[];
    let stack=[root];
    while(stack.length>0){
        let pnt=stack.pop();
        str.push(pnt.name);
        if(pnt.right){stack.push(pnt.right);}
        if(pnt.left){stack.push(pnt.left);}}
    return str;
};
let str=depthfirstvalues(a);
console.log(str);
str=depthfirstvalues();//se eu nao passar nada, retorna um array vazio
console.log(str);

//teste funcionabilidade de vetores
let people = ['a','b','c','d','e','f'];
let otherpeople = ['g','h',...people,'i','j','k','l'];
console.log(otherpeople);//[ 'g', 'h', ------  'a', 'b', 'c', 'd', 'e', 'f', ------- 'i', 'j', 'k', 'l' ]

//usando RECURSIVIDADE
depthfirstvalues=(root)=>{
    if(!root){return [];}
    let strL=depthfirstvalues(root.left);
    let strR=depthfirstvalues(root.right);
    return [root.name,...strL,...strR];
};
str=depthfirstvalues(a);
console.log('recursive depth first traversal:',str);

//breadth first traversal: the traversal must go first to the next sibling and then go deeper within the tree.
let breadthfirstvalues=(root)=>{
    if(!root){return [];}
    let str=[];
    let queue=[root];
    while(queue.length>0){
        let pnt=queue.shift();
        str.push(pnt.name);
        if(pnt.left){queue.push(pnt.left);}
        if(pnt.right){queue.push(pnt.right);}}
    return str;
};
str=breadthfirstvalues(a);
console.log('breadth first traversal:',str);

//o shift() remove o primeiro elemento do array e retorna ele
//[a b c d e] => (a) [b c d e]
//e o push continua funcionando da mesma forma pq ele faz
//(a) [b c d e] => (a) [b c d e f]
//o unshift() adiciona um elemento no inicio do array
//(a) [b c d e] => [a b c d e]


//BUSCA usando breadth first traversal
let treesearch=(root,target)=>{
    if(!root){return false;}
    let queue=[root];
    while(queue.length>0){
        let pnt=queue.shift();
        if(pnt.name===target){return true;}
        if(pnt.left){queue.push(pnt.left);}
        if(pnt.right){queue.push(pnt.right);}}
    return false;
};
console.log('search for B using breadth first traversal:',treesearch(a,'b'));

//BUSCA usando depth first traversal e recursividade
treesearch=(root,target)=>{
    if(!root){return false;}
    if(root.name===target){return true;}
    return treesearch(root.left,target)||treesearch(root.right,target);
};
console.log('search for B using depth first traversal:',treesearch(a,'b'));

a.name=5;
b.name=11;
c.name=3;
d.name=4;
e.name=2;
f.name=1;

//somando a arvore toda usando recursividade e deapth first traversal
let treesum=(root)=>{
    if(!root){return 0;}
    return root.name+treesum(root.left)+treesum(root.right);
};
console.log('sum of tree using depth first traversal:',treesum(a));

//somando a arvore toda usando breadth first traversal
treesum=(root)=>{
    if(!root){return 0;}
    let sum=0;
    let queue=[root];
    while(queue.length>0){
        let pnt=queue.shift();
        sum+=pnt.name;
        if(pnt.left){queue.push(pnt.left);}
        if(pnt.right){queue.push(pnt.right);}}
    return sum;
};
console.log('sum of tree using breadth first traversal:',treesum(a));

//buscando o valor minimo da arvore usando recursividade e deapth first traversal
let treemin=(root)=>{
    if(!root){return 0;}
    let min=root.name;
    let minL=treemin(root.left);
    let minR=treemin(root.right);
    //return Math.min(min,minL,minR);
    if(minL && treemin(root.left)<min){min=minL;}
    if(minR && treemin(root.right)<min){min=minR;}
    return min;
};
console.log('min of tree using depth first traversal:',treemin(a));

//recursion is the best way for pathfinding
//max sum path from root to leaf
let treepath=(root)=>{
    if(!root){return 0;}
    let sum=root.name;
    let L=treepath(root.left);
    let R=treepath(root.right);
    if(L && L>R){sum+=L;}
    else if(R){sum+=R;}//por acaso, ele pega R se for igual tambem...
    return sum;
};
console.log('max sum path from root to leaf:',treepath(a));