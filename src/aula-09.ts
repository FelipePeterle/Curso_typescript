interface Andar{
    passos: number | null;
}

const andar: Andar = {
    passos: null,
};

const FuncaoTest = (): undefined | number =>{
    if(andar.passos && andar.passos> 5){
        return 543;
    }
    return undefined;
};

const outroNome = FuncaoTest();

if(!andar.passos){
    console.log('É nulo');
}

if(outroNome){
    outroNome?.toFixed();
}



console.log("andar", andar);