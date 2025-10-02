import { pool } from '../db.js';

export const getAllComentarios = async (req, res) => {
    const result = await pool.query('SELECT * FROM comentarios');

    return result.rows;
}

export const postCrearComentario = async (publicacion_id, comentario, usuario_id) => {
    const query = `INSERT INTO comentarios (publicacion_id, comentario, usuario_id) VALUES ($1, $2, $3) RETURNING *;`

    const result = await pool.query(query, [publicacion_id, comentario, usuario_id]);
    return result.rows[0];
}

export const putActualizarComentario = async (comentario) => {
    const query = `UPDATE comentarios
                    SET publicacion_id=$1,
                        comentario=$2,
                        usuario_id=$3
                    WHERE comentario_id=$4
                    RETURNING *;`;

    const result = await pool.query(query, [comentario.publicacion_id, comentario.comentario, comentario.usuario_id, comentario.comentario_id]);

    if (result.rowCount === 0) return result.status(404).json({ message:'Comentario no encontrado'});

    return result.rows[0];
} 

export const deleteEliminarComentario = async (id_comentario) => {
    const comentarioAEliminar = await pool.query(`SELECT * FROM comentarios WHERE comentario_id=$1`, [id_comentario]);

    if (comentarioAEliminar.rowCount === 0) throw new Error( 'Comentario no encontrado');

    const result = await pool.query(`DELETE FROM comentarios WHERE comentario_id=$1`, [id_comentario]);
    return { message: 'Comentario eliminado correctamente', comentario: comentarioAEliminar.rows[0] };
};