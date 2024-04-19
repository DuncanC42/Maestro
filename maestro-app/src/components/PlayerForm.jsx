import {Field, Form, Formik} from "formik";
import {useState} from "react";
import {joinRoomApi} from "./api/RoomApiService";
import {PlayerListComponent} from "./HostForm";
import ListPlayers from "./ListPlayers";

export default function PlayerForm() {
    const [pseudo, setPseudo] = useState('');
    const [roomCode, setRoomCode] = useState('');
    const [message, setMessage] = useState()
    const [submited, setSubmited] = useState(0)
    function handlePseudoModification(event) {
        setPseudo(event.target.value);
    }

    function handleRoomCodeModification(event) {
        setRoomCode(event.target.value);
    }

    function joinRoom() {
        joinRoomApi(pseudo.toString() ,roomCode.toString())
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => {
            setSubmited(1);
            console.log("cleanup")
        });
};

    function successfulResponse(response) {
        console.log(response);
        setMessage(response.data.message);
    }

    function errorResponse(error) {
        console.log(error);
    }

return (
    <div className="container">
        <h2>Welcome to the players</h2>
        <div>
            <Formik>
                <Form>
                    <fieldset>
                        <label htmlFor="">Pseudo</label>
                        <Field type="text" onChange={handlePseudoModification} value={pseudo}></Field>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="">Enter the room code</label>
                        <Field type="text" onChange={handleRoomCodeModification} value={roomCode}></Field>
                    </fieldset>
                    <div>
                        {/*FIXME: plus tard rendre le contenu non modifible si le contenu est soumis sauf si on clean les choses*/}
                        <button type="button" className="btn-light" onClick={joinRoom}>Join</button>
                    </div>
                </Form>
            </Formik>
        </div>
        {submited && <ListPlayers roomCode={roomCode}></ListPlayers>}
    </div>
)
}