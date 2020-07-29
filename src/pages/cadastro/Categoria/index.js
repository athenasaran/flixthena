import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [values, setValues] = useState(valoresIniciais);
 
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,//chave de forma dinamica
    })
  }

  function handleChange(infosDoEvento) {
    //const { getAttribute, value } = infosDoEvento.target;
    //setValues(infosDoEvento.target.value);
   setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value)
   /*setValue(
     getAttribute('name'), 
     value
   );*/
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([
            ...categorias, //pegar todos os dados ja cadastrados,
            values,
          ]);
          setValues(valoresIniciais);
        }}
      >
       <FormField value={values.nome} onChange={handleChange} type="text" name="nome" label="Nome da Categoria: "/>

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField value={values.cor} onChange={handleChange} type="color" name="cor" label="Color: "/>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
