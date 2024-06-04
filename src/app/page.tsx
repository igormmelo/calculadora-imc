"use client"
import { useState } from "react";
import { LeftArea } from "./components/leftarea";

const Page = () => {
  const [altura,setAltura] = useState(0)
  const [peso,setPeso] = useState(0)
  const [resultado,setResultado] = useState(0)

  const calculating = () =>{
    const result = peso/(altura*altura)
    setResultado(result)
  }
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="max-w-7xl m-auto w-full mt-16">
        <img src="/logoimc.png" alt="imagem logo imc" className="h-[70px]" />
        <div className="w-full h-full flex mt-6">
          <div className="flex-1 leading-6 pr-7">
            <strong>
              <h6 className="text-5xl mb-5 font-radioteste">Calcule o seu IMC</h6>
            </strong>
            <p className="font-semibold mb-5 font-radioteste text-2xl">IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
            <input type="text" className="w-full border-b-2 py-3 focus:outline-none"  placeholder="Digite sua altura ex: 1.80" onChange={(e)=>setAltura(parseFloat(e.target.value))
            }/>
            <input type="text" className="w-full border-b-2 py-3 focus:outline-none" placeholder="Digite seu peso ex: 80" onChange={(e)=>setPeso(parseFloat(e.target.value))
            }/>
            <button className="bg-cyan-600 rounded-xl w-full p-3 text-white mt-[120px]" onClick={calculating}>Calcular</button>
          </div>
          <LeftArea resultado={resultado} setResultado={setResultado}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
