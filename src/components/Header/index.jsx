import { useState } from "react";
import { StyledFonts } from "../../styles/StyledFonts";
import { StyledHeader } from "./StyleHeader";

export function Header({filtered, setFiltered}){


    const [filter, setFilter]=useState('')

   function funcFilter(){
    setFiltered(filter)

    setFilter("")

   }

    return(
        <StyledHeader>
            <div className="headerContent">
                <div>
                    <StyledFonts tag="h1" textStyle="Heading1" color="--gray-100">Burguer <StyledFonts tag="span" textStyle="Body-600" color="--Color-secondary">Kenzie</StyledFonts></StyledFonts>
                </div>
            
                <div className="fakeInput" >
                    <input type="text" className="inputSheach" placeholder="Digitar Pesquisa" value={filter} onChange={(ev)=> setFilter(ev.target.value)} />
                    <button className="buttonSheach" onClick={()=> funcFilter()}><StyledFonts tag="span" textStyle="Body-600" color="--gray-0" >Pesquisar</StyledFonts></button>
                </div>
            </div>

        </StyledHeader>
    )
}