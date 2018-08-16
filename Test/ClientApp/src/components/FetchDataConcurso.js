import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/Concursos';

class FetchDataConcurso extends Component {
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
                </tr>
            </thead>
            <tbody>
                {props.concurso.map(detalle =>
                    <tr key={detalle.dateFormatted}>
                        <td>{detalle.dateFormatted}</td>
                        <td>{detalle.nog}</td>
                        <td>{detalle.descripcion}</td>
                        <td>{detalle.monto}</td>
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
        <Link className='btn btn-default pull-left' to={`/FetchDataConcurso/${prevStartDateIndex}`}>Siguiente</Link>
        <Link className='btn btn-default pull-right' to={`/FetchDataConcurso/${nextStartDateIndex}`}>Anterior</Link>
        {props.isLoading ? <span>Loading...</span> : []}
    </p>;
}

export default connect(
    state => state.concurso,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchDataConcurso);
