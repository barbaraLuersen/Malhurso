import Card from "../Card/Card";
import "./Time.css";

const Time = (props) => {
  return (
    
    //Renderização condicional, quando a lista de colaboradores for maior que zero ele renderiza o componente
    props.colaboradores.length > 0 && (
      
      <section className="time" style={{ backgroundColor: props.corFundo }}>
        <h2 className="time h2" style={{ borderColor: props.corDestaque }}>
          {props.nome}
        </h2>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Card
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDestaque={props.corDestaque}
            />
          ))}
        </div>
      </section>
    )
  );
};
export default Time;
