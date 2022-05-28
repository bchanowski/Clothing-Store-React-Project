import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h2`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HHM</Logo>
        <Description>Some Info about the brand / Copyright</Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="fa92dd">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="8ed3fd">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>HomePage</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man's Fashion</ListItem>
          <ListItem>Woman's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Profile</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms of Use</ListItem>
          <ListItem>Jobs</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Bourges Blvd, Peterborough PE1 2AF
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +22 877 90 81
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          contact@hhm.com
        </ContactItem>
        <Payment src="https://www.savinga.com/img/paypal.png" />
      </Right>
    </Container>
  );
};

export default Footer;
