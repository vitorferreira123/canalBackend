import con from "./connection.js"

export async function inserirCanal(canal) {
    const comando = `
      INSERT INTO tb_canal (nm_canal, nr_canal, bt_aberto)
        values(?,?,?)   
    `
    let resposta = await con.query(comando, [canal.nome,canal.numero,canal.aberto])
    let info = resposta[0]

    return info.insertId
}

export async function consultarCanal() {
    const comando = `
        select id_canal id,
               nm_canal nome,
               nr_canal numero,
               bt_aberto  aberto
        from tb_canal
    `
    let resposta = await con.query(comando)
    let resgistro =  resposta[0]

    return resgistro 
}

export async function alterarCanal(id, canal) {
    const comando = `
        update tb_canal
         set nm_canal =  ?,
             nr_canal = ?,
             bt_aberto = ?
    `
    let resposta = await con.query(comando, [canal.nome,canal.numero,canal.aberto, id])
    let info = resposta[0]

    return info.affectedRows
}

export  async function excluirCanal(id) {
    const comando = `
        delete from tb_canal
        where id_canal = ?
    `
    let resposta = await con.query(comando, [id])
    let info =  resposta[0]

    return info.affectedRows
}

/*--------------------------------------------------------------------------------------------*/

export async function inserirPrograma(canal_programa) {
    const comando = `
      INSERT INTO tb_canal_programa (id_canal,nm_programa,ds_genero,hr_programa)
        values(?,?,?,?)   
    `
    let resposta = await con.query(comando, [canal_programa.id,canal_programa.nome,canal_programa.genero,canal_programa.hora])
    let info = resposta[0]

    return info.insertId
}

export async function consultarPrograma() {
    const comando = `
        select id_canal_programa id,
               id_canal id,
               nm_programa nome,
               ds_genero genero,
               hr_programa hora
        from tb_canal_programa
    `
    let resposta = await con.query(comando)
    let resgistro =  resposta[0]

    return resgistro 
}

export async function alterarPrograma(id, canal_programa) {
    const comando = `
        update tb_canal_programa
         set id_canal = ?,
             nm_programa =  ?,
             ds_genero = ?,
             hr_programa = ?
    `
    let resposta = await con.query(comando, [canal_programa.id,canal_programa.nome,canal_programa.genero,canal_programa.hora, id])
    let info = resposta[0]

    return info.affectedRows
}

export  async function excluirPrograma(id) {
    const comando = `
        delete from tb_canal_programa
        where id_canal_programa = ?
    `
    let resposta = await con.query(comando, [id])
    let info =  resposta[0]

    return info.affectedRows
}

/*--------------------------------------------------------------------------------------------*/

export async function inserirUsuario(usuario) {
    const comando = `
      INSERT INTO tb_usuario (nm_usuario)
        values(?)   
    `
    let resposta = await con.query(comando, [usuario.nome])
    let info = resposta[0]

    return info.insertId
}

export async function consultarUsuario() {
    const comando = `
        select id_usuario id,
               nm_usuario nome,
        from tb_usuario
    `
    let resposta = await con.query(comando)
    let resgistro =  resposta[0]

    return resgistro 
}

export async function alterarUsuario(id, usuario) {
    const comando = `
        update tb_usuario
         set nm_usuario =  ?
    `
    let resposta = await con.query(comando, [usuario.nome,id])
    let info = resposta[0]

    return info.affectedRows
}

export  async function excluirUsuario(id) {
    const comando = `
        delete from tb_usuario
        where id_usuario = ?
    `
    let resposta = await con.query(comando, [id])
    let info =  resposta[0]

    return info.affectedRows
}

/*--------------------------------------------------------------------------------------------*/

export async function inserirPrograma_favorito(programa_favorito) {
    const comando = `
      INSERT INTO tb_usuario (id_usuario,id_canal_programa,vl_avaliacao)
        values(?,?,?)   
    `
    let resposta = await con.query(comando, [programa_favorito.usuario,programa_favorito.programa,programa_favorito.avaliacao])
    let info = resposta[0]

    return info.insertId
}

export async function consultarPrograma_favorito() {
    const comando = `
        select id_programa_favorito,
               id_usuario,
               id_canal_programa,
               vl_avaliacao,
        from tb_programa_favorito
    `
    let resposta = await con.query(comando)
    let resgistro =  resposta[0]

    return resgistro 
}

export async function alterarPrograma_favorito(id, programa_favotito) {
    const comando = `
        update tb_programa_favorito
         set id_usuario =  ?,
             id_canal_programa = ?,
             vl_avaliacao = ?
    `
    let resposta = await con.query(comando, [programa_favotito.usuario,programa_favotito.programa,programa_favotito.avaliacao,id])
    let info = resposta[0]

    return info.affectedRows
}

export  async function excluirPrograma_favorito(id) {
    const comando = `
        delete from tb_programa_favorito
        where id_programa_favorito = ?
    `
    let resposta = await con.query(comando, [id])
    let info =  resposta[0]

    return info.affectedRows
}