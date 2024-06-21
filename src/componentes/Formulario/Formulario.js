import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoSelecao from "../CampoSelecao/CampoSelecao";
import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";

const Formulario = (props) => {
  //Como funciona o useState
  //Sempre que queremos que o componente reaja a alguma alteração no
  //valor de uma variável e se renderize novamente, precisamos indicar
  //isto utilizando o useState. Do contrário, o valor vai ser alterado
  //mas o DOM não será atualizado.
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h1 className="titulo">
          Preencha os dados para criar o card do colaborador.
        </h1>
        <div>
          <CampoTexto
            label="Nome"
            obrigatorio={true}
            placeholder="Digite seu nome"
            className="formulario form"
            valor={nome}
            aoAlterar={(valor) => setNome(valor)}
          />
          <CampoTexto
            label="Cargo"
            obrigatorio={true}
            placeholder="Digite seu cargo"
            className="formulario form"
            valor={cargo}
            aoAlterar={(valor) => setCargo(valor)}
          />
          <CampoTexto
            label="Imagem"
            placeholder="Digite o endereço da imagem"
            className="formulario form"
            valor={imagem}
            aoAlterar={(valor) => setImagem(valor)}
          />
          <CampoSelecao
            label="Time"
            obrigatorio={true}
            itens={props.times}
            className="formulario form"
            valor={time}
            aoAlterar={(valor) => setTime(valor)}
          />
          <Botao>Criar card</Botao>
        </div>
      </form>
    </section>
  );
};
export default Formulario;
