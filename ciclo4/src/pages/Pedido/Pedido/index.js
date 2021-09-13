
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const Pedido = (props) => {
    console.log(props.match.params.id);
    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);
    useEffect(() => {
        const getPedido = async () => {
            await axios.get(api + "/pedido/" + id)
                .then((response) => {
                    console.log(response.data.peddido);
                    setData(response.data.pedido);
                }).catch(() => {
                    console.log("Erro: Não foi possivel conectar a API.")
                })
        }
        getPedido();
    }, [id]);
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do pedido</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarpedido" className="btn btn-outline-primary btn-sm">Pedidos</Link>
                        <Link to={"/editarpedido/" + data.id} className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                    </div>
                </div>
                <div>
                    <dl className="row">
                        <dt className="col-sm-3">ID</dt>
                        <dd className="col-sm-3">{data.id}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">Cliente</dt>
                        <dd className="col-sm-3">{data.ClienteId}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">Valor</dt>
                        <dd className="col-sm-3">{data.valor}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">Data</dt>
                        <dd className="col-sm-3">{data.data}</dd>
                    </dl>
                </div>
            </Container>
        </div>
    )
}