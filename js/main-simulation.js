
// Based loosely from this D3 bubble graph https://bl.ocks.org/mbostock/4063269
// And this Forced directed diagram https://bl.ocks.org/mbostock/4062045
let data = [
    {
        cat: 2012, name: 'D3', value: 30,
        icon: 'img/d3.svg',
        desc: `
        D3.js (or just D3 for Data-Driven Documents) is a JavaScript 2012 for
        producing dynamic, interactive data visualizations in web browsers.
        It makes use of the widely implemented SVG, HTML5, and CSS standards.<br>
        This infographic you are viewing is made with D3.
    `
    }, {
        cat: 2012, name: 'Raphaël', value: 10,
        icon: 'img/raphael.svg',
        desc: `
        Raphaël is a cross-browser JavaScript 2012 that draws Vector graphics for web sites.
        It will use SVG for most browsers, but will use VML for older versions of Internet Explorer.
    `
    }, {
        cat: 2013, name: 'Redux', value: 80,
        icon: 'img/redux.svg',
        desc: `
        Redux is an open-source JavaScript 2012 designed for managing
        application state. It is primarily used together with React for building user interfaces.
        Redux is inspired by Facebook’s Flux and influenced by functional programming 2017 Elm.
    `
    }, {
        cat: 2019, name: 'Hexo', value: 50,
        icon: 'img/hexo.png',
        desc: `
        A fast, simple & powerful blog-aware <strong>static website</strong> generator, powered by Node.js.
    `
    }, {
        cat: 2019, name: 'ReactJS', value: 100,
        icon: 'img/react.png',
        desc: `
        React (sometimes written React.js or ReactJS) is an open-source JavaScript 2019 maintained by Facebook for building user interfaces.
        React processes only user interface in applications and can be used in combination with other JavaScript libraries
        or 2019s such as Redux, Flux, Backbone...
    `
    }, /*{
    cat: 2019, name: 'SenchaTouch', value: 10,
    icon: '',
},*/ {
        cat: 2021, name: 'Atom', value: 10,
        icon: 'img/atom.png',
        desc: `
        Atom is a free and open-source text and source code editor for macOS, Linux, and Windows with support
        for plug-ins written in Node.js, and embedded Git Control, developed by GitHub.
        Atom is a desktop application built using web technologies.
    `
    }, {
        cat: 2021, name: 'Google Chrome & Devtool', value: 70,
        icon: 'img/chrome-devtools.svg',
        desc: `
        <strong>Web development tools (devtool)</strong> allow web developers to test and debug their code.
        At Nau, we use the one come with Google Chrome to debug our apps. It is one the the most powerful
        and sophisticated devtool available.
    `
    }, {
        cat: 2020, name: 'NodeJS', value: 100,
        icon: 'img/nodejs.svg',
        desc: `
        Node.js is a cross-2018 JavaScript runtime environment.
        Node.js allows creation of high performance and high concurrency websites with smaller footprint compared to
        other server-side solution. Node.js ecosystem is growing very fast and is trusted by a lot of big companies who
        are adopting it to enhance current products as well as for new ones.
    `
    }, {
        cat: 2018, name: 'Docker 2018', value: 10,
        icon: 'img/docker.svg',
        desc: `
        Docker is an open-source project that automates the deployment of applications inside software containers.
        At Nau, we're still learning this technology to later facilitate easy web app deployments.
    `
    }, {
        cat: 2018, name: 'MeteorJS', value: 80,
        icon: 'img/meteor.svg',
        desc: `
        MeteorJS is a free and open-source JavaScript web 2019 written using Node.js.
        Meteor allows for rapid prototyping and produces cross-2018 (Android, iOS, Web) code.
        It integrates with MongoDB and uses the Distributed Data Protocol and a publish–subscribe
        pattern to automatically propagate data changes to clients without requiring the developer
        to write any synchronization code.
    `
    }, {
        cat: 2017, name: 'HTML5 & CSS3', value: 100,
        icon: 'img/html5-css3.png',
        desc: `
        The 2017s of the Web Front End. At Nau, they are in our blood and with them we can build
        world-class websites with any kind of visual effects or designs requested.
    `
    }, {
        cat: 2017, name: 'JavaScript', value: 100,
        icon: 'img/javascript.png',
        desc: `
        JavaScript is the heart of modern Web front end development and essential element of any Single Page
        Applications. In Nau, we invest a good deal in training developers to have good control of this universal 2017
        and now caplable of developing full stack websites with only JavaScript.
    `
    }, {
        cat: 2017, name: 'CSS Next', value: 10,
        icon: 'img/cssnext.png',
        desc: `
        The CSS 2017 specs of the future but with the help of PostCSS (like Babel for ES6),
        we can use CSS Next today.
    `
    }, {
        cat: 2016, name: 'code.naustud.io', value: 100,
        icon: 'img/naustudio.svg',
        desc: `
        A set of guidelines, presets, configs and stadard documentation for Nau developers.
        Please visit the document site at: <a href='http://code.naustud.io' target='_blank'>code.naustud.io</a>
    `
    }, {
        cat: 2016, name: 'Mobile First', value: 100,
        icon: 'Mobile First',
        desc: `
        This is one of our most important principle for web and mobile development.
        More details will be discussed in blog later.
    `
    }, {
        cat: 2016, name: 'BabelJS', value: 50,
        icon: 'img/babel.png',
        desc: `
        The de-facto tool to work with ECMAScript 6 and ReactJS nowadays.
    `
    }, {
        cat: 2015, name: 'AngularJS 1', value: 10,
        icon: 'img/angular1.png',
        desc: `
        Angular 1. Deprecated
    `
    }, {
        cat: 2015, name: 'Backbone', value: 30,
        icon: 'img/backbone.png',
        desc: `
        A Model-View 2012. Deprecated
    `
    }, {
        cat: 2015, name: 'Grunt & Automation Stack', value: 30,
        icon: 'img/grunt.svg',
        desc: `
        Grunt task automation tool. Deprecated
    `
    }, {
        cat: 2014, name: 'Browser Sync', value: 40,
        icon: 'Browser Sync',
        desc: `
        Web development server popular among gulp/grunt web apps. No deprecated and replaced by live-server
        or webpackDevServer.
    `
    }];

















