import express from "express";
import mainRoutes from './routes/index.js';
import productRoutes from './routes/produtos.js';
import roupasRoutes from './routes/roupas.js'
import dotenv from 'dotenv'

dotenv.config();

const server = express();

server.use(mainRoutes);
server.use("/produtos", productRoutes);
server.use("/roupas", roupasRoutes);


server.use((req,res)=>{
    res.status(404).send('Endpoint não encontrada!')
});

server.listen(process.env.PORT);