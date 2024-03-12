import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../FormPago/FormPago.css';


function FormPago() {
    const [telefono, setTelefono] = useState('');
    const [nombre, setNombre] = useState('');
    const [enviado, setEnviado] = useState(false);
    const [checkboxMarcado, setCheckboxMarcado] = useState(false);

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleTelefonoChange = (e) => {
        setTelefono(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setCheckboxMarcado(e.target.checked);
    };
//valida si tiene datos ingresados
    const validarPago = (e) => {
        e.preventDefault();
        if (nombre.trim() !== '' && telefono.trim() !== '' && checkboxMarcado) {
            setEnviado(true);
        }
    };

    return (
        <div className="Formpago">
            <Form className="Form" onSubmit={validarPago}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={handleNombreChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={handleTelefonoChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Check me out"
                        checked={checkboxMarcado}
                        onChange={handleCheckboxChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
                {enviado && <p>¡Formulario de compra enviado Exitosamente!</p>}
                {enviado && <p className="nota">¡Serás contactado!</p>}
                {/* Mostrar el total aquí */}
            </Form>
        </div>
    );
}

export default FormPago;