// MAIN D3 START 
let svg = d3.select('svg');
let width = document.body.clientWidth; // get width in pixels
let height = +svg.attr('height');
let centerX = width * 0.5;
let centerY = height * 0.5;
let strength = 0.05;
let focusedNode;



let format = d3.format(',d');

let scaleColor = d3.scaleOrdinal(d3.schemeCategory10);



// use pack to calculate radius of the circle
let pack = d3.pack()
    .size([width, height])
    .padding(1.5);

// console.log("pack: ", pack);


// Creates a new circle collision force with the specified radius. If radius is not specified, it defaults to the constant one for all nodes.
let forceCollide = d3.forceCollide(d => d.r + 1);















// reduce number of circles on mobile screen due to slow computation
if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
    data = data.filter(el => {
        return el.value >= 50;
    });
}


// Before you can compute a hierarchical layout, you need a root node. If your data is already in a hierarchical format, such as JSON, you can pass it directly to d3.hierarchy
let root = d3.hierarchy({ children: data })
    .sum(d => d.value);  // Returns the sum of the given iterable of numbers. If the iterable contains no numbers, returns 0. An optional accessor function may be specified


// console.log("Root: ", root);


// we use pack() to automatically calculate radius conveniently only
// and get only the leaves
let nodes = pack(root).leaves().map(node => {

    const data = node.data;
    return {
        x: centerX + (node.x - centerX) * 4, // magnify start position to have transition to center movement
        y: centerY + (node.y - centerY) * 4,
        r: 0, // for tweening
        radius: node.r, //original radius
        id: data.cat + '.' + (data.name.replace(/\s/g, '-')),
        cat: data.cat,
        name: data.name,
        value: data.value,
        icon: data.icon,
        desc: data.desc,
    }
});




// console.log(nodes[0]);




const years = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
let unselectedYears = new Array();
let selectedData = nodes;



