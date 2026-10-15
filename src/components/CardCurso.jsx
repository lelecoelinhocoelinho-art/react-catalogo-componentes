
function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  return (
    <article className="card-curso">
      <h3>{nome}</h3>
      <p><strong>Duração:</strong> {duracao}</p>
      <p><strong>Modalidade:</strong> {modalidade}</p>
      <p><strong>Nível:</strong> {nivel}</p>

      <p className={vagas > 0 ? "vagas" : "completo"}>
        {vagas > 0
          ? `Vagas disponíveis: ${vagas}`
          : "Turma completa"}
      </p>
    </article>
  );
}

export default CardCurso;
