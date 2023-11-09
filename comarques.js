var width = 960,
    height = 600;

var graph = 
	{"nodes": [
		{"id":  "1", "nom": "Alt Camp", "prov":4},
		{"id":  "2", "nom": "Alt Empordà", "prov":2},
		{"id":  "3", "nom": "l'Alt Penedès", "prov":1},
		{"id":  "4", "nom": "l'Alt Urgell", "prov":3},
		{"id":  "5", "nom": "l'Alta Ribagorça", "prov":3},
		{"id":  "6", "nom": "l'Anoia", "prov":1},
		{"id": "39", "nom": "l'Aran", "prov":6},
		{"id":  "7", "nom": "el Bages", "prov":1},
		{"id":  "8", "nom": "el Baix Camp", "prov":4},
		{"id":  "9", "nom": "el Baix Ebre", "prov":4},
		{"id": "10", "nom": "el Baix Empordà", "prov":2},
		{"id": "11", "nom": "el Baix Llobregat", "prov":1},
		{"id": "12", "nom": "el Baix Penedès", "prov":4},
		{"id": "13", "nom": "el Barcelonès", "prov":1},
		{"id": "14", "nom": "el Berguedà", "prov":1},
		{"id": "15", "nom": "la Cerdanya", "prov":2},
		{"id": "16", "nom": "la Conca de Barberà", "prov":4},
		{"id": "17", "nom": "el Garraf", "prov":1},
		{"id": "18", "nom": "les Garrigues", "prov":3},
		{"id": "19", "nom": "la Garrotxa", "prov":2},
		{"id": "20", "nom": "el Gironès", "prov":2},
		{"id": "43", "nom": "el Lluçanès", "prov":1},
		{"id": "21", "nom": "el Maresme", "prov":1},
		{"id": "42", "nom": "el Moianès", "prov":1},
		{"id": "22", "nom": "el Montsià", "prov":4},
		{"id": "23", "nom": "la Noguera", "prov":3},
		{"id": "24", "nom": "Osona", "prov":1},
		{"id": "25", "nom": "el Pallars Jussà", "prov":3},
		{"id": "26", "nom": "el Pallars Sobirà", "prov":3},
		{"id": "27", "nom": "el Pla d'Urgell", "prov":3},
		{"id": "28", "nom": "el Pla de l'Estany", "prov":2},
		{"id": "29", "nom": "el Priorat", "prov":4},
		{"id": "30", "nom": "la Ribera d'Ebre", "prov":4},
		{"id": "31", "nom": "el Ripollès", "prov":2},
		{"id": "32", "nom": "la Segarra", "prov":3},
		{"id": "33", "nom": "el Segrià", "prov":3},
		{"id": "34", "nom": "la Selva", "prov":2},
		{"id": "35", "nom": "el Solsonès", "prov":3},
		{"id": "36", "nom": "el Tarragonès", "prov":4},
		{"id": "37", "nom": "la Terra Alta", "prov":4},
		{"id": "38", "nom": "l'Urgell", "prov":3},
		{"id": "40", "nom": "el Vallès Occidental", "prov":1},
		{"id": "41", "nom": "el Vallès Oriental", "prov":1}
	],
    "links": [
		{"source":  6, "target":  4},
		{"source":  6, "target": 28},
		{"source":  4, "target": 27},
		{"source":  4, "target": 28},
		{"source": 28, "target": 27},
		{"source": 28, "target":  3},
		{"source": 27, "target":  3},
		{"source": 27, "target": 25},
		{"source": 25, "target":  3},
		{"source": 25, "target": 34},
		{"source": 25, "target": 40},
		{"source": 25, "target": 29},
		{"source": 25, "target": 35},
		{"source": 25, "target": 37},
		{"source": 35, "target": 18},
		{"source": 35, "target": 29},
		{"source": 35, "target": 32},
		{"source": 18, "target": 31},
		{"source": 18, "target": 32},
		{"source": 18, "target": 16},
		{"source": 18, "target": 40},
		{"source": 18, "target": 29},
		{"source": 29, "target": 40},
		{"source": 40, "target": 34},
		{"source": 40, "target": 16},
		{"source": 34, "target": 16},
		{"source": 34, "target":  5},
		{"source": 34, "target": 37},
		{"source": 37, "target":  3},
		{"source": 37, "target":  5},
		{"source": 37, "target": 14},
		{"source":  3, "target": 14},
		{"source":  3, "target": 15},
		{"source": 14, "target": 15},
		{"source": 14, "target": 33},
		{"source": 14, "target":  7},
		{"source": 15, "target": 33},
		{"source": 33, "target": 26},
		{"source": 33, "target": 19},
		{"source": 33, "target": 21},
		{"source": 21, "target": 26},
		{"source": 21, "target": 23},
		{"source": 21, "target":  7},
		{"source": 21, "target": 14},
		{"source": 23, "target": 26},
		{"source": 23, "target":  7},
		{"source": 23, "target": 41},
		{"source": 23, "target": 42},
		{"source": 19, "target": 26},
		{"source": 19, "target":  1},
		{"source": 19, "target": 20},
		{"source": 19, "target": 30},
		{"source": 19, "target": 36},
		{"source": 30, "target":  1},
		{"source": 30, "target": 20},
		{"source":  1, "target": 20},
		{"source":  1, "target": 10},
		{"source": 10, "target": 20},
		{"source": 10, "target": 36},
		{"source": 20, "target": 36},
		{"source": 36, "target": 26},
		{"source": 36, "target": 22},
		{"source": 36, "target": 42},
		{"source": 22, "target": 13},
		{"source": 22, "target": 42},
		{"source": 42, "target": 41},
		{"source": 42, "target": 13},
		{"source": 42, "target": 26},
		{"source": 42, "target": 7}
	]};

