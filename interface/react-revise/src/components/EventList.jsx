function EventList(props) {
    return (<>
        <div className="w-1/2 flex flex-col items-center justify-start">
            <h3 className='text-2xl font-bold text-gray-700 self-start pt-10 pb-8'>Lista de Palestras</h3>
            <div className="w-full flex flex-col items-center justify-start gap-y-2">
                { props.palestras.map(item => (
                    <div key={item.id} className="w-full flex flex-col items-start justify-start py-2 px-3 gap-y-3 bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h4 className="font-bold gap-y-2">{item.titulo}</h4>
                        <p><strong>Data: </strong>{item.data}</p>
                        <p><strong>Horário: </strong>{item.horario}</p>
                        <p><strong>Local: </strong>{item.local}</p>
                    </div>
                ))}
            </div>
        </div>
    </>)
}

export default EventList