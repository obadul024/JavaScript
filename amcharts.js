!-- Styles --
style
#chartdiv {
  width 100%;
height550px;
}
style

!-- Resources --
script src=httpswww.amcharts.comlib4core.jsscript
script src=httpswww.amcharts.comlib4charts.jsscript
script src=httpswww.amcharts.comlib4pluginsforceDirected.jsscript
script src=httpswww.amcharts.comlib4themeskelly.jsscript

!-- Chart code --
script
am4core.ready(function() {

 Themes begin
am4core.useTheme(am4themes_kelly);
 Themes end

var chart = am4core.create(chartdiv, am4plugins_forceDirected.ForceDirectedTree);

var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
networkSeries.dataFields.linkWith = linkWith;
networkSeries.dataFields.name = name;
networkSeries.dataFields.id = name;
networkSeries.dataFields.value = value;
networkSeries.dataFields.children = children;

networkSeries.nodes.template.label.text = {name}
networkSeries.fontSize = 8;
networkSeries.linkWithStrength = 0;

var nodeTemplate = networkSeries.nodes.template;
nodeTemplate.tooltipText = {name};
nodeTemplate.fillOpacity = 1;
nodeTemplate.label.hideOversized = true;
nodeTemplate.label.truncate = true;

var linkTemplate = networkSeries.links.template;
linkTemplate.strokeWidth = 1;
var linkHoverState = linkTemplate.states.create(hover);
linkHoverState.properties.strokeOpacity = 1;
linkHoverState.properties.strokeWidth = 2;

nodeTemplate.events.on(over, function (event) {
    var dataItem = event.target.dataItem;
    dataItem.childLinks.each(function (link) {
        link.isHover = true;
    })
})

nodeTemplate.events.on(out, function (event) {
    var dataItem = event.target.dataItem;
    dataItem.childLinks.each(function (link) {
        link.isHover = false;
    })
})

networkSeries.data = [  
   {  
      namePhoebe,
      value102,
      children[  
         {  
            nameDavid,
            value14
         },
         {  
            nameRoger,
            value1
         },
         {  
            nameDuncan,
            value1
         },
         {  
            nameRob Dohnen,
            value2
         },
         {  
            nameRyan,
            value5
         },
         {  
            nameMalcom,
            value1
         },
         {  
            nameRobert,
            value1
         },
         {  
            nameSergei,
            value1
         },
         {  
            nameVince,
            value2
         },
         {  
            nameJason,
            value1
         },
         {  
            nameRick,
            value2
         },
         {  
            nameGary,
            value7
         },
         {  
            nameJake,
            value2
         },
         {  
            nameEric,
            value3
         },
         {  
            nameMike,
            value18
         }
      ]
   },
  
      nameJoey,
      value88,
      linkWith[  
         Phoebe,
         
      ],
      children[  
         {  
            nameLorraine,
            value2
         },
         {  
            nameMelanie,
            value2
         },
         {  
            nameErica,
            value2
         },
         {  
            nameKate,
            value4
         },
         {  
            nameLauren,
            value2
         },
         {  
            nameEstelle,
            value1
         },
         {  
            nameKatie,
            value2
         },
         {  
            nameJanine,
            value9
         },
         {  
            nameErin,
            value1
         },
         {  
            nameCecilia,
            value3
         }
      ]
   }
];


});  end am4core.ready()
script

!-- HTML --
div id=chartdivdiv