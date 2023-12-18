import { useRef, useState } from "react";
import { useEffect } from "react";
import Result from "../Result/Result";
import { GrGallery } from "react-icons/gr";
import { $Image, $Wrapper, $Content, $Link } from "./styles";

function Battle() {
    //SOME STATE TO SAVE OUR DATA.
    const [cities, setCities] = useState([]);
    const [winner, setWinner] = useState({});
    const [loser, setLoser] = useState({});
    const [clicked, setClicked] = useState(false);
    const hasEffectRun = useRef(false);

    //FETCING TO GET 2 RANDOM HAMSTERS FRON THE SERVER
    const getRandom = () => {
        fetch("https://city-clash-app.onrender.com/hamsters/random")
            .then((res) => res.json())
            .then((data) => {
                console.log('API Response:', data);
                if (data && data.length >= 2) {
                    setCities(data);
                } else {
                    console.error('Invalid data structure received from API.');
                }
            })
            .catch((error) => {
                console.error('Error fetching random cities:', error);
            });
    };


    //FETCING TO UPDATE THE HAMSTER THAT WINS THE BATTLE
    async function updateWinner(winner) {
        const upWinner = {
            wins: winner.wins + 1,
            defeats: winner.defeats,
            games: winner.games + 1,
        };

        const response = await fetch(
            "https://city-clash-app.onrender.com/hamsters/update/" +
            winner._id,
            {
                method: "PUT",
                body: JSON.stringify(upWinner),
                headers: { "Content-Type": "application/json" },
            }
        );

        setWinner({ ...winner }, (winner.wins = winner.wins + 1));
        const data = await response.text();
    }

    //FETCING TO UPDATE THE HAMSTER THAT LOOSES THE BATTLE
    async function updateLoser(loser) {
        const upLoser = {
            wins: loser.wins,
            defeats: loser.defeats + 1,
            games: loser.games + 1,
        };
        const response = await fetch(
            "https://city-clash-app.onrender.com/hamsters/update/" + loser._id,
            {
                method: "PUT",
                body: JSON.stringify(upLoser),
                headers: { "Content-Type": "application/json" },
            }
        );

        setLoser({ ...loser }, (loser.defeats = loser.defeats + 1));
        const data = await response.text();
    }

    //FUNCTION THAT CONTAINS UPDATE "LOSER" & "WINNER" FUNCTIONS THAT WILL BE CALLED IN BUTTON BELOW
    async function bestCity(x, y) {
        await updateWinner(x);
        await updateLoser(y);
        setWinner(x);
        setLoser(y);
        getRandom();
    }
    useEffect(() => {
        if (!hasEffectRun.current) {
            console.log('Effect is running');
            getRandom();
            hasEffectRun.current = true;
        }
    }, [hasEffectRun]);


    return (
        // MAPING TO PRINT OUT 2 RANDOM HAMSTER
        <$Wrapper>
            <$Link to="/gallery">
                <GrGallery size={35} />
                Gallery
            </$Link>
            <div>
                <h1>Vote for your favourite city!</h1>
            </div>

            {clicked ? <Result wPoint={winner} clicked={setClicked} /> : null}

            <$Content>
                {cities.length ? (
                    cities.map((city, i) => (
                        <div key={i}>
                            <h1> {city?.name} </h1>
                            <$Image
                                src={city?.imgName}
                                onClick={() => {
                                    setClicked(true);
                                    bestCity(city, cities?.filter((cit) => cit !== city)[0]);
                                }}
                                alt=""
                            />
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </$Content>
        </$Wrapper>
    );
}
export default Battle;
