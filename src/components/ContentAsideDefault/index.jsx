import { StyledFonts } from "../../styles/StyledFonts";
import { StyledContentAsideDefault } from "./StyleContentAsideDefault";

export function ContentAsideDefault() {
  return (
      <StyledContentAsideDefault>

        <StyledFonts tag="h3" textStyle="Heading3" color="--gray-100">
          Sua sacola está vazia
        </StyledFonts>

        <StyledFonts tag="p" textStyle="Body" color="--gray-50">
          Adicione itens
        </StyledFonts>

      </StyledContentAsideDefault>
    
  );
}
