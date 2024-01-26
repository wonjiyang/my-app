import styled from "styled-components";
import Nav from "./Nav";

function Header({ nav, logo }) {
    return (
    <Hd>
        <h1> {logo}</h1>
        <Nav nav={nav} />
    </Hd>
    );
}
  
const Hd = styled.div`
height: 100px;
background-color: #999999;
`;

export default Header;