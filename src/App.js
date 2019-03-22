import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_Key = "e030cfa869de1bc91eac73cd34a4a510";

class App extends React.Component {
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_Key}
        &units=metric`);
        const data = await api_call.json();
        console.log(data);
    }
    render() {
        return (
            <div>
                <Titles />
                <Form />
                <Weather />
            </div>
        );
    }
}

export default App;