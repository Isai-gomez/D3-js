const url_api =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

const h = 1000;
const w = 1000;
const dataJson = { dato: null };

(async function(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
  svg
    .selectAll("rect")
    .data(data.data)
    .enter()
    .append("rect");
})(url_api);
