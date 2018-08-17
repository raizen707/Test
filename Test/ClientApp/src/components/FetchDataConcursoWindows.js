import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/ConcursosWindows';

class FetchDataConcursoWindows extends Component {
    componentWillMount() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestConcurso(startDateIndex);
    }

    componentWillReceiveProps(nextProps) {
        const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;
        this.props.requestConcurso(startDateIndex);
    }

    render() {
        return (
            <div>
                <h1>Bases de un concurso</h1>
                <p>Este componente obtiene las bases de un concurso, consumiendo un RESTFull con .net Framework</p>
                {renderForecastsTable(this.props)}
                {renderPagination(this.props)}
            </div>
        );
    }
}

function renderForecastsTable(props) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>NOG</th>
                    <th>Descripción</th>
                    <th>Monto</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {props.concursoWindows.map(detalle =>
                    <tr key={detalle.Id}>
                        <td>{detalle.Id}</td>
                        <td>{detalle.NOG}</td>
                        <td>{detalle.Descripcion}</td>
                        <td>{detalle.Monto}</td>
                        <td>{detalle.Cantidad}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

function renderPagination(props) {
    const prevStartDateIndex = (props.startDateIndex || 0) - 5;
    const nextStartDateIndex = (props.startDateIndex || 0) + 5;

    return <p className='clearfix text-center'>
        <Link className='btn btn-default pull-left' to={`/FetchDataConcursoWindows/${prevStartDateIndex}`}>Siguiente</Link>
        <Link className='btn btn-default pull-right' to={`/FetchDataConcursoWindows/${nextStartDateIndex}`}>Anterior</Link>
        {props.isLoading ? <span>Loading...</span> : []}
    </p>;
}

export default connect(
    state => state.concursoWindows,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchDataConcursoWindows);
