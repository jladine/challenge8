Morris.Area({
    element: 'myfirstchart',
    data: [{
        year: '2008',
        a: 20,
        b: 40,
        c:10,
        d:32
    }, {
        year: '2009',
        a: 10,
        b: 50,
        c:25
    }, {
        year: '2010',
        a: 5,
        b: 30,
        c: 28,
        d: 50
    }, {
        year: '2011',
        a: 5,
        b: 20
    }, {
        year: '2012',
        a: 20,
        b: 45,
        d:60
    }],
    xkey: 'year',
    ykeys: ['a','b','c','d'],
    labels: ['Value'],
    hideHover: 'auto'

});

Morris.Donut({
  element: 'hero-donut',
  data: [
    {label: 'Download sale', value: 12 },
    {label: 'In store sales', value: 30 },
    {label: 'Mails order sale', value: 20 },
  ],
  formatter: function (y) { return y + "%" }
});

Morris.Bar({
  element: 'hero-bar',
  data: [
    {device: 'iPhone', geekbench: 136},
    {device: 'iPhone 3G', geekbench: 137},
    {device: 'iPhone 3GS', geekbench: 275},
    {device: 'iPhone 4', geekbench: 380},
    {device: 'iPhone 4S', geekbench: 655},
    {device: 'iPhone 5', geekbench: 1571}
  ],
  xkey: 'device',
  ykeys: ['geekbench'],
  labels: ['Geekbench'],
  barRatio: 0.4,
  xLabelAngle: 35,
  hideHover: 'auto'
});

$(function () {
  var tax_data = [
       {"period": "2011 Q3", "licensed": 1550},
       {"period": "2011 Q2", "licensed": 550},
       {"period": "2011 Q1", "licensed": 1700},
       {"period": "2010 Q4", "licensed": 1600},
       {"period": "2009 Q4", "licensed": 500},
       {"period": "2008 Q4", "licensed": 1800},
       {"period": "2007 Q4", "licensed": 700},
       {"period": "2006 Q4", "licensed": 650},
       {"period": "2005 Q4", "licensed": 700}
  ];
  Morris.Line({
    element: 'hero-graph',
    data: tax_data,
    xkey: 'period',
    ykeys: ['licensed'],
    labels: ['Licensed', 'Off the road']
  });
});

var data = [
			{ label: "Series1",  data: [[1,10]]},
			{ label: "Series2",  data: [[1,30]]},
			{ label: "Series3",  data: [[1,90]]},
			{ label: "Series4",  data: [[1,70]]},
			{ label: "Series5",  data: [[1,80]]},
			{ label: "Series6",  data: [[1,40]]}
		];


$.plot('#placeholder', data, {
    series: {
        pie: {
            show: true
        }
    }
});

$(function() {

		var sin = [],
			cos = [];

		for (var i = 0; i < 14; i += 0.5) {
			sin.push([i, Math.sin(i)]);
			cos.push([i, Math.cos(i)]);
		}

		var plot = $.plot("#graph", [
			{ data: sin, label: "sin(x)"},
			{ data: cos, label: "cos(x)"}
		], {
			series: {
				lines: {
					show: true
				},
				points: {
					show: true
				}
			},
			grid: {
				hoverable: true,
				clickable: true
			},
			yaxis: {
				min: -1,
				max: 1
			}
		});
});
