import { useRef } from "react";

export default function CartCard(props){
  const {id,title,photo,description,price,units,color} = props;
  const unitsRef = useRef<HTMLInputElement>(null);

  const manageUnits = () =>{
    if(unitsRef.current) {
      const storedCart = localStorage.getItem("cart");
      let productsOnCart = storedCart ? JSON.parse(storedCart) : [];
      const productIndex  = productsOnCart.findIndex((each)=>each.id === id);
      
      if (productIndex !== -1) {
        productsOnCart[productIndex].units = Number(unitsRef.current.value);
        localStorage.setItem("cart", JSON.stringify(productsOnCart));
      }
    }
  };
  return(
    <>
      <article className="bg-[#f2f2f2] rounded-[5px] p-[30px] m-[10px] h-[220px] break-words whitespace-normal flex justify-between">
          <img className="w-[100px] h-[100px] rounded-[5px]" src={photo} alt="ipad" />
          <div className="flex flex-col justify-between gap:2px w-[340px] h-[100px]">
              <strong className="flex justify-between">{title}</strong><span className="whitespace-nowrap overflow-hidden text-ellipsis">{color}</span>
              <p className="whitespace-nowrap overflow-hidden text-ellipsis">{description}</p>
              <input 
                className="w-[70px] h-[40px] rounded-[10px] border border-custom-gray p-[5px]" 
                type="number" 
                name="quantity" 
                defaultValue={units}
                ref={unitsRef}
                onChange={manageUnits} 
                min="1" 
                id={id}
              />
          </div>
          <strong className="w-full text-right">AR$ ${price}</strong>
      </article>
    </> 
  )
}