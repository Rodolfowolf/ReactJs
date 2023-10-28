import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Carvalho");
  return (
    <div>
        <h1>Isso sera exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        <h1>If ternario</h1>
        {name === "Rodolfo" ? (
            <div>
                <p>O nome e Rodolfo</p>
            </div>
        ): (
            <div>
                <p>Nome nao encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("Rodolfo")}>Clique aqui!</button>
    </div>
  );
};

export default ConditionalRender;