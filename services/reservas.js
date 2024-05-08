const getReservasByUser = (id) => {
    return fetch(`http://172.20.108.85:8080/api/reserva/user/${id}`).then(res => {
        if(res.status === 200){
            return res.json();
        } else {
            throw new Error("Error: Reservas not Found")
        }
    })
}

export default {
    getReservasByUser
  };