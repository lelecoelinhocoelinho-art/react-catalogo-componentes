
import Cabecalho from "./components/Cabecalho.jsx";
import CardCurso from "./components/CardCurso.jsx";
import Destaque from "./components/Destaque.jsx";
import Rodape from "./components/Rodape.jsx";
import "./App.css";

function App() {
  const cursos = [
    {
      nome: "Desenvolvimento de Sistemas",
      duracao: "1200 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 12
    },
    {
      nome: "Redes de Computadores",
      duracao: "1000 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 8
    },
    {
      nome: "Manutenção de Computadores",
      duracao: "200 horas",
      modalidade: "Presencial",
      nivel: "Qualificação",
      vagas: 0
    },
    {
      nome: "Programação Web",
      duracao: "160 horas",
      modalidade: "Online",
      nivel: "Aperfeiçoamento",
      vagas: 15
    },
    {
      nome: "Banco de Dados",
      duracao: "120 horas",
      modalidade: "Online",
      nivel: "Aperfeiçoamento",
      vagas: 6
    },
    {
      nome: "Desenvolvimento Mobile",
      duracao: "200 horas",
      modalidade: "Presencial",
      nivel: "Qualificação",
      vagas: 10
    }
  ];

  return (
    <div className="app">
      <Cabecalho />

      <main>
        <section className="cursos">
          <h2>Nossos cursos</h2>

          <div className="lista-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.nome}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
              />
            ))}
          </div>
        </section>

        <section className="secao-destaques">
          <h2>Por que estudar tecnologia?</h2>

          <div className="lista-destaques">
            <Destaque
              titulo="Aprenda fazendo"
              texto="Desenvolva projetos durante sua formação."
            />

            <Destaque
              titulo="Prepare-se para o futuro"
              texto="Aprenda habilidades importantes para o mercado."
            />

            <Destaque
              titulo="Construa seus projetos"
              texto="Transforme suas ideias em soluções tecnológicas."
            />
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

export default App;
