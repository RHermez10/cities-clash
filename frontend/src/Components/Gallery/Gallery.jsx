import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { $Gallery, $Text, $Content, $IconContent } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { MdAirplaneTicket } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import Info from "../Info/Info";
import AddCity from "../AddCity/AddCity";

function Gallery() {
    const [cities, setCities] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [addCity, setAddCity] = useState(false);

    const [info, setInfo] = useState([]);

    function getCities() {
        fetch("https://city-clash-app.onrender.com/hamsters")
            .then((res) => res.json())
            .then((data) => setCities(data));
    }

    //DELETE CITY BY ID
    async function deleteCity(id) {
        const response = await fetch(
            "https://city-clash-app.onrender.com/hamsters/delete/" + id,
            {
                method: "DELETE",
            }
        );

        const data = await response.text();
        setCities((cities) =>
            cities.filter((cities) => cities._id !== id)
        );
    }

    //GET CITY BY ID
    async function getCityId(id) {
        const response = await fetch(
            "https://city-clash-app.onrender.com/hamsters/" + id._id,
            {
                method: "GET",
            }
        );
        const data = await response.text();
        setInfo(id);
    }

    useEffect(() => {
        getCities();
    }, []);
    return (
        <section>
            <$Content>
                <div>
                    <Link to="/">
                        <AiFillHome size={50} />
                    </Link>
                    <RiImageAddFill onClick={() => setAddCity(true)} size={50} />
                </div>
                <$Text>
                    Browse the gallery to find a diverse array of cities in the game.
                    Click on airplane icon for detailed information.
                </$Text>
            </$Content>
            {addCity ? (
                <AddCity
                    cities={cities}
                    setCities={setCities}
                    close={setAddCity}
                />
            ) : null}
            {clicked ? <Info info={info} clicked={setClicked} /> : null}

            <$Gallery>
                {cities.length
                    ? cities.map((city, i) => {
                        return (
                            <section key={i}>
                                <section>
                                    <img src={city.imgName} alt="img" />
                                    <$IconContent>
                                        <div>
                                            <h3> {city.name} </h3>
                                        </div>
                                        <div>
                                            <RiDeleteBack2Fill
                                                size={33}
                                                onClick={() => deleteCity(city._id)}
                                            />

                                            <MdAirplaneTicket
                                                size={35}
                                                onClick={() => {
                                                    getCityId(city);
                                                    setClicked(true);
                                                }}
                                            />
                                        </div>
                                    </$IconContent>
                                </section>
                            </section>
                        );
                    })
                    : <div>Loading...</div>}
            </$Gallery>
        </section>
    );
}
export default Gallery;
