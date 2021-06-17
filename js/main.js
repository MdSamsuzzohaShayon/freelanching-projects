// https://bl.ocks.org/HarryStevens/54d01f118bc8d1f2c4ccd98235f33848

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
    }
];

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const width = window.innerWidth, height = window.innerHeight;

const svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

const pack = d3.pack()
    .size([width, height])
    .padding(1.5);



function redraw(selectedData) {

    // transition
    // const t = d3.transition()
    //     .duration(750);

    // hierarchy
    const h = d3.hierarchy({ children: selectedData })
        .sum(d=>d.value)

    //JOIN
    const circle = svg.selectAll("circle")
        .data(pack(h).leaves(), function (d) { return d.data.name; });

    const text = svg.selectAll("text")
        .data(pack(h).leaves(), function (d) { return d.data.name; });

    //EXIT
    circle.exit()
        .style("fill", "#b26745")
        // .transition(t)
        .attr("r", 1e-6)
        .remove();

    text.exit()
        // .transition(t)
        .attr("opacity", 1e-6)
        .remove();

    // //UPDATE
    // circle
    //     .transition(t)
    //     .style("fill", "#3a403d")
    //     .attr("r", function (d) { return d.r })
    //     .attr("cx", function (d) { return d.x; })
    //     .attr("cy", function (d) { return d.y; })

    // text
    //     .transition(t)
    //     .attr("x", function (d) { return d.x; })
    //     .attr("y", function (d) { return d.y; });

    // //ENTER
    circle.enter().append("circle")
        .attr("r", 1e-6)
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; })
        .style("fill", "#fff")
        // .transition(t)
        .style("fill", "#45b29d")
        .attr("r", function (d) { return d.r });

    text.enter().append("text")
        .attr("opacity", 1e-6)
        .attr("x", d=>d.x)
        .attr("y", d=>d.y)
        .text(d=>d.data.name)
        // .transition(t)
        .attr("opacity", 1);
}




redraw(data);
d3.interval(function () {
    data.pop();
    redraw(data);
}, 1500);