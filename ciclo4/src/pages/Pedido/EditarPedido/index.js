import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import { api } from "../../../config";

export const EditarPedido = (props) => {

    const [id] = useState(props.match.params.id);

    const [clienteid, setClienteId] = useState('');
    const [servicoid, setServicoId] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtPedido = async e => {
        e.preventDefault();
        console.log("editar")

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.put(api + "/editarpedido", { id, clienteid, servicoid, valor, data }, { headers })
            .then((response) => {
                console.log(response.data.error);
                console.log(response.data.message);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a API.'
                })
            })
    }

    useEffect(() => {
        const getPedido = async () => {
            await axios.get(api + "/pedido/" + id)
                .then((response) => {
                    setClienteId(response.data.pedido.ClienteId);
                    setServicoId(response.data.pedido.ServicoId);
                    setValor(response.data.pedido.valor);
                    setData(response.data.pedido.data);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                })
        }
        getPedido();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Editar pedido</h1>
                    </div>
                    <div className="mr-auto p-2">
                        <Link to="/visualizarpedido" className="btn btn-outline-primary btn-sm">Lista de pedidos</Link>
                        <Link to={"/pedido/" + id} className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                    </div>
                </div>

                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger"> {status.message}</Alert> : ""}
                {status.type === 'seccess' ? <Alert color="success"> {status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={edtPedido}>
                    <FormGroup className="p-2">
                        <Label>ID Clinete</Label>
                        <Input type="text" name="ClienteId" placeholder="Código do cliente (ID)" value={clienteid} onChange={e => setClienteId(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>ID Serviço</Label>
                        <Input type="text" name="ServicoId" placeholder="Código do serviço (ID)" value={servicoid} onChange={e => setServicoId(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Valor</Label>
                        <Input type="text" name="valor" placeholder="Valor do pedido" value={valor} onChange={e => setValor(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Data</Label>
                        <Input type="text" name="data" placeholder="Data do pedido" value={data} onChange={e => setData(e.target.value)} />
                    </FormGroup>
                    {status.formSave ?
                        <Button type="submit" outline color="warning" disabled>Salvando... <Spinner color="warning" /></Button> :
                        <Button type="submit" outline color="warning" className="m-1">Salvar</Button>}
                </Form>
            </Container>
        </div>
    )
}