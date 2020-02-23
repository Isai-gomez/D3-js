const dataset = [
  {
    fruit: "Mango",
    value: 45
  },
  {
    fruit: "Uva",
    value: 99
  },
  {
    fruit: "Piña",
    value: 23
  },
  {
    fruit: "Melon",
    value: 45
  },
  {
    fruit: "Manzana",
    value: 45
  },
  {
    fruit: "Fresa",
    value: 48
  },
  {
    fruit: "Sandia",
    value: 31
  },
  {
    fruit: "Naranja",
    value: 34
  },
  {
    fruit: "Pera",
    value: 14
  },
  {
    fruit: "Pepino",
    value: 75
  }
];

const m = 60;
const w = 1000 - 2 * m;
const h = 600 - 2 * m;

const svg = d3.select("svg");

const chart = svg.append("g").attr("transform", `translate(${m}, ${m})`);

const yScale = d3
  .scaleLinear()
  .range([h, 0])
  .domain([0, 100]);

chart.append("g").call(d3.axisLeft(yScale));

const xScale = d3
  .scaleBand()
  .domain(dataset.map(p => p.fruit))
  .range([0, w])
  .padding(0.2);
chart
  .append("g")
  .attr("transform", `translate(0, ${h})`)
  .call(d3.axisBottom(xScale));
chart
  .selectAll()
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", s => xScale(s.fruit))
  .attr("y", s => yScale(s.value))
  .attr("height", s => h - yScale(s.value))
  .attr("width", xScale.bandwidth())
  .attr("class", "color");

chart
  .append("g")
  .attr("class", "grid")
  .attr("transform", `translate(0, ${h})`)
  .call(
    d3
      .axisBottom()
      .scale(xScale)
      .tickSize(-h, 0, 0)
      .tickFormat("")
  );

chart
  .append("g")
  .attr("class", "grid")
  .call(
    d3
      .axisLeft()
      .scale(yScale)
      .tickSize(-w, 0, 0)
      .tickFormat("")
  );
svg
  .append("text")
  .attr("x", -(h / 2) - m)
  .attr("y", m / 2.4)
  .attr("transform", "rotate(-90)")
  .attr("text-anchor", "middle")
  .text("MEDIDO(%)");

svg
  .append("text")
  .attr("x", w / 2 + m)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .text("FRUTAS MAS COMUNES EN 2019");
svg
  .append("text")
  .attr("class", "label")
  .attr("x", w / 2 + m)
  .attr("y", h + m * 1.7)
  .attr("text-anchor", "middle")
  .text("FRUTAS");
