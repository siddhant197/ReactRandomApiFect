/* FORM.js - Calls api and fetches response which is passed on to API COMPONENT as props. Along with header display, contains button to call 3 different apis. */

import {React, useState, useEffect} from 'react';
import ApiComponent from './ApiComponent';
import './Form.css';

function Form() {
    //initialize
    const [apiType, setApiType] = useState('films');
    const [headings, setHeadings] = useState(["Title","Director"]);
    const [apiRetrieveData, setApiRetrieveData] = useState([]);

    //set api type based on film/location/vehicle
    const setShowTypes = e => {
        setApiType(e.target.id);
        e.target.id==='films' ? setHeadings(["Title","Director"]) : e.target.id==='locations' ? setHeadings(["Name","Terrain"]) : setHeadings(["Name","Vehicle_Class"]);
    }

    //call on change of api type and store response
    useEffect(() => {
        (async function(){
            const apiCall = await fetch(' https://ghibliapi.herokuapp.com/'+apiType+'?limit=10');
            const jsonData = await apiCall.json();
            setApiRetrieveData(jsonData);
        })();
    }, [apiType]);

    return (
        <div>
            <header>Fetch Api Data</header>
            <section>
            <ul className="headList">
                <li id="films" onClick={setShowTypes}>Fetch Films</li>
                <li id="locations" onClick={setShowTypes}>Fetch Locations</li>
                <li id="vehicles" onClick={setShowTypes}>Fetch Vehicles</li>
            </ul>
            <div className="dataBody">
                <ApiComponent headone={headings[0]} headtwo={headings[1]} responseData={apiRetrieveData} />
            </div>
            </section>
        </div>
    )
}

export default Form