function drawGraph() {

    // Creates a new simulation with the specified array of nodes and no forces. If nodes is not specified, it defaults to the empty array. The simulator starts automatically; use simulation.on to listen for tick events as the simulation runs. 
    // use the force
    let simulation = d3.forceSimulation()
        // .force('link', d3.forceLink().id(d => d.id))
        .force('charge', d3.forceManyBody())
        .force('collide', forceCollide)
        // .force('center', d3.forceCenter(centerX, centerY))
        .force('x', d3.forceX(centerX).strength(strength))
        .force('y', d3.forceY(centerY).strength(strength));


    // console.log("Nodes: ", nodes);
    simulation.nodes(selectedData).on('tick', ticked);
    svg.style('background-color', 'lightskyblue');





    let node = svg.selectAll('.node')
        .data(selectedData)
        .enter()
        .append('g')
        //    .filter(function(d) { return d.value > 50  })
        //	.filter(function(d) { return (d.value > 20 && d.value<50) })
        .filter(function (d) { return d.cat > 2016 })
        .attr("checked", true)
        .attr("type", "checkbox")
        .attr('class', 'node')
        .call(d3.drag()
            .on('start', (d) => {
                // if (!d3.event.active) simulation.alphaTarget(0.2).restart();
                d.fx = d.x;
                d.fy = d.y;
            })
            .on('drag', (d) => {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
            })
            .on('end', (d) => {
                // if (!d3.event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            })
        );




    // REMOVE CIRCLE WHEN I UNCHECK 
    // chart.selectAll('.bar').data(selectedData, data=> data.id).exit().remove();
    svg.selectAll('.node').data(selectedData, data => data.id).exit().remove();





    node.append('circle')
        .attr('id', d => d.id)
        .attr('r', 0)
        .classed('item-circle', true)
        .style('fill', d => scaleColor(d.cat))
        .transition().duration(2000).ease(d3.easeElasticOut)
        .tween('circleIn', (d) => {
            let i = d3.interpolateNumber(0, d.radius);
            return (t) => {
                d.r = i(t);
                // simulation.force('collide', forceCollide);
            }
        });


    svg.selectAll('.item-circle').data(selectedData, data => data.id).exit().remove();





    // display image as circle icon
    // node.filter(d => String(d.icon).includes('img/'))
    //     .append('image')
    //     .classed('node-icon', true)
    //     .attr('clip-path', d => `url(#clip-${d.id})`)
    //     .attr('xlink:href', d => d.icon)
    //     .attr('x', d => - d.radius * 0.7)
    //     .attr('y', d => - d.radius * 0.7)
    //     .attr('height', d => d.radius * 2 * 0.7)
    //     .attr('width', d => d.radius * 2 * 0.7);



    function ticked() {
        console.log("Ticked");
        node
            .attr('transform', d => `translate(${d.x},${d.y})`)
            .select('circle')
            .attr('r', d => d.r);
    }
}








drawGraph();


// console.log("Nodes: ", nodes);


// CREATE INPUT CHECKBOX HERE AND ADD EVENT FOR UPDATE THE GRAPH FROM HERE 
const listItems = d3.select('.check-boxes')
    .select('ul')
    .selectAll('li')
    .data(years)
    // .filter(nodeData=> { console.log("Node data from filter",nodeData)})
    .enter()
    .append('li')
    .classed('list-item', true);


// uniqueArray = a.filter(function(item, pos) {
//     return a.indexOf(item) == pos;
// });
listItems.append('span')
    // .filter(data => data)
    .text(data => data);

listItems.append('input')
    .attr('type', 'checkbox')
    .attr('checked', true)
    .on('change', (dataPoint, index) => {
        // console.log("Year - ", dataPoint);
        // console.log("Index - ", index);
        // HERE WE NEED TO UPDATE OUR CHAT 
        if (unselectedYears.indexOf(dataPoint) === -1) {
            unselectedYears.push(dataPoint);
            console.log("unselected: ", dataPoint);
        } else {
            // CREATING A NEW ARRAY - SELECTED
            unselectedYears = unselectedYears.filter(id => id !== dataPoint);
            console.log("Selected: ", dataPoint);
        }
        selectedData = nodes.filter(d => unselectedYears.indexOf(d.cat) === -1);
        console.log("Unselected Years : ", unselectedYears);
        console.log("Selected data : ", selectedData);


        // selectedData = nodes.filter(d => d.cat !== 2012);

        drawGraph();
    });











/*

node.append('clipPath')
.attr('id', d => `clip-${d.id}`)
.append('use')
.attr('xlink:href', d => `#${d.id}`);

// display text as circle icon
node.filter(d => !String(d.icon).includes('img/'))
.append('text')
.classed('node-icon', true)
.attr('clip-path', d => `url(#clip-${d.id})`)
.selectAll('tspan')
.data(d => d.icon.split(';'))
.enter()
.append('tspan')
.attr('x', 0)
.attr('y', (d, i, nodes) => (13 + (i - nodes.length / 2 - 0.5) * 10))
.text(name => name);
*/

/*
node.append('title')
    .text(d => (d.cat + '::' + d.name + '\n' + format(d.value)));





let legendOrdinal = d3.legendColor()
    .scale(scaleColor)
    .shape('circle');


let legend = svg.append('g')
    .classed('legend-color', true)
    .attr('text-anchor', 'start')
    .attr('transform', 'translate(20,30)')
    .style('font-size', '12px')

    .call(legendOrdinal);

let sizeScale = d3.scaleOrdinal()
    .domain(['less use', 'more use'])
    .range([5, 10]);

let legendSize = d3.legendSize()
    .scale(sizeScale)
    .shape('circle')
    .shapePadding(10)
    .labelAlign('end');


let infoBox = node.append('foreignObject')
    .classed('circle-overlay hidden', true)
    .attr('x', -350 * 0.5 * 0.8)
    .attr('y', -350 * 0.5 * 0.8)
    .attr('height', 350 * 0.8)
    .attr('width', 350 * 0.8)
    .append('xhtml:div')
    .classed('circle-overlay__inner', true);

infoBox.append('h2')
    .classed('circle-overlay__title', true)
    .text(d => d.name);

infoBox.append('p')
    .classed('circle-overlay__body', true)
    .html(d => d.desc);


*/




/*
// FOR CLICKING ANY OF BUBBLE AND THAT WILL BE IN THE MIDDLE WITH SOME TEXT
node.on('click', (currentNode) => {
d3.event.stopPropagation();
console.log('currentNode', currentNode);
let currentTarget = d3.event.currentTarget; // the <g> el

if (currentNode === focusedNode) {
    // no focusedNode or same focused node is clicked
    return;
}
let lastNode = focusedNode;
focusedNode = currentNode;

simulation.alphaTarget(0.2).restart();
// hide all circle-overlay
d3.selectAll('.circle-overlay').classed('hidden', true);
d3.selectAll('.node-icon').classed('node-icon--faded', false);

// don't fix last node to center anymore
if (lastNode) {
    lastNode.fx = null;
    lastNode.fy = null;
    node.filter((d, i) => i === lastNode.index)
        .transition().duration(2000).ease(d3.easePolyOut)
        .tween('circleOut', () => {
            let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
            return (t) => {
                lastNode.r = irl(t);
            }
        })
        .on('interrupt', () => {
            lastNode.r = lastNode.radius;
        });
}

// if (!d3.event.active) simulation.alphaTarget(0.5).restart();

d3.transition().duration(2000).ease(d3.easePolyOut)
    .tween('moveIn', () => {
        console.log('tweenMoveIn', currentNode);
        let ix = d3.interpolateNumber(currentNode.x, centerX);
        let iy = d3.interpolateNumber(currentNode.y, centerY);
        let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
        return function (t) {
            // console.log('i', ix(t), iy(t));
            currentNode.fx = ix(t);
            currentNode.fy = iy(t);
            currentNode.r = ir(t);
            simulation.force('collide', forceCollide);
        };
    })
    .on('end', () => {
        simulation.alphaTarget(0);
        let $currentGroup = d3.select(currentTarget);
        $currentGroup.select('.circle-overlay')
            .classed('hidden', false);
        $currentGroup.select('.node-icon')
            .classed('node-icon--faded', true);

    })
    .on('interrupt', () => {
        console.log('move interrupt', currentNode);
        currentNode.fx = null;
        currentNode.fy = null;
        simulation.alphaTarget(0);
    });

});

*/



/*
// blur
d3.select(document).on('click', () => {
    let target = d3.event.target;
    // check if click on document but not on the circle overlay
    if (!target.closest('#circle-overlay') && focusedNode) {
        focusedNode.fx = null;
        focusedNode.fy = null;
        simulation.alphaTarget(0.2).restart();
        d3.transition().duration(2000).ease(d3.easePolyOut)
            .tween('moveOut', function () {
                console.log('tweenMoveOut', focusedNode);
                let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
                return function (t) {
                    focusedNode.r = ir(t);
                    simulation.force('collide', forceCollide);
                };
            })
            .on('end', () => {
                focusedNode = null;
                simulation.alphaTarget(0);
            })
            .on('interrupt', () => {
                simulation.alphaTarget(0);
            });

        // hide all circle-overlay
        d3.selectAll('.circle-overlay').classed('hidden', true);
        d3.selectAll('.node-icon').classed('node-icon--faded', false);
    }

    function update() {
        d3.selectAll(".checkbox").each(function (d) {
            cb = d3.select(this);
            grp = this.value;
            if (cb.property("checked")) {
                //	svg.filter(function(d) { return d.cat=this.value })
                // svg.selectAll("."+grp).transition().duration(1000).style("opacity", 1).attr("r", function(d){ return size(d.size) })
                var boxes = d3.selectAll("input.checkbox:checked");
                console.log(this.value)
                let node = svg.selectAll('.node')
                    .data(nodes)
                    .enter().append('g')
                    .filter(function (d) { return d.cat > 2012 })
                // .filter(function(d) { return d.cat = this.value  })
                //	let node = svg.selectAll('.node')
                //  	    .data(nodes)
                //    .enter().append('g')
                //  .filter(function(d) { return d.cat=this.value })
            }
        })
    }
    //update();
    // When a button change, I run the update function
    d3.selectAll(".checkbox").on("change", update);
});
*/



// update();
// MAIN D3 ENDS