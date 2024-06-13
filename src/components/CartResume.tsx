export default function CartResume() {
  return (
    <>
      <div className="bg-[#f2f2f2] rounded-[5px] p-[30px] m-[10px] h-[220px] break-words whitespace-normal flex justify-between w-[340px] flex-col">
        <div className="flex flex-grow flex-col justify-between">
          <h2 className="flex justify-between"><span>Resumen</span><span>del</span><span>pedido</span></h2>
          <div className="flex justify-between items-center">
            <h3>Total</h3>
            <strong className="">$800000</strong>
          </div>
          <small className="pb-[10px]">Incluye impuesto PAIS y percepción AFIP.</small>
        </div>
        <button className="w-full bg-[#ff3b3c] text-white font-bold border-none h-[40px] rounded-[10px] hover:bg-custom-red" id="buy" type="button">COMPRAR</button>
      </div>
    </>
  )
}