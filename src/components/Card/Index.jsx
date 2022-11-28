import { StyledFonts } from '../../styles/StyledFonts';
import {StyledCard} from './styleCard'

export function Card({ elem, car, setCar }) {

  
  function addToCar(elem){


    
    if(car.find((e) => e === elem) === undefined){

        setCar([...car, elem])
        
      }
   }
 
  
  return (
    <StyledCard>

      <img src={elem.img} alt="" />


      <div className='divContent'>

        <StyledFonts tag="h2" textStyle="Heading3" color="--gray-100">{elem.name}</StyledFonts>

        <StyledFonts  tag="p" textStyle="Caption" color="--gray-50">{elem.category}</StyledFonts>

        <StyledFonts tag="p" textStyle="Body" color="--Color-primary">
          {elem.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledFonts>

        <button onClick={()=> addToCar(elem)}><StyledFonts tag="p" textStyle="Body-600" color="--gray-0">Adicionar</StyledFonts></button>


      </div>

    </StyledCard>
  );
}
