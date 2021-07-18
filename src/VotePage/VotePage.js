import React, { useContext, useState, useEffect } from "react";
import Context from "../context";
import Loader from "../Loader";
import axios from "axios";


function VotePage(props) {
    const [loader, setLoader] = React.useState(true)

    useEffect(() => {
        
        var axios = require("axios");
        var data = JSON.stringify({form_key: props.formKey});
        var config = {
            method: "post",
            url: "http://127.0.0.1:8000/api/get_form",
            headers: {
            Authorization:
                "Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg==",
            "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(response.data)
                setLoader(false);
            })
            .catch(function (error) {
                setLoader(false);
                console.log(error);
            });
    }, []);

    if (loader){
        return (
            <div>
                <Loader/>
            </div>
        );
    }
    else{
        return (
            <div>Kek</div>
        )
    }
    
}

export default VotePage;