import { Box, Image } from "@chakra-ui/react"
import switchOn from './assets/images/switch-on.svg'
import switchOff from './assets/images/switch-off.svg'
import swithImg from './assets/images/switch@2x.png'
import { useState } from "react"

const Switch = () => {
    const [isSwitch, setisSwitch] = useState(false)
    return (
        <>
            <Image onClick={() => {setisSwitch(!isSwitch)}} src={isSwitch ? switchOn : switchOff} alt="" w={200} />
            <Box>{isSwitch ? '켜짐' : '꺼짐'}</Box>
            <Box bg={`url($ {swithImg}) no-repeat 0 0`} w={370} h={200} />
        </>
    )
}

export default Switch