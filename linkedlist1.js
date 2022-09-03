


function ponto(conteudo){
    this.conteudo=conteudo;
    this.next=null;}


class linkedlist{
    tamanho=0;
    head=null;

    addpnt(conteudo){
        let pnt=new ponto(conteudo);
        if(!this.head){this.head=pnt;}
        else{
            let pointer=this.head;
            while(pointer.next){pointer=pointer.next;}
            pointer.next=pnt;}
        this.size++;}
    mostra(){
        let pointer=this.head;
        let str=`${pointer.conteudo}`;
        while(pointer.next){
            pointer=pointer.next;
            str+=`,${pointer.conteudo}`;}
        console.log(str);}
    inspnt(index,conteudo){//insere pnt
        let pointer=this.head;
        let i=0;
        while(i<index){
            pointer=pointer.next;
            i++;}
        let pnt=new ponto(conteudo);
        pnt.next=pointer.next;
        pointer.next=pnt;
        this.size++;}
    rmvpnt(index){//remove pnt
        if(index==0){
            this.head=this.head.next;
            this.size--;
            return;}
        let pointer=this.head;
        let i=0;while(i<index-1){pointer=pointer.next;i++;}
        pointer.next=pointer.next.next;
        this.size--;
    }

}
let list1=new linkedlist;
list1.addpnt(1);//0
list1.addpnt(2);//1
list1.addpnt(3);//2
list1.addpnt(4);//3...
list1.addpnt(5);
list1.mostra();

//console.log(list1.head);
console.log('\n');
list1.inspnt(0,9);
list1.mostra();

console.log('\n');

list1.rmvpnt(1);
list1.mostra();