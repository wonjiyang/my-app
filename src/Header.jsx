import styled from "styled-components";
import Nav from "./Nav";

function Header() {
    return (
    <Hd>
        header
        <Nav />
    </Hd>
    );
}

  
const Hd = styled.div`
height: 100px;
background-color: #000000;
`;

export default Header;