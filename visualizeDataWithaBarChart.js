const url_api = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
const dataJson = apiFetch(url_api);

function apiFetch(url){
  return(
    fetch(url)
    .then(response => response.json())
    .then(data => data)
  )
}

console.log(dataJson);

// let axis = d3.axisLeft(scale);
// d3.select("body").append("svg")
//     .attr("width", 1440)
//     .attr("height", 30)
//   .append("g")
//     .attr("transform", "translate(0,30)")
//     .call(axis);