type Props = {
  resultado: number;
  setResultado: React.Dispatch<React.SetStateAction<number>>;
};

export const LeftArea = ({ resultado, setResultado }: Props) => {
  const voltarmenu = () => {
    setResultado(0);
  };
  if (resultado === 0) {
    return (
      <div className="flex-1">
        <div className="grid grid-cols-2 w-max h-max gap-8 ml-14">
          <div className="h-[210px] w-52 bg-gray-500 rounded-lg flex flex-col justify-center items-center">
            <div className="h-20 w-20 bg-slate-700 rounded-full flex justify-center items-center">
              <img src="down.png" alt="sinal de positivo" className="h-8 w-8" />
            </div>
            <h1 className="text-white text-2xl font-bold mt-4">Magreza</h1>
            <p className="text-white mt-2">IMC esta entre 0 e 18.5</p>
          </div>
          <div className="h-[210px] w-52 bg-green-500 rounded-lg flex flex-col justify-center items-center">
            <div className="h-20 w-20 bg-slate-700 rounded-full flex justify-center items-center">
              <img src="up.png" alt="sinal de positivo" className="h-8 w-8" />
            </div>
            <h1 className="text-white text-2xl font-bold mt-4">Normal</h1>
            <p className="text-white mt-2">IMC esta entre 18.5 e 24.9</p>
          </div>
          <div className="h-[210px] w-52 bg-yellow-500 rounded-lg flex flex-col justify-center items-center">
            <div className="h-20 w-20 bg-slate-700 rounded-full flex justify-center items-center">
              <img src="down.png" alt="sinal de positivo" className="h-8 w-8" />
            </div>
            <h1 className="text-white text-2xl font-bold mt-4">Sobrepeso</h1>
            <p className="text-white mt-2">IMC esta entre 24.9 e 30</p>
          </div>
          <div className="h-[210px] w-52 bg-red-700 rounded-lg flex flex-col justify-center items-center">
            <div className="h-20 w-20 bg-slate-700 rounded-full flex justify-center items-center">
              <img src="down.png" alt="sinal de positivo" className="h-8 w-8" />
            </div>
            <h1 className="text-white text-2xl font-bold mt-4">Obesidade</h1>
            <p className="text-white mt-2">IMC esta entre 30 e 99</p>
          </div>
        </div>
      </div>
    );
  } else if (resultado >= 0 && resultado <= 18.5) {
    return (
      <div className="flex-1 relative pl-9">
        <div className="h-full w-3/4 bg-gray-500 rounded-lg flex flex-col justify-center items-center">
          <div className="h-20 w-20 bg-slate-700 rounded-full flex justify-center items-center">
            <img src="down.png" alt="sinal de positivo" className="h-8 w-8" />
          </div>
          <h1 className="text-white text-2xl font-bold mt-4">Magreza</h1>
          <p className="text-white mt-6">Seu IMC é de {resultado.toFixed(2)}kg/m²</p>
        </div>
        <button
          onClick={voltarmenu}
          className="h-16 w-16 rounded-full bg-cyan-600 flex justify-center items-center absolute bottom-[45%] right-[88%]"
        >
          <img
            src="leftarrow.png"
            alt="seta para a esquerda"
            className="h-7 w-7"
          />
        </button>
      </div>
    );
  } else if (resultado >= 18.5 && resultado <= 24.9) {
    return (
      <div className="flex-1 relative pl-9">
        <div className="h-full w-3/4 bg-green-500 rounded-lg flex flex-col justify-center items-center">
          <div className="h-20 w-20 bg-slate-700 rounded-full flex justify-center items-center">
            <img src="up.png" alt="sinal de positivo" className="h-8 w-8" />
          </div>
          <h1 className="text-white text-2xl font-bold mt-4">Normal</h1>
          <p className="text-white mt-6">Seu IMC é de {resultado.toFixed(2)}kg/m²</p>
        </div>
        <button
          onClick={voltarmenu}
          className="h-16 w-16 rounded-full bg-cyan-600 flex justify-center items-center absolute bottom-[45%] right-[88%]"
        >
          <img
            src="leftarrow.png"
            alt="seta para a esquerda"
            className="h-7 w-7"
          />
        </button>
      </div>
    );
  } else if (resultado >= 24.9 && resultado <= 30) {
    return (
      <div className="flex-1 relative pl-9">
        <div className="h-full w-3/4 bg-yellow-500 rounded-lg flex flex-col justify-center items-center">
          <div className="h-20 w-20 bg-slate-700 rounded-full flex justify-center items-center">
            <img src="down.png" alt="sinal de positivo" className="h-8 w-8" />
          </div>
          <h1 className="text-white text-2xl font-bold mt-4">Sobrepeso</h1>
          <p className="text-white mt-6">Seu IMC é de {resultado.toFixed(2)}kg/m²</p>
        </div>
        <button
          onClick={voltarmenu}
          className="h-16 w-16 rounded-full bg-cyan-600 flex justify-center items-center absolute bottom-[45%] right-[88%]"
        >
          <img
            src="leftarrow.png"
            alt="seta para a esquerda"
            className="h-7 w-7"
          />
        </button>
      </div>
    );
  } else if (resultado >= 30 && resultado <= 99) {
    return (
      <div className="flex-1 relative pl-9">
        <div className="h-full w-3/4 bg-red-700 rounded-lg flex flex-col justify-center items-center">
          <div className="h-20 w-20 bg-slate-700 rounded-full flex justify-center items-center">
            <img src="down.png" alt="sinal de positivo" className="h-8 w-8" />
          </div>
          <h1 className="text-white text-2xl font-bold mt-4">Obesidade</h1>
          <p className="text-white mt-6">Seu IMC é de {resultado.toFixed(2)}kg/m²</p>
        </div>
        <button
          onClick={voltarmenu}
          className="h-16 w-16 rounded-full bg-cyan-600 flex justify-center items-center absolute bottom-[45%] right-[88%]"
        >
          <img
            src="leftarrow.png"
            alt="seta para a esquerda"
            className="h-7 w-7"
          />
        </button>
      </div>
    );
  }
};
