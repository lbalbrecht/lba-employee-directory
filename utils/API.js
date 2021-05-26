import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';


export default {
    getRandomUser: function() {
        return axios.get('https://randomuser.me/api/?nat=us,gb');
    }
}