const URL = "http://127.0.0.1:3001/persons";

const getData = async (setter) => {
    let response = await fetch(URL);
    let data = await response.json();
    setter(data);
  };

const addPerson = async (newPerson, setter, objList) => {
    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newPerson),
      });
      let data = await response.json();
      setter([...objList].concat(data))
    } catch (err) {
      console.log(err);
    }
  };

export {getData, addPerson}