const funcaoCallback = (valor: number): void => {
    console.log("Deu bom " + valor)
}


const funcaoTeste2 = (
    valor1: number, 
    valor2: number, 
    callback: (n: number) => void): string =>{
    if (valor1 > valor2){
        callback(valor1);
    }
    return"";
};

funcaoTeste2(522, 32, funcaoCallback);
funcaoTeste2(530, 32, (x: number) =>{
    console.log("Outra função " + x)
});