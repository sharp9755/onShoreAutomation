            $(document).ready(function(){
                var line1 = [11,0,0,0,0,1,0,3,2,2,2,5,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,6,0,6,2,2,0,6,3,3,3,9,0,6,0,3,6,1,6,6,6,6,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,6,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,2,0,0,0,1,0,1,0,6,0,2,0,6,6,6,6,6,6,6,4,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,2,1,2,0,1,7,0,1,1,3,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,3,2,4,5,0,0,0,1,0,0,0,1,5];
                var line2 = [1,12,12,12,12,0,3,0,1,1,4,1,3,5,5,6,5,5,5,5,5,5,5,5,5,5,5,5,5,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,5,4,4,5,5,4,1,1,0,1,0,2,2,0,1,2,1,0,1,0,1,0,1,0,2,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1,0,0,1,1,0,0,0,6,0,1,0,7,6,0,1,0,0,2,0,0,12,11,0,0,0,0,0,0,0,0,0,0,0,0,5,5,4,3,1,0,1,0,1,1,1,0,1,1,1,0,0];
                var line3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,5,0,3,5,5,0,5,0,5,2,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,0,5,0,0,0,5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var ticks = [1,2,3,4,5,6,7,8,9,10,11,12,13];$.jqplot('line', [line1, line2, line3], {
        animate: true,
axesDefaults:{min:0,tickInterval: 1},        seriesDefaults: {
            rendererOptions: {
                smooth: true
            }
        },
        series: [{lineWidth: 1.5, label: 'Passed'},
            {lineWidth: 1.5, label: 'Failed'},
            {lineWidth: 1.5, label: 'Skipped'}],
        axes: {
            xaxis: {
                label: "Run Number",
                ticks: ticks,
                tickOptions: {
                    formatString: "%'d "
                },
                pad: 1.2,
                rendererOptions: {
                    tickInset: 0.3,
                    minorTicks: 1
                }
            },
            yaxis: {
                label: "TC Number"
                ,tickOptions: {
                    formatString: "%'d Tc"
                },
            }
        },
        highlighter: {
            show: true,
            sizeAdjust: 10,
            tooltipLocation: 'n',
            tooltipAxes: 'y',
            tooltipFormatString: '%d :&nbsp;<b><i><span style="color:black;">Test Cases</span></i></b>',
            useAxesFormatters: false
        },
        cursor: {
            show: true
        },
        grid: {background: '#ffffff', drawGridLines: true, gridLineColor: '#cccccc', borderColor: '#cccccc',
            borderWidth: 0.5, shadow: false},
        legend: {show: true, placement: 'outside', location: 'e'},
        seriesColors: ["#7BB661", "#E03C31", "#21ABCD"]
    });
});
