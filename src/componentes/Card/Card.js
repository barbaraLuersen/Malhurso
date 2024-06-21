import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="cabecalho" style={{ backgroundColor: props.corDestaque }}>
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="rodape">
        <h3>{props.nome}</h3>
        <h4>{props.cargo}</h4>
      </div>
    </div>
  );
};

export default Card;
