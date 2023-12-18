import { useState } from "react";
import { $Overlay, $PopUp, $Form, $Button } from "./styles";
import { $Icon } from "../../styles";
import { IoIosCloseCircle } from "react-icons/io";
import FileBase64 from "react-file-base64";

function AddCity({ cities, setCities, close }) {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [imgName, setImgName] = useState([]);
    const [file, setFile] = useState("");

    //ADD NEW CITY TO THE DATABASE
    async function addCity() {
        const newCity = {
            name: city,
            country: country,
            description: description,
            imgName: file,
        };
        const response = await fetch(
            "https://city-clash-app.onrender.com/hamsters/add",
            {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: { "Content-Type": "application/json" },
            }
        );
        const data = await response.json();
        setCities([...cities, data]);
        window.location.reload();
    }

    function uploadFile(event) {
        setFile(event.target.files[0]);
    }

    return (
        <$Overlay>
            <$PopUp>
                <$Icon>
                    <IoIosCloseCircle onClick={() => close(false)} size={30} />
                </$Icon>
                <h1>Add a new city</h1>

                <$Form onSubmit={(e) => {
                    addCity();
                    e.preventDefault();
                }}
                >
                    <div>
                        <label>City</label>
                        <input type="text" onChange={(e) => setCity(e.target.value)} />
                    </div>

                    <div>
                        <label>Country</label>

                        <input type="text" onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <input
                        type="file"
                        id="upload-btn"
                        onChange={uploadFile}
                    />
                    <$Button type="submit" disabled={!(city, country, description)}>
                        Submit
                    </$Button>
                </$Form>
            </$PopUp>
        </$Overlay>
    );
}

export default AddCity;
