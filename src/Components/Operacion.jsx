import React, { useState } from "react";

function Operacion() {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultadosuma, setResultadoSuma] = useState(0);
    const [resultadoresta, setResultadoResta] = useState(0);
    const [resultadomulti, setResultadoMulti] = useState(0);
    const [resultadodivi, setResultadoDivi] = useState(0);

    const handleChangeValor1 = (event) => {
        setValor1(Number(event.target.value));
    };

    const handleChangeValor2 = (event) => {
        setValor2(Number(event.target.value));
    };

    const sumar = () => {
        setResultadoSuma(valor1 + valor2);
    };

    const resta = () => {
        setResultadoResta(valor1 - valor2);
    };

    const multiplicacion = () => {
        setResultadoMulti(valor1 * valor2);
    };

    const division = () => {
        setResultadoDivi(valor1 / valor2);
    };


    return (
        <div className="card1">
            <h1>Calculadora</h1>
            <label>
                Valor 1:
                <input  className="numero" type="number" value={valor1} onChange={handleChangeValor1}/>
            </label>
            <br />
            <label>
                Valor 2:
                <input  className="numero" type="number" value={valor2} onChange={handleChangeValor2} />
            </label>
            <br />
            <div className="botones-tab">
                <button onClick={sumar} className="botones">Sumar</button>
                <button onClick={resta} className="botones">Resta</button>
                <button onClick={multiplicacion} className="botones">Multiplicacion</button>
                <button onClick={division} className="botones">Division</button>
                <p>El resultado de la suma es: {resultadosuma}</p>
                <p>El resultado de la resta es: {resultadoresta}</p>
                <p>El resultado de la multiplicacion es: {resultadomulti}</p>
                <p>El resultado de la division es: {resultadodivi}</p>
            </div>
        </div>
    );
}

export default Operacion;
