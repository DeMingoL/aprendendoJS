//generating an unique id for each point.
const idunico=(()=>{
    function* idgerador(){
        let id=Date.now();
        while(true){
            yield id++;}}
    const gerador=idgerador();
    return () => gerador.next().value;
})()

class arvore{
    filhos=new Map();//mapa de varias criancas eu acho
    //aparentemente os # sao pra denotar que
    //essa class feature eh privada...
    pai=null;
    id=idunico();
    nome;
    
    constructor(nome){//the constructor constructs THE TREE
        if(!nome || typeof nome !== 'string' || !nome.trim().length){
            //if name is not specified or if name is not a string or
            //if the string is empty
            throw new Error('!!!!!!!!!!!');}
            //por que precisa ser NEW error?
        this.nome = nome;}
    
    get nome(){return this.nome;}
    get id(){return this.id;}
    get filhos(){return Array.from(this.filhos.values());}
    get pai(){return this.pai;}
    get numfilhos(){return this.filhos.size;}
    
    set nome(novonome){
        if(!novonome || typeof novonome !== 'string' || !novonome.trim().length){
            //if name is not specified or if name is not a string or
            //if the string is empty
            throw new Error('!!!!!!!!!!!');}
        this.nome = novonome;}
    set pai(novopai){
        if(novopai!==this.pai && (novopai==null || novopai instanceof arvore)){
            this.parent=novopai;}}
    
    novoponto(nome){
        const novopnt=new arvore(nome);//uma nova pessoa eh uma nova arvore genealogica
        //os THIS(ESSE) se referem ao "pai"
        this.filhos.set(novopnt.id, novopnt);//adiciona no mapa de criancas DESSE ponto
        novopnt.pai=this;//o pai do novo ponto eh ESSE ponto
        return novopnt;}

    removefilho(identificador){
        if(!this.checkfilho(identificador)){return;}//inusitado
        let pntaux=null;
        if(identificador instanceof arvore){
            pntaux=identificador;
            this.filhos.delete(identificador.id);}
            //nao eh que ele esta deletando so o ID do cara. ele deu um delete
            //na KEY(index) dessa pessoa. "delete a pessoa com index tal".
            //pq quando ele cria um novo ponto, o id eh definido como o index no mapa.
        else{for(let i of this.filhos){
            if(i.nome===identificador || i.id===identificador){
                this.filhos.delete(i.id);
                pntaux=i;
                break;}}}
        if(pntaux){pntaux.pai=null;}}//eh uma medida de SO PRA TER CERTEZA.

    //adicionar filho eh diferente de criar filho porque no criar filho eu nao consigo pegar um ponto
    //ja existente e atachar ele em outro como filho.
    addfilho(filho){
        if(!(filho instanceof arvore) || this.checkfilho(filho)){throw new Error('!!!!');}
        if(filho===this){throw new Error('!!!!');}
        if(this.pai!==null){
            if(this.pai===filho){throw new Error('!!!!');}
            this.pai=this.pai.pai}
        this.filhos.set(filho.id,filho);
        filho.pai=this;}
    
    checkfilho(identificador){//verifica se a pessoa tem filhos
        //pode receber um id, um nome ou uma pessoa em si
        //se receber um ponto todo como parametro:
        if(identificador instanceof arvore){return this.filhos.has(identificador.id);}
        //se ele receber um nome ou um id:
        for(let i of this.filhos){
            if(i.nome===identificador || this.id===identificador){return true;}}
        return false;}

    // buscacrianca(identificador){//nao funcionou!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //     for(let i of this.filhos){
    //         if(i.nome==identificador || this.id==identificador){return i;}}
    //     console.log('teste');}

    gettree=(pnt,espaco=0)=>{
        let linha = '\n';
        pnt.filhos.forEach((filho) => {
            linha += `${" ".repeat(espaco)}${filho.nome}${this.gettree(filho,espaco+2)}`;})
        return linha;}

    desenhaarvore(){
        console.log(`\n${this.nome}${this.gettree(this, 2)}`);}

    // traverse(cb){//tbm nao funcionou!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //     for(let i of this.filhos){
    //         if(cb(i)===true || i.traverse(cb)===true){//???????????
    //             return true;}}}
    
    buscafilho(nome){
        let alvo=null;
        this.traverse(pnt=>{if(pnt.nome===nome){
            alvo=pnt;
            return true;}})
        return alvo;}

}

const ancestral=new arvore('carlos');
const jose=ancestral.novoponto('jose');
const pedro=ancestral.novoponto('pedro');
const gustavo=jose.novoponto('gustavo');
const eduardo=pedro.novoponto('eduardo');
const matheus=eduardo.novoponto('matheus');
ancestral.desenhaarvore();

//console.log(ancestral.checkfilho(jose));
//console.log(ancestral.buscacrianca('jose'));

//jose.removefilho(gustavo);
//ancestral.desenhaarvore();

//ancestral.removefilho(jose);
//ancestral.desenhaarvore();//isso apaga TODA a linha de sucessao do jose.

console.log(gustavo.pai);//ele me retorna o objeto-arvore Jose.
let homoherectus='homoherectus';
ancestral.pai=homoherectus;
ancestral.desenhaarvore();
console.log(ancestral.pai);

homoherectus=new arvore('homoherectus');
ancestral.pai=homoherectus;
homoherectus.desenhaarvore();
console.log(ancestral.pai);

homoherectus.addfilho(ancestral);
homoherectus.desenhaarvore();
console.log(ancestral);

//console.log(homoherectus.buscafilho('gustavo'));