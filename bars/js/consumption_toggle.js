function ConsumptionToggle(){

  var height = 10
    , width = 500
  var active_units;
  var choroplethScale;
  var filterYear;
  var div_id = "non-svg-elements"
    , container_id = "toggle-container"
    , toggle_id = "consumption-toggle"
    , change;
  function chart(selection) {
    selection.each(function(map_data) {
      var toggle = d3.select(this);
/*
      var toggle_KWH = toggle.append("input")
          .classed("toggles KWH",true)
          .attr("type","button")
          .attr("value","KWH");
      var toggle_THERMS = toggle.append("input")
          .classed("toggles THERMS",true)
          .attr("type","button")
          .attr("value","THERMS");
*/
      var viz_g = d3.select("#viz-container")
          .append("g")
          .classed(container_id,true)
          .attr("transform","translate(20,140)");

      var fuel_type = viz_g.append("text")
          .attr("id","fuel-type")
          .classed("heading",true)
          .attr("x",0)
          .attr("y",-15)
          .text("Select Fuel Type")
          .style("text-anchor","start");

      var added_width = 35;
      var plus_some = 35;
      var background_rect = viz_g.append("rect")
          .classed("toggles background-rect",true)
          .attr("width",(70+added_width+plus_some))
          .attr("height","24px");

      var track_rect = viz_g.append("rect")
          .classed("toggles track-rect",true)
          .attr("width",(66+added_width+plus_some))
          .attr("height","20px")
          .attr("transform","translate(2,1.8)");

      var sliding_rect = viz_g.append("rect")
          .classed("toggles sliding-rect",true)
          .attr("x",0)
          .attr("width",(33+added_width))
          .attr("height","20px")
          .attr("transform","translate(2,1.8)");

      var kWh = viz_g.append("text")
          .attr("id","KWH")
          .classed("toggles active-toggle",true)
          .attr("x",9)
          .attr("y",15)
          .text("Electric");

      var Thm = viz_g.append("text")
          .attr("id","THERMS_JOULES")
          .classed("toggles inactive-toggle",true)
          .attr("x",75)
          .attr("y",15)
          .text("Gas & Oil");

      var face_rect = viz_g.append("rect")
          .classed("toggles face-rect",true)
          .attr("width",(76+added_width+plus_some))
          .attr("height","30px")
          .attr("transform","translate(-3,-3)")
          .attr("units","KWH");

      face_rect.on("click",function(){
          active_units = (face_rect.attr("units")=="KWH")? "THERMS_JOULES":"KWH";
          var inactive_units = (active_units=="THERMS_JOULES")? "KWH":"THERMS_JOULES";
          var labeled_units = (active_units=="KWH")? "(kWh)":"(Thm)";
          d3.select("#legend_units").text(labeled_units)
          face_rect.attr("units",active_units)
          d3.select("#"+active_units)
            .classed("inactive-toggle",false)
            .classed("active-toggle",true)
          d3.select("#"+inactive_units)
            .classed("active-toggle",false)
            .classed("inactive-toggle",true)
          var _x = (sliding_rect.attr("x")==0)? 68:0;
          sliding_rect.transition()
            .duration(300)
            .attr("x",_x)

          change.call("unit_change",this,active_units)
      })
    })
  // end chart
  }
  chart.div_id = function(i) {
    if (!arguments.length) { return div_id; }
    div_id = i;
    return chart;
  };
  chart.container_id = function(c) {
    if (!arguments.length) { return container_id; }
    container_id = c;
    return chart;
  };
  chart.toggle_id = function(t) {
    if (!arguments.length) { return toggle_id; }
    toggle_id = t;
    return chart;
  };
  chart.width = function(w) {
    if (!arguments.length) { return width; }
    width = w;
    return chart;
  };
  chart.height = function(h) {
    if (!arguments.length) { return height; }
    height = h;
    return chart;
  };
  chart.choroplethScale= function(c) {
    if (!arguments.length) { return choroplethScale; }
    choroplethScale = c;
    return chart;
  };
  chart.filterYear = function(y) {
    if (!arguments.length) { return filterYear; }
    filterYear = y;
    return chart;
  };
  chart.active_units = function(a) {
    if (!arguments.length) { return active_units; }
    active_units = a;
    return chart;
  };
  chart.change = function(c) {
    if (!arguments.length) { return change; }
    change = c;
    return chart;
  };
  // end ConsumptionToggle
  return chart
}