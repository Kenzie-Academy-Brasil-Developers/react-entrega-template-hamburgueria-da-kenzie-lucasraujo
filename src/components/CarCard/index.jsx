import { StyledFonts } from "../../styles/StyledFonts";
import { StyledCarCard } from "./StyleCarCard";

export function CarCard({elemen, car, setCar}){

    function remove(elemen){

      setCar( car.filter((ele)=> ele !== elemen  ))
        

    }


    return(
        <StyledCarCard>


            <img src={elemen.img} alt={elemen.name} />

            <div className="divContentAndButton">
                <div className="divContent">
                    <StyledFonts tag="h4" textStyle="Heading4" color="--gray-100">{elemen.name}</StyledFonts>
                    <StyledFonts tag="h4" textStyle="Caption" color="--gray-50">{elemen.category}</StyledFonts>
                </div>

                <button onClick={(()=> remove(elemen))}>Remover</button> 
            </div>


        </StyledCarCard>
    )
}