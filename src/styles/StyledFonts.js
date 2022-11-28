
import { css } from 'styled-components'
import styled from 'styled-components'
import { BaseText } from './BaseText'

export const StyledFonts = styled(BaseText)`
color:${({color}) => color? `var(${color})`: "black"};

${({textStyle}) =>{

    if(textStyle === "Heading1"){

        return css`
            font-weight: bold;
            font-size: 1.625rem;
            font-family: 'Inter', sans-serif;
        `

    }else if(textStyle === "Heading2"){
        return css`
            font-weight: bold;
            font-size: 1.375rem;
            font-family: 'Inter', sans-serif;
        `

    }else if(textStyle === "Heading3"){
        return css`
            font-weight: bold;
            font-size: 1.125rem;
            font-family: 'Inter', sans-serif;
        `

    }else if(textStyle === "Heading4"){
        return css`
            font-weight: bold;
            font-size: 0.875rem;
            font-family: 'Inter', sans-serif;
        `

    }else if(textStyle === "Headline"){
        return css`
            font-weight: 400;
            font-size: 1rem;
            font-family: 'Inter', sans-serif;
        `

    }else  if(textStyle === "Body"){
        return css`
            font-weight: 400;
            font-size: 0.875rem;
            font-family: 'Inter', sans-serif;
        `

    }else  if(textStyle === "Body-600"){
        return css`
            font-weight: 600;
            font-size: 0.875rem;
            font-family: 'Inter', sans-serif;
        `

    }else  if(textStyle === "Caption"){
        return css`
            font-weight: 400;
            font-size: 0.75rem;
            font-family: 'Inter', sans-serif;
        `

    }



}}
` 