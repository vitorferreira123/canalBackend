
import * as db from '../repository/canalRepository.js' 

import { Router } from 'express';
const endpoints = Router()


// Endpoints para Canal
endpoints.post('/canal', async (req, res) => {
    try {
        const canalId = await db.inserirCanal(req.body);
        res.status(201).json({ id: canalId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.get('/canal', async (req, res) => {
    try {
        const canais = await db.consultarCanal();
        res.json(canais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.put('/canal/:id', async (req, res) => {
    try {
        const affectedRows = await db.alterarCanal(req.params.id, req.body);
        res.json({ affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.delete('/canal/:id', async (req, res) => {
    try {
        const affectedRows = await db.excluirCanal(req.params.id);
        res.json({ affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoints para Programa
endpoints.post('/programa', async (req, res) => {
    try {
        const programaId = await db.inserirPrograma(req.body);
        res.status(201).json({ id: programaId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.get('/programa', async (req, res) => {
    try {
        const programas = await db.consultarPrograma();
        res.json(programas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.put('/programa/:id', async (req, res) => {
    try {
        const affectedRows = await db.alterarPrograma(req.params.id, req.body);
        res.json({ affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.delete('/programa/:id', async (req, res) => {
    try {
        const affectedRows = await db.excluirPrograma(req.params.id);
        res.json({ affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoints para Usuario
endpoints.post('/usuario', async (req, res) => {
    try {
        const usuarioId = await db.inserirUsuario(req.body);
        res.status(201).json({ id: usuarioId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.get('/usuario', async (req, res) => {
    try {
        const usuarios = await db.consultarUsuario();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.put('/usuario/:id', async (req, res) => {
    try {
        const affectedRows = await db.alterarUsuario(req.params.id, req.body);
        res.json({ affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.delete('/usuario/:id', async (req, res) => {
    try {
        const affectedRows = await db.excluirUsuario(req.params.id);
        res.json({ affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoints para Programa Favorito
endpoints.post('/programa_favorito', async (req, res) => {
    try {
        const programaFavoritoId = await db.inserirPrograma_favorito(req.body);
        res.status(201).json({ id: programaFavoritoId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.get('/programa_favorito', async (req, res) => {
    try {
        const programasFavoritos = await db.consultarPrograma_favorito();
        res.json(programasFavoritos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.put('/programa_favorito/:id', async (req, res) => {
    try {
        const affectedRows = await db.alterarPrograma_favorito(req.params.id, req.body);
        res.json({ affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

endpoints.delete('/programa_favorito/:id', async (req, res) => {
    try {
        const affectedRows = await db.excluirPrograma_favorito(req.params.id);
        res.json({ affectedRows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default endpoints
