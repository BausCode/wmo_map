function NewInput(){
  var div_id = "non-svg-elements"
    , container_id = "zipcode-input"
    , input_id = "zip"
  var old_wmo;
  function chart(selection) {
    selection.each(function(data){
      var text_input = d3.select(this)
       .append("input")
        .attr("autofocus","autofocus")
        .attr("id",input_id)
        .attr("type","text")
        .attr("placeholder","Type Zipcode")
        .attr("maxlength",5)
        .attr("size",23)
        .attr("autocomplete","off")
        .on("keyup",color_map)
        .on("change",color_map)
        .on("cut", function() { setTimeout(color_map, 10); })
        .on("paste", function() { setTimeout(color_map, 10); });

     var input_container = d3.select("#viz-container")
        .append("g")
          .attr("transform","translate(800,123)")
          .classed("input-text",true);
     var input_heading = input_container
         .append("text")
          .attr("id","weather-region")
          .classed("heading",true)
          .attr("x",0)
          .attr("y",0)
          .text("Find Weather Region")
          .style("text-anchor","start");

      function color_map(d,i){
        d3.event.preventDefault()
        var zip = text_input.property("value")
        if (zip.length ==5){
          var wmo = d.zip2wmo[zip];
          d3.selectAll("#"+"wmo_id_"+wmo)
            .style("stroke-width","4.0px")
            .style("stroke","BLACK")
          if (old_wmo != wmo && old_wmo){
            d3.selectAll("#"+"wmo_id_"+old_wmo)
              .style("stroke-width","0.15px")
              .style("stroke","#999")
          }
          old_wmo = wmo;
        }else{
          d3.selectAll("#"+"wmo_id_"+old_wmo)
            .style("stroke-width","0.15px")
            .style("stroke","#999")
        }
      // end color_map
      }
  // selection end
    })
  // chart end
  }
  chart.div_id = function(d) {
    if (!arguments.length) { return div_id; }
    div_id = d;
    return chart;
  };
  chart.input_id = function(i) {
    if (!arguments.length) { return input_id; }
    input_id = i;
    return chart;
  };
  chart.container_id = function(i) {
    if (!arguments.length) { return container_id; }
    container_id = i;
    return chart;
  };
// NewInput end
  return chart
}
