
import { useState } from "react";
import { Aside } from "./Aside";
import { Header } from "./Header";
import { SectionProducts } from "./SectionProducts";
import { StyledMain } from "./styleMain";



export function Main(){

    const [car, setCar] = useState([])
    const [filtered, setFiltered] = useState('')

    console.log(filtered)

    return(
        <StyledMain>

            <Header filtered={filtered} setFiltered={setFiltered}/>
            <div className="sectionAndAsside">
                <SectionProducts car={car} setCar={setCar} filtered={filtered} setFiltered={setFiltered}/>
                <Aside car={car} setCar={setCar} />
            </div>

        </StyledMain>
    )
    
} 