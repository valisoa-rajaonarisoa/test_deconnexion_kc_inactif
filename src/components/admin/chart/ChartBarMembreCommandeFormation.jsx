import React from 'react'

import {Chart as ChartJs} from "chart.js/auto"

import { Bar, Doughnut } from 'react-chartjs-2'

export default function ChartBarMembreCommandeFormation({data}) {
  return (
    <Doughnut 
      data={{

        labels: data.map((element) => element.label),

        datasets:[
            {
              label:"effectif total ",
              data: data.map((element) => element.value),

              backgroundColor: [
                "#706fd3",
                "#ffd32a",
                "#ef5777"
              ]
            },
        ]
      }}
    />
  )
}
