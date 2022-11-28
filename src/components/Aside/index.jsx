import { StyledFonts } from "../../styles/StyledFonts";
import { CarCard } from "../CarCard";
import { ContentAsideDefault } from "../ContentAsideDefault";
import { StyledAside } from "./StyleAside";

export function Aside({car,setCar}) {

    function removeAll(){
        setCar([])
    }

  

  return (
    <StyledAside>
      <div>
        <div className="headerAside">
          <StyledFonts tag="h3" textStyle="Heading3" color="--gray-0">
            Carrinho de compras
          </StyledFonts>
        </div>

        {car.length > 0 ? (

            <div>
            
            {car.map((elemen)=><CarCard key={elemen.id} elemen={elemen} car={car} setCar={setCar}/>)}

                <div className="divTotal">
                <StyledFonts tag="p" textStyle="Headline" color="--gray-100">Total</StyledFonts>
                    <StyledFonts tag="p" textStyle="Body" color="--gray-50">
                        
                        {car.reduce(((a,b) => a + b.price ),0).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </StyledFonts>

                </div>

                <button className="buttonRemoveAll" onClick={()=> removeAll()}>Remover todos</button>
                
            </div>
            



        ) : (

            
            <ContentAsideDefault />
            

        )}

      </div>

    </StyledAside>
  );
}
