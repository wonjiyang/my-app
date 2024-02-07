import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import styled from "styled-components"

const Sort2 = () => {
    const [isToggled, setIsToggled] = useState(false)

    return (
        <MenuList id="gnb" isToggled = {isToggled}>
            <button onClick={() => {setIsToggled(!isToggled)}}><FontAwesomeIcon icon={isToggled ? faXmark : faBars} /><span className="blind">전체메뉴 보기</span></button>
            <ul>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>Music</li>
                <li>고객지원</li>
            </ul>
        </MenuList>
    )
}

const MenuList = styled.div`
    ul {
        display: ${(props) => (props.isToggled ? 'block' : 'none')};
        max-width: 100px;
        padding: 20px;
        background-color: #f6f6f6;
        border: 1px solid #eee;
        border-radius: 10px;
    }
`

export default Sort2