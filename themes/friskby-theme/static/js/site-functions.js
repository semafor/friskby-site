function setGaugePercentage(percentage) {
    var gauge = document.querySelector(".gauge");
    var number = document.querySelector(".gauge-number");
    gauge.style.width = percentage + "%";
    gauge.style.backgroundSize = ((100 / percentage) * 100) + "%";

    number.innerHTML = percentage + "%";
}

function updateTrend(data) {
    var ranges = [
        [1246406400000, 14.3, 27.7],
        [1246492800000, 20.5, 80.8],
        [1246579200000, 15.5, 29.6],
    ],
    averages = [
        [1246406400000, 21.5],
        [1246492800000, 50.1],
        [1246579200000, 23],
    ];

    Highcharts.chart('trend-chart', {

        title: {
            text: ''
        },

        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            title: {
                text: null
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: ' ppm'
        },

        legend: {
        },

        series: [{
            name: 'Particles',
            data: averages,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }, {
            name: 'Range',
            data: ranges,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }]
    });
}

// FIXME: should come from API
setGaugePercentage(24);
updateTrend();
