const url_api = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
const h = 1000;
const w = 1000;

async function getApi(url){  
  let response = await fetch(url);
  let data = await response.json();
  return data;   
};
const dataJson = {dato:getApi(url_api)};

console.log("despues de la funcion"+dataJson);
const  svg = d3.select('body')
                .append('svg')
                .attr('width', w)
                .attr('height', h);
      svg.selectAll("rect")
          .data(dataJson.dato.data)
          .enter()
          .append("rect")