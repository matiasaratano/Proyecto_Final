const getReservasByUser = (id) => {
    return fetch(`http://172.20.108.85:8080/api/reserva/user/${id}`).then(res => {
        if(res.status === 200){
            return res.json();
        } else {
            throw new Error("Error: Reservas not Found")
        }
    })
}

const deleteReserva = (id) => {
    return fetch(`http://172.20.108.85:8080/api/reserva/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
}).then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      return res.json();
    }
  })

}

const updateVianda = (id) => {
  return fetch(`http://172.20.108.85:8080/api/reserva/vianda/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
}).then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      return res.json();
    }
  })

}

const getIntoListaEspera = (fecha,userId) => {
      console.log("Ingresando a Lista de Espera")
}

export default {
    getReservasByUser,
    deleteReserva,
    updateVianda,
    getIntoListaEspera
  };