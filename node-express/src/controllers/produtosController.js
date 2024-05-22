export const index = ('/', (req, res) => {
    res.send(`Página de todos os Produtos`);
});

export const getProductById= ('/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Página do Produto ID: ${id}`);
});