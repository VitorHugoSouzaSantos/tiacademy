import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import { api } from "../../../config";

export const CadastrarPedido = () => {

    const [pedido, setPedido] = useState({
        ClienteId: '',
        ServicoId: '',
        valor: '',
        data: ''
    });

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const valorInput = e => setPedido({
        ...pedido, [e.target.name]: e.target.value
    });

    const cadPedido = async e => {
        e.preventDefault();

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.post(api + "/pedidos", pedido, { headers })
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                        formSave: false,
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        formSave: false,
                        type: 'success',
                        message: response.data.message
                    });
                }
            }).catch(() => {
                setStatus({
                    formSave: false,
                    type: 'error',
                    message: 'Erro: Não foi possivel conectar a API.'
                })
            })
    }
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Cadastar pedido</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarpedido" className="btn btn-outline-primary btn-sm">Pedidos</Link>
                    </div>
                </div>
                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger"> {status.message}</Alert> : ""}
                {status.type === 'seccess' ? <Alert color="success"> {status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={cadPedido}>
                    <FormGroup className="p-2">
                        <Label>ID Clinete</Label>
                        <Input type="text" name="ClienteId" placeholder="Código do cliente (ID)" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>ID Serviço</Label>
                        <Input type="text" name="ServicoId" placeholder="Código do serviço (ID)" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Valor</Label>
                        <Input type="text" name="valor" placeholder="Valor do pedido" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Data</Label>
                        <Input type="text" name="data" placeholder="Data do pedido" onChange={valorInput} />
                    </FormGroup>
                    {status.formSave ?
                        <Button type="submit" outline color="success" disabled>Salvando... <Spinner color="warning" /></Button> :
                        <Button type="submit" outline color="success" className="m-1">Cadastar</Button>}
                    <Button type="reset" outline color="secondary">Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}