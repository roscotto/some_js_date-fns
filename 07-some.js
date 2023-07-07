//si dos citas en el calendario se superponen
//uso de la libreria date-fns


//base de datos. array con citas
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10), //año, mes, dia, hora
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

const newAppointment = {
    startDate: new Date (2021,1,1,19),
    endDate: new Date (2021,1,1,20,30),
};


//traigo la variable de la documentación de la libreria. que es una función

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');
const { is } = require('date-fns/locale');

//armo yo mi evaluacion de si se superponen a traves de una arrow function
const isOverlap = (newDate) => { //como parámetro le enviamos la nueva fecha que se quiere agendar
    return dates.some(date => { //aplico el metodo some a dates
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate}, //necesita start y end del atributo 
            {start: newDate.startDate, end: newDate.endDate},
        );
    });
}

console.log('se superpone?', isOverlap(newAppointment));


//     if (newAppointment == true){
//         alert(`Ya tenés una tarea agendada en ese horario.`);
//     }else {
//         alert(`Tu cita ha sido agendada correctamente.`);
//     }

