import axios from 'axios';

const getEmployees = () => {
    return axios.get('https://randomuser.me/api/?results=30&nat=us');
}

export default getEmployees;
