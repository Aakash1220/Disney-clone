import React from 'react'
import styled from 'styled-components'
function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/Images/images/cta-logo-one.svg" />

                <SignUp>
                GET ALL HERE
            </SignUp>
            <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum similique deleniti
                    natus iusto, sit,
                    minima ratione porro ea non eaque, obcaecati reprehenderit assumenda sint deserunt voluptatum quasi.
                    
            </Description>
            <CTALogoTwo src="/Images/images/cta-logo-two.png" />
            </CTA>
            
        </Container>
    )
}

export default Login

const Container = styled.div`
min-height: calc(100vh - 70px);
display:flex;

justify-content:center;
align-items:top;
position:relative;

   
    &:before{
        background: url("/Images/images/login-background.jpg");
        background-size:cover;
        background-repeat:no-repeat;
        position:absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
        opacity:0.7;
    }
`

const CTA = styled.div`

    max-width:650px;
    padding:80px 40px;
    width:90%;
    display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`

const CTALogoOne = styled.img`

`
const SignUp = styled.div`
padding:17px 0;
background-color:#006e95;
font-weight:bold;
color:#f9f9f9;
text-align:center;
border-radius:4px;
width:100%;
font-size:18px;
cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom: 12px;


    &:hover{
        background:#0483ee
    }
`
const Description = styled.div`
font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
   line-height:1.5;
`
const CTALogoTwo = styled.img`
width:90%;

`