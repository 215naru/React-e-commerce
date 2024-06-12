export default function CartCard(){
  return(
    <>
      <article className="bg-[#f2f2f2] rounded-[5px] p-[30px] m-[10px] h-[220px] break-words whitespace-normal flex justify-between">
          <img className="w-[100px] h-[100px] rounded-[5px]" src="https://i.postimg.cc/kX8PKZpq/ipad.jpg" alt="ipad" />
          <div className="flex flex-col justify-between gap:2px w-[340px] h-[100px]">
              <strong className="flex justify-between">iPad Pro 13</strong><span className="whitespace-nowrap overflow-hidden text-ellipsis">Silver</span>
              <p className="whitespace-nowrap overflow-hidden text-ellipsis">The iPad Pro 13 is a stunning piece of technology, boasting a large 12.9-inch Retina display with ProMotion technology. With 256GB of storage, this iPad provides ample space for all your files, apps, and multimedia content. The sleek and slim design, combined with the silver color, gives it a sophisticated look. Enjoy seamless connectivity with the WiFi feature. Capture your memorable moments with the high-quality camera and relive them on the impressive screen. Whether you're a professional artist, student, or just someone who appreciates cutting-edge technology, the iPad Pro 12.9 is a versatile device that meets all your needs.</p>
              <input className="w-[70px] h-[40px] rounded-[10px] border border-custom-gray p-[5px]" type="number" name="quantity" value="1" min="1" id="P7Q8R90" />
          </div>
          <strong className="w-full text-right">AR$ $800000</strong>
      </article>
    </>
  )
}