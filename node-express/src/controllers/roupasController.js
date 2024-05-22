export const index = (req, res) => {
    res.send('Pagina de roupas');
};

export const insert = (req, res) => {
    console.log('Dados enviador por POST: ', req.body)
    res.send('Pagina de cadastro roupas');
};
export const camisetas =  (req, res) => {
    console.log(req.query)
    res.send('Pagina de camisetas');
};