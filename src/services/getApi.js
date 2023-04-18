import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUserApi = (credentials)=>{
  return axios.post('/users/signup',  credentials)
  .then(({ data }) => {
    return data;
  })
}

export const loginUserApi = (credentials)=>{
  return axios.post('/users/login',  credentials)
  .then(({ data }) => {

    return data;
  })
}


export const logoutUserApi = (credentials)=>{
  return axios.post('/users/logout',  credentials)
  .then(({ data }) => {

    return data;
  })
}

export const getCurrentUserApi =() =>{
  return axios.get('/users/current')
  .then(({ data }) => {
    return data;
  })
}

export const addContactApi = contact => {
  return axios.post('/contacts', contact).then(({ data }) => {
    return {data};
  });
};

export const getContactApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) =>
      Object.entries(data).map(([id, dat]) => ({
        id: dat.id,
        name: dat.name,
        number: dat.number,
      }))
    );
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};


