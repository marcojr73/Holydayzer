import express from "express"

const app = express();

const holidays = [
    { date: "01/01/2022", name: "Confraternização mundial" },
    { date: "01/03/2022", name: "Carnaval" },
    { date: "04/17/2022", name: "Páscoa" },
    { date: "04/21/2022", name: "Tiradentes" },
    { date: "05/01/2022", name: "Dia do trabalho" },
    { date: "06/16/2022", name: "Corpus Christi" },
    { date: "09/07/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/02/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

    app.get("/holidays", (request, response) => {
    response.send(holidays)
})

app.get("/is-today-holiday", (request, response) => {
    let hoje = new Date().toLocaleDateString();
    let answer = null;

    holidays.forEach( holiday => {
        if(holiday.date == hoje){
            answer = true;
        }
    })

    answer == true ? response.send("Sim, hoje é nome-do-feriado") : response.send("Não, hoje não é feriado")
})

app.listen(4000, () => {
    console.log("sua aplicação está viva")
})