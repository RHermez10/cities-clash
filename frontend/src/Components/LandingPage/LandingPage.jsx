import { Link } from "react-router-dom";
import { $Wrapper, $Button } from "./styles"
import { GiCommercialAirplane } from "react-icons/gi";

function StartPage() {
    return (
        <$Wrapper>
            <h1>CITY CLASH</h1>
            <div>
                <GiCommercialAirplane size={100} color="#ff55e9" />
            </div>
            <h4>Pick your pixelated paradise as we embark on a journey through mesmerizing cityscapes. Vote to crown your favorite – will it be the skyline that glows or the one with historical echoes? Your adventure starts now, so let the City Clash begin!</h4>
            <Link to="/battle" >
                <$Button className="start-btn">START GAME</$Button>
            </Link>
        </$Wrapper>
    )
}

export default StartPage;