const url_api =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

const h = 1000;
const w = 1000;

(async function(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  const div = d3
    .select("body")
    .append("div")
    .attr("width", w)
    .attr("height", h);
  div
    .selectAll("div")
    .data(data.data)
    .enter()
    .append("div")
    .style("width", "2.8px")
    .style("height", d => `${d[1]}px`)
    .attr("class", "bar");
})(url_api);
