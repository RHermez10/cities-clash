import { $Image, $Points, $Title } from "./styles";
import { $Overlay, $PopUp, $Icon } from "../../styles";
import { IoIosCloseCircle } from "react-icons/io";

function Result({ wPoint, clicked }) {
    return (
        <$Overlay>
            <$PopUp>
                <$Icon>
                    <IoIosCloseCircle onClick={() => clicked(false)} size={35} />
                </$Icon>
                <h3>You voted for</h3>
                <div>
                    <$Title> {wPoint.name} </$Title>
                    <$Image src={wPoint.imgName} alt="" />
                    <$Points>
                        <p> wins: {wPoint.wins} </p>
                        <p> defeats: {wPoint.defeats} </p>
                    </$Points>
                </div>
            </$PopUp>
        </$Overlay>
    );
}
export default Result;
