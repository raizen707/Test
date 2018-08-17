﻿import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import FetchDataConcurso from './components/FetchDataConcurso';
import FetchDataConcursoWindows from './components/FetchDataConcursoWindows';
export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
        <Route path='/fetchdataconcurso/:startDateIndex?' component={FetchDataConcurso} />
        <Route path='/FetchDataConcursoWindows/:startDateIndex?' component={FetchDataConcursoWindows} />

    </Layout>
);
