import axios from 'axios';

 
const baseUrl = "http://localhost:8085/api/reportes";
class TecnicoService{
    getTecnico(){
       return  axios.get(baseUrl)
    }
}

export default new TecnicoService()
