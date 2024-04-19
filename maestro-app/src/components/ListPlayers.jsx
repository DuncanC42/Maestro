import {getPlayerOfRoomApi} from "./api/RoomApiService";
import {useEffect, useState} from "react";

export default function ListPlayers(props) {

    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        refreshPlayersOfRoom();
    }, [playerList]);

    function refreshPlayersOfRoom() {
        getPlayerOfRoomApi(props.roomCode)
            .then(response => {
                setPlayerList(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="container">
            <h3>List of Player</h3>
            <table>
                <thead>
                <tr>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    playerList.map(player => (
                        <tr key={player.pseudo}>
                            <td>{player.pseudo}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}