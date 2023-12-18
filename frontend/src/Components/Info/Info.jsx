import { $Overlay, $PopUp, $Icon } from "../../styles"
import { $Image, $Title, $Country, $Text } from "./styles"
import { IoIosCloseCircle } from "react-icons/io";

//MORE INFORMATION ABOUT CITY

function Info({ info, clicked }) {
    return (
        <$Overlay >
            <$PopUp>
                <$Icon>
                    <IoIosCloseCircle onClick={() => clicked(false)} size={30} />
                </$Icon>
                <div>
                    <$Title>{info.name} </$Title>
                    <$Image src={info.imgName} alt="" />
                    <$Country>Country: {info.country} </$Country>
                    <$Text>{info.description} </$Text>
                </div>
            </$PopUp>
        </$Overlay>
    )
}

export default Info;