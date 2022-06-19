import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional
          Disney+ subscription. As of 19/06/22, the price of Disney+ and The
          Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 0px 40px;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  margin: 20px 0;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;

  &:hover {
    background-color: #0483ee;
  }
`;

const CTALogoTwo = styled.img`
  width: 90%;
  height: 100%;
  object-fit: contain;
`;

const Description = styled.p`
  color: rgb(249, 249, 249);
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
`;
