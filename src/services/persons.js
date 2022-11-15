import { fetchingData } from "../functions/fetchingData";

const API_URL = import.meta.env.VITE_API_URL

const getData = async(setter, signal)=>{
  const { error, data } = await fetchingData(signal);
  if (error === 'abort') return;
  setter(data);
}


const addPerson = async (newPerson) => {
    try {
      let response = await fetch(API_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newPerson),
      });
      if (!response.ok) throw new Error('server no responde')
      let data = await response.json();
      return {data, error: null}
    } catch (err) {
      return {error: err.message}
    }
  };

  const deleteFromServer = async (id) => {
    const completeURL = `${API_URL}/${id}`;
    try {
      const response = await fetch(completeURL, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('server no responde');
      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      return { error: err.message };
    }
  };


  const updatePersonData = async(id, person)=>{
      try{
        const response = await (fetch(`${API_URL}${id}`, { 
          method: "PATCH",
          body: JSON.stringify(person),
          headers: {
            'Content-type':'application/json'
          }
        }))
        if(!response.ok) throw new Error('Server Error')
        const data = await response.json()
        return {data, error:null}
      }catch(err){
        return {error: err.message}
      }
  }
  


export {getData, addPerson, deleteFromServer, updatePersonData}