import { useState } from "react";
import { Field, Form, Formik } from "formik";

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

    const handleCreateRoom = () => {
        const code = generateUniqueCode();
        setRoomCode(code);
    };

    return (
        <div className="container">
            <h2>On est host ouuu !</h2>
            <div>
                <Formik>
                    <Form>
                        <fieldset className="form-group">
                            <label htmlFor="room-name" className="form-label">Nom de la room</label>
                            <Field type="text" className="form-control" name="room-name" id="room-name" />
                        </fieldset>
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
        </div>
    );
}
