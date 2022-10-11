import { axiosInstance} from '../helpers/axios-config';
//listar inventarios
const getInventarios = () => {
    return axiosInstance.get('inventario', {
        headers: {
            'Content-type' : 'application/json'

        }
    });
}
//Crear inventario
const crearInventarios = (data) => {
    return axiosInstance.post('inventario', data, {
        headers: {
            'Content-type' : 'application/json'
        }
    });
}
//Actualizar inventario
const editInventarios = (inventarioId, data) => {
    return axiosInstance.post(`inventario/${inventarioId}`, data, {
        headers: {
            'Content-type' : 'application/json'
        }
    });
}

export{
    getInventarios, crearInventarios, editInventarios
}