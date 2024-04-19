import { useState } from "react";
import { Field, Form, Formik } from "formik";
import {createNewRoomApi, getAllRooms} from "./api/RoomApiService";
import ListPlayers from "./ListPlayers";

function generateUniqueCode(length) {
    const characters = 'ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = length || 6;
    let code = '';
    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }
    return code;
}

export default function HostForm() {
    const [roomCode, setRoomCode] = useState('');
    const [roomName, setRoomName] = useState('');
    const [message, setMessage] = useState()

    function handleRoomName(event) {
        setRoomName(event.target.value);
    }


    const handleCreateRoom = () => {
        const code = generateUniqueCode();
         createNewRoomApi(code.toString(), roomName.toString(), 1)
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => {
                setRoomCode(code)
                console.log("cleanup")
            });
    };

    function successfulResponse(response){
        console.log(response);
        setMessage(response.data.message);
    }

    function errorResponse(error){
        console.log(error);
    }

    return (
        <div className="container">
            <h2>On est host ouuu !</h2>
            <div>
                <Formik>
                    <Form>
                        <fieldset className="form-group">
                            <label htmlFor="room-name" className="form-label">Nom de la room</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="room-name"
                                id="room-name"
                                value={roomName}
                                onChange={handleRoomName} // Ajout de l'événement onChange pour mettre à jour roomName
                            />                        </fieldset>
                        <fieldset className="form-group">
                            <label htmlFor="room-code" className="form-label">Code</label>
                            <input type="text" className="form-control" id="room-code" value={roomCode} readOnly />
                        </fieldset>
                        <div>
                            <button type="button" className="btn-close-white" onClick={handleCreateRoom}>CREATE ROOM</button>
                        </div>
                    </Form>
                </Formik>
            </div>
            {roomCode.length > 0 && <ListPlayers roomCode={roomCode}></ListPlayers>}
        </div>
    );
}
