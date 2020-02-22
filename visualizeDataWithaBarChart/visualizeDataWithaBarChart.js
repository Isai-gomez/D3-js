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
    .attr("x", (d, i) => `${i * (w / d.length)}px`)
    .attr("y", (d, i) => `${h - 10 * d[1]}`)
    .attr("width", w / data.data.length - barpadding)
    .attr("height", d => `${d[1] * 10}`);
})(url_api);
