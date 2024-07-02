import Fondo from "../Fondo"

export function FondoA (){
  return(
    <>
    <div style={{ position: "relative" }}>
      <Fondo />
      <div className="absolute bottom-0 w-full z-10">
        <img src="/wave.svg" />
        <div className="h-40 lg:h-10 bg-[#172B4D]"></div>
      </div>
    </div>
    </>
  )
}