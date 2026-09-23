import { memo } from "react";

const Salchipao = memo(() => {

    console.log("Chamou o componente Salchipao");
    
    return (
        <div className='mt-10 w-1/2 bg-red-200 flex justify-start items-center flex-col pt-10 px-20 pb-7 rounded-lg'>
            <h2 className='text-3xl font-bold'>Salshipão do ADS</h2>
            <p className='pt-7 text-[#272727]'>Não perca o encerramento da nossa jornada com o famoso Salchipão no dia 31/10 às 12h00.</p>
        </div>
    );
});

export default Salchipao