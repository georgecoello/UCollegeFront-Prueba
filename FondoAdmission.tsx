import Fondo from "../Fondo"
import React, {ReactNode} from "react"



type Props = {children: ReactNode}
export const FondoA: React.FC <Props> = ({children}) =>{
  return(
    <>
    <div style={{ position: "relative" }}>
      <Fondo />
      <div className="absolute bottom-0 w-full z-10"> 
      {children}
        <img src="/wave.svg" />
        <div className="h-40 lg:h-10 bg-[#172B4D]">
        </div>
      </div>

    </div>
    </>
  )
}
