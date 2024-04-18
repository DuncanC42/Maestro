import {Field, Form, Formik} from "formik";

export default function PlayerForm(){
    return(
        <div className="container">
            <h2>Welcome to the players</h2>
            <div>
                <Formik>
                    <Form>
                        <fieldset>
                            <label htmlFor="">Pseudo</label>
                            <Field type="text"></Field>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="">Enter the room code</label>
                            <Field type="text"></Field>
                        </fieldset>
                        <div>
                            <button className="btn-light">Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}