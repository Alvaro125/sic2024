import Link from "../models/Link";

function gerarStringAleatoria(tamanho: number): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
  
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres[indiceAleatorio];
    }
  
    return resultado;
  }

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const link = new Link({
        content: gerarStringAleatoria(6),
        redirect: body.link
    })
    const savedLink = await link.save();
    return savedLink;
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
