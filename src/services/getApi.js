import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token ={
set(token){
  axios.defaults.headers.common.Authorization=`Bearer ${token}`;
},
unset(){
  axios.defaults.headers.common.Authorization=``
}
}

export const registerUserApi = (credentials)=>{
  return axios.post('/users/signup',  credentials)
  .then(({ data }) => {
    token.set(data.token)
    return data;
  })
}

export const loginUserApi = (credentials)=>{
  return axios.post('/users/login',  credentials)
  .then(({ data }) => {
    token.set(data.token)
    return data;
  })
}


export const logoutUserApi = (credentials)=>{
  return axios.post('/users/logout',  credentials)
  .then(({ data }) => {
    token.unset()
    return data;
  })
}

export const getCurrentUserApi = ()=>{
  return axios.post('/users/current' )
  .then(({ data }) => {
    console.log('data', data)
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


