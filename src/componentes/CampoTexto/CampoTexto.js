import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitar = (evento) => {
    props.aoAlterar(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label className="campo-texto label">{props.label}</label>
      <input
        placeholder={props.placeholder}
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
      ></input>
    </div>
  );
};
export default CampoTexto;