var color = d3.scaleOrdinal(d3.schemeCategory10);

var force = d3.forceSimulation()
            .alphaTarget(0.1);

force.force(d3.forceLink());

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

/*d3.json("./data/redFBUOC_2level.json", function(error, graph) {*/

  var sizeScale = d3.scalePow().range([3,8]).domain([43000,200000]).clamp(true);

  /*if (error) throw error;*/

  var linksForce = d3.forceLink(graph.links)
      .distance(100);


  var node_drag = d3.drag()
      .on("drag", dragmove)
      .on("end", dragend);

  function dragmove(d, i) {
      d.px += d3.event.dx;
      d.py += d3.event.dy;
      d.x += d3.event.dx;
      d.y += d3.event.dy; 
      tick(); 
  }

  function dragend(d, i) {
      d.fixed = true;
      tick();
  }

  force
      .nodes(graph.nodes)
      .force("link", linksForce)
      .force("charge", d3.forceManyBody().strength(-250))
      .force("x", d3.forceX())
      .force("y", d3.forceY())

  force.restart();

  var link = svg.selectAll(".link")
      .data(graph.links)
      .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", 1);/*function(d) { return Math.sqrt(d.value); });*/

  var node = svg.selectAll(".node")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("class", "node")
      .attr("r", 10 /*function(d){
          return sizeScale(parseInt(10000000));
      }*/)
      .style("fill", function(d) { 
          return color(d.prov); 
      })
      .call(node_drag);

  node.append("title")
      .text(function(d) { return d.nom; });

  force.on("tick", tick);
  function tick() {
    link.attr("x1", function(d) { return (width/2)+d.source.x; })
        .attr("y1", function(d) { return (height/2)+d.source.y; })
        .attr("x2", function(d) { return (width/2)+d.target.x; })
        .attr("y2", function(d) { return (height/2)+d.target.y; });

    node.attr("cx", function(d) { return (width/2)+d.x; })
        .attr("cy", function(d) { return (height/2)+d.y; });
  };
/*})*/
;
