import "./CampoSelecao.css";

const CampoSelecao = (props) => {
  return (
    <div className="campo-selecao">
      <label className="campo-selecao label">{props.label}</label>
      <select
        className="campo-selecao select"
        required={props.required}
        value={props.valor}
        onChange={(evento) => props.aoAlterar(evento.target.value)}
      >
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
        obrigatorio={true}
      </select>
    </div>
  );
};
export default CampoSelecao;
