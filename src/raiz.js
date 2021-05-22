const raiz = (a) => {
    mitad = a/2;
    temporal = 0;
    while (mitad!=temporal){
        temporal = mitad;
        mitad = (a/temporal+temporal)/2;
    }

    return mitad;
}
module.exports = raiz;