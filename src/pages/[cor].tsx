import { useRouter } from "next/router";
import Layout from "../components/Layout";
import gradientes from "../data/gradientes.json";

/**
 * Página dinâmica para exibir diferentes cores com base no parâmetro da rota.
 * @returns {JSX.Element} Elemento JSX renderizado.
 */
const CorPagina = (): JSX.Element => {
  const router = useRouter();
  const { cor } = router.query;

  // Verifica se a cor está no mapeamento
  if (!cor || typeof cor !== "string" || !gradientes[cor]) {
    // Renderiza uma página 404 se a cor não for encontrada
    return (
      <Layout
        title="Página Não Encontrada"
        description="Esta página não existe"
      >
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-5xl font-bold mb-4">
            404 - Página Não Encontrada
          </h1>
          <p className="text-xl text-gray-700">
            A cor especificada não existe.
          </p>
        </div>
      </Layout>
    );
  }

  const gradiente = gradientes[cor];

  return (
    <Layout title={`Página ${cor}`} description={`Esta é a página ${cor}`}>
      <div
        className={`flex flex-col items-center justify-center h-screen bg-gradient-to-r ${gradiente.from} ${gradiente.to} text-white`}
      >
        <h1 className="text-5xl font-bold capitalize">
          Página <span className="first-letter:uppercase">{cor}</span>
        </h1>
      </div>
    </Layout>
  );
};

export default CorPagina;
