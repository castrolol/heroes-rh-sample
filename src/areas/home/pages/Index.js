import React from 'react';
import ReactHighcharts from 'react-highcharts';

import { HeroesService } from '../../../services/heroes.service';

import Header from '../../../shared/Header';

const config = {

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: { text: '' },
    tooltip: {
        pointFormat: '{series.name}: <b>$ {point.y:.,2f} per Month</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: $ {point.y:.,2f}'
            }
        }
    },
    series: [{
        name: "Sum of Salaries",
        data: [],
    }]

};

class IndexPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { heroes: [] };
        this.api = new HeroesService();

    }

    componentDidMount() {

        this.api.getAll().then(heroes => {
            console.log(heroes);
            this.setState({ heroes });
        })

    }


    groupByTeamSalary() {

        const heroes = this.state.heroes;
        const salaries = {};

        heroes.forEach(hero => {

            const team = hero.team || "No Team";
            if(!salaries[team]){
                salaries[team] = 0;
            }

            salaries[team] += hero.salary;

        });
 

        return Object.keys(salaries).map(key => ({ name: key, y: salaries[key] }));


    }

    render() {

        config.series[0].data = this.groupByTeamSalary();


        return (
            <div>
                <Header title="Dashboard" />

                <div className="white-pane">

                    <h3> Salaries By Team </h3>
                    <ReactHighcharts config={config}></ReactHighcharts>

                </div>

            </div>
        );

    }

}

export default IndexPage;