import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostForm from "./HostForm";
import PlayerForm from "./PlayerForm";

export default function WelcomeComponent() {
    const [isPlayer, setIsPlayer] = useState(false);
    const [isHost, setIsHost] = useState(false);
    const navigate = useNavigate();

    function hostAction() {
        setIsHost(true);
        setIsPlayer(false);
        navigate("host/");
    }

    function playerAction() {
        setIsHost(false);
        setIsPlayer(true);
        navigate("player/");
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome MAESTRO !</h1>
            <button type="button" onClick={hostAction}>Host</button>
            <button type="button" onClick={playerAction}>Player</button>
            {(isHost && <HostForm />) || (isPlayer && <PlayerForm/>)}
        </div>
    );
}
