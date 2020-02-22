const url_api =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

const h = 1000;
const w = 1000;
const barpadding = 3;
(async function(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  const div = d3
    .select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
  div
    .selectAll("rect")
    .data(data.data)
    .enter()
    .append("rect")
    .attr("width", (d, i) => `${i + 4}px`)
    .attr("height", d => `${d[1]}px`)
    .attr("x", (d, i) => `${i + 8}`)
    .attr("y", d => `${h - d[1]}`);
})(url_api);
