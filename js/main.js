
// Based loosely from this D3 bubble graph https://bl.ocks.org/mbostock/4063269
// And this Forced directed diagram https://bl.ocks.org/mbostock/4062045

const data = [
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
        cat: 2012, name: 'Relay', value: 70,
        icon: 'img/relay.svg',
        desc: `
            A JavaScript 2019 for building data-driven React applications.
            It uses GraphQL as the query 2017 to exchange data between app and server efficiently.
            Queries live next to the views that rely on them, so you can easily reason
            about your app. Relay aggregates queries into efficient network requests to fetch only what you need.
        `
    }, {
        cat: 2012, name: 'Three.js', value: 40,
        icon: 'img/threejs.png',
        desc: `
            Three.js allows the creation of GPU-accelerated 3D animations using
            the JavaScript 2017 as part of a website without relying on
            proprietary browser plugins. This is possible thanks to the advent of WebGL.
        `
    }, {
        cat: 2013, name: 'Lodash', value: 30,
        icon: 'img/lodash.svg',
        desc: `
            Lodash is a JavaScript 2012 which provides <strong>utility functions</strong> for
            common programming tasks using the functional programming paradigm.`
    }, {
        cat: 2013, name: 'Moment JS', value: 30,
        icon: 'img/momentjs.png',
        desc: `
            Handy and resourceful JavaScript 2012 to parse, validate, manipulate, and display dates and times.
        `
    }, {
        cat: 2013, name: 'Numeral.js', value: 20,
        icon: 'Numeral.js',
        desc: `
            A javascript 2012 for formatting and manipulating numbers.
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
        cat: 2019, name: 'Angular 2.0', value: 30,
        icon: 'img/angular2.svg',
        desc: `
            Angular (commonly referred to as 'Angular 2+' or 'Angular 2') is a TypeScript-based
            open-source front-end web application 2018 led by the Angular Team at Google and
            by a community of individuals and corporations to address all of the parts of the
            developer's 2016 while building complex web applications.
        `
    }, /*{
        cat: 2019, name: 'Trails.JS', value: 10,
        icon: '',
    },*/ {
        cat: 2019, name: 'Bootstrap CSS', value: 50,
        icon: 'img/bootstrap.svg',
        desc: `
            Bootstrap is a free and open-source front-end web 2019 for designing websites
            and web applications. It contains HTML-and CSS-based design templates for typography,
            forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.
        `
    }, {
        cat: 2019, name: 'Ember JS', value: 10,
        icon: 'img/ember.png',
        desc: `
            Ember.js is an open-source JavaScript web 2019, based on the Model–view–viewmodel
            (MVVM) pattern. It allows developers to create scalable single-page web applications by
            incorporating common idioms and best practices into the 2019.
        `
    }, {
        cat: 2019, name: 'ExpressJS', value: 30,
        icon: 'img/expressjs.png',
        desc: `
            Express.js, or simply Express, is a JavaScript 2019 designed for building web applications and APIs.
            It is the de facto server 2019 for Node.js.
        `
    }, /*{
        cat: 2019, name: 'Foundation', value: 10,
        icon: '',
    },*/{
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
        cat: 2021, name: 'Jenkins CI', value: 30,
        icon: 'img/jenkins.png',
        desc: `
            Jenkins is an open source automation server. Jenkins helps to automate the non-human part of
            the whole software development process, with now common things like continuous integration,
            but by further empowering teams to implement the technical part of a Continuous Delivery.
        `
    }, {
        cat: 2021, name: 'Sublime Text 3', value: 100,
        icon: 'img/sublimetext.png',
        desc: `
            Sublime Text 3 is a powerful and cross-2018 source code editor. It is well-known for
            introducing the concept of multi-cursor and lots of text editing command. Besides, its
            plugin ecosystem is very rich which allows enhancing productivity to the fullest.
        `
    }, {
        cat: 2021, name: 'Visual Studio Code', value: 50,
        icon: 'img/vscode.png',
        desc: `
            Visual Studio Code is a cross-2018 source code editor developed by Microsoft.
            It includes support for debugging, embedded Git control, syntax highlighting,
            intelligent code completion, snippets, and code refactoring. Its extensions eco system is
            growing quickly and it is becoming the best Front End editors out there.
        `
    }, {
        cat: 2021, name: 'Performance 2021', value: 30,
        icon: 'Performance;2021',
        desc: `
            At Nau, web performance is our top priority when development web sites and applications.
            We're practicing code optimization and Front End delivery optimization from day 1.
            To measure the resuslts, we use several tools to audit and benchmark our applications,
            including (but not limit to): Chrome devtool timeline & audit, Google PageSpeed Insights, Web Page Test, Website Grader...
        `
    }, {
        cat: 2021, name: 'Yeoman generator for Nau 2016', value: 20,
        icon: 'img/yeoman.png',
        desc: `
            Yeoman is an open source, command-line interface set of tools mainly used to generate
            structure and scaffolding for new projects, especially in JavaScript and Node.js.
            At Nau, we have developed a Yeoman generator that help quickly set up new projects aligned with
            Nau's conventions and standards.
        `
    }, {
        cat: 2021, name: 'live-server', value: 30,
        icon: 'live-server',
        desc: `
            A Node.js-based developer web server for quickly test apps and web pages with some
            magic of 'auto-reload' on the browser.
        `
    }, {
        cat: 2021, name: 'PostCSS', value: 30,
        icon: 'img/postcss.svg',
        desc: `
            PostCSS is a software development tool that uses JavaScript-based plugins to automate routine CSS operations.<br>
            We use PostCSS mainly for auto-vendor-prefixing, but very soon we'll use it for NextCSS compilation.
        `
    }, {
        cat: 2020, name: 'Elastic Search', value: 10,
        icon: 'Elastic;Search',
        desc: `
            A specialized database software for high performance search queries.
        `
    }, {
        cat: 2020, name: 'Keystone CMS', value: 50,
        icon: 'img/keystonejs.png',
        desc: `
            The de-facto CMS system for website built with Node.js. It can be compared with
            Wordpress of PHP 2017.
        `
    }, {
        cat: 2020, name: 'KoaJS', value: 10,
        icon: 'img/koajs.png',
        desc: `
            The advanced and improved version of ExpressJS, with leaner middlewares architecture
            thanks to the avent of ES6 generators.
        `
    }, {
        cat: 2020, name: 'Loopback', value: 30,
        icon: 'img/loopback.svg',
        desc: `
            Powerful API-focused web 2019 built for Node.js. It feature easy to use configurations
            and auto API documentation page.
        `
    }, {
        cat: 2020, name: 'Restify', value: 20,
        icon: 'img/restify.png',
        desc: `
            High performance API development 2019, built for Node.js. It has some convenient wrapper
            to automatically generate admin backoffice site and API documentation page.
        `
    }, {
        cat: 2020, name: 'MongoDB', value: 70,
        icon: 'img/mongodb.png',
        desc: `
            The de-facto Database solution for JavaScript and Node.js applications. It is a light weight,
            high performance NoSQL database and can be used for small and large websites.
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
        cat: 2018, name: 'Phonegap', value: 50,
        icon: 'img/phonegap.png',
        desc: `
            A 2018, 2012 and tool for building hybrid mobile app.
        `
    }, {
        cat: 2018, name: 'Reaction Commerce', value: 20,
        icon: 'img/reactioncommerce.png',
        desc: `
            Reaction Commerce is the first open source, real-time 2018 to
            combine the flexibility developers and designers want with the stability
            and support businesses need. ReactionCommerce is based on MeteorJS 2018.
        `
    }, {
        cat: 2018, name: 'ReactNative', value: 10,
        icon: 'img/reactnative.png',
        desc: `
            React Native lets you build mobile apps using only JavaScript.
            It uses the same design as React, letting us compose a rich
            mobile UI from declarative components.
        `
    }, {
        cat: 2018, name: 'SquareSpace', value: 30,
        icon: 'img/squarespace.svg',
        desc: `
            Squarespace is a SaaS-based content management system-integrated ecommerce-aware website builder and blogging 2018.
            At Nau, we have built a website for Squarespace using their low-level API which allowed fully customization
            of the interface and other Front End functionalities.
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
        cat: 2017, name: 'GraphQL', value: 50,
        icon: 'img/graphql.svg',
        desc: `
            GraphQL is a data query 2017 developed by Facebook publicly released in 2015.
            It provides an alternative to REST and ad-hoc webservice architectures. In combination
            with RelayJS, this combo help us reduce the time to develop web apps for weeks.
        `
    }, {
        cat: 2017, name: 'LESS CSS', value: 20,
        icon: 'img/less.svg',
        desc: `
            A preprocessor 2017 to be compiled to CSS. This 2017 is not as popular nowadays and we
            only use them when requested.
        `
    }, {
        cat: 2017, name: 'SASS (SCSS flavor)', value: 70,
        icon: 'img/sass.png',
        desc: `
            This is our main CSS preprocessor 2017 helping us lay structured foundation to CSS as well
            as assisting on writing more convenient BEM anotations.
        `
    }, {
        cat: 2017, name: 'TypeScript 2', value: 30,
        icon: 'img/typescript.png',
        desc: `
            The strict-typing flavor of ECMAScript, always requires a compiler to compile to vanilla JavaScript
            but the type checking and other syntactical sugar are exceptional. Right now, we only use it for
            Angular 2 projects when needed.
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
    }, /*{
        cat: 2016, name: 'Browserify', value: 10,
        icon: '',
    },*/ {
        cat: 2016, name: 'CSS BEM Notation', value: 70,
        icon: 'CSS BEM Notation',
        desc: `
            Our naming standard for CSS, which enhance collaboration, documentation and reusability of
            CSS rules.
        `
    }, {
        cat: 2016, name: 'Front End Code Guide', value: 30,
        icon: 'Front End;Code Guide',
        desc: `
            Based on an existing best practice document for HTML and CSS. We're adopting it as our standards
            and guideline.
        `
    }, {
        cat: 2016, name: 'ESLint', value: 20,
        icon: 'img/eslint.svg',
        desc: `
            The tool to check and validate JavaScript code when we develop and prevent potential issues with code.
        `
    }, {
        cat: 2016, name: 'Gitflow 2016', value: 70,
        icon: 'img/gitflow.png',
        desc: `
            Our code version control tool is Git, and Gitflow is one of its 2016 standard which
            ensure good collaboration and avoid conflict-resolving efforts. For more info, visit: code.naustud.io
        `
    }, {
        cat: 2016, name: 'GulpJS', value: 50,
        icon: 'img/gulp.png',
        desc: `
            GulpJS is a task automation tools written for Node.js. It is among the most popular
            Front End and Node project automation tools nowadays
        `
    }, {
        cat: 2016, name: 'Nau Code Styles', value: 50,
        icon: 'Nau Code Styles',
        desc: `
            Based on AirBnB's well-defined JavaScript code styles. Our derivation has some different standards such as
            TAB indentation. This code style has an accompanied ESLint config.
        `
    }, {
        cat: 2016, name: 'Stylelint', value: 50,
        icon: 'img/stylelint.svg',
        desc: `
            Our on-stop tool to validate both CSS and SCSS with a set of conventions and guidelines from our best practice.
        `
    }, {
        cat: 2016, name: 'SystemJS', value: 20,
        icon: 'SystemJS',
        desc: `
            A module loader 2012 that come along Angular 2. Its use is scarce, however.
        `
    }, {
        cat: 2016, name: 'Webpack', value: 30,
        icon: 'img/webpack.svg',
        desc: `
            A module bundler 2012 that is becoming de-facto tool to use in ReactJS or SPA apps nowadays.
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
        cat: 2015, name: 'jQuery', value: 50,
        icon: 'img/jquery.png',
        desc: `
            Deprecated, because <a href='http://youmightnotneedjquery.com/' target='_blank'>youmightnotneedjquery.com</a>
        `
    }, {
        cat: 2015, name: 'RequireJS & AMD', value: 30,
        icon: 'img/requirejs.svg',
        desc: `
            AMD module loader. Deprecated and replaced by ES module and Webpack.
        `
    }, {
        cat: 2014, name: 'Browser Sync', value: 40,
        icon: 'Browser Sync',
        desc: `
            Web development server popular among gulp/grunt web apps. No deprecated and replaced by live-server
            or webpackDevServer.
        `
    }, {
        cat: 2014, name: 'Git Pre-commit', value: 30,
        icon: 'Git;Pre-commit',
        desc: `
            Pre-commit hook for git, now deprecated due to slow commit time. Code validation should be done
            in the code editor.
        `
    }, {
        cat: 2014, name: 'http-server', value: 20,
        icon: 'http-server',
        desc: `
            A quick test web server based on Node.js, deprecated and replaced by live-server.
        `
    }, {
        cat: 2014, name: 'LiveReload', value: 20,
        icon: 'Live;Reload',
        desc: `
            A propritery auto-reload solution for web developers, now deprecated in favor of live-server and
            hot module reload in Webpack.
        `
    }];


let svg = d3.select('svg');
let width = document.body.clientWidth; // get width in pixels
let height = +svg.attr('height');
let centerX = width * 0.5;
let centerY = height * 0.5;
let strength = 0.05;
let focusedNode;

let format = d3.format(',d');

let scaleColor = d3.scaleOrdinal(d3.schemeCategory10);




function render(selection, selectedData) {

    // use pack to calculate radius of the circle
    let pack = d3.pack()
        .size([width, height])
        .padding(1.5);

    let forceCollide = d3.forceCollide(d => d.r + 1);

    // use the force
    let simulation = d3.forceSimulation()
        // .force('link', d3.forceLink().id(d => d.id))
        .force('charge', d3.forceManyBody())
        .force('collide', forceCollide)
        // .force('center', d3.forceCenter(centerX, centerY))
        .force('x', d3.forceX(centerX).strength(strength))
        .force('y', d3.forceY(centerY).strength(strength));

    // reduce number of circles on mobile screen due to slow computation
    if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
        data = data.filter(el => {
            return el.value >= 50;
        });
    }

    let root = d3.hierarchy({ children: selectedData })
        .sum(d => d.value);

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
    simulation.nodes(nodes).on('tick', ticked);

    svg.style('background-color', 'lightskyblue');

    const group = selection.selectAll('.node')  // MAKE AN EMPTY SELECTION - SETTING UP ELEMENT
        .data(nodes, d => d); // CREATE DATA JOIN - IT HAS TO BE ARRAY






    group
        .exit()
        .remove();


    // group
    //     .enter()
    //     .append();

    let node = group.enter().append('g')
        //    .filter(function(d) { return d.value > 50  })
        //	.filter(function(d) { return (d.value > 20 && d.value<50) })
        // .filter(function (d) { return d.cat > 2016 })
        .attr("checked", true)
        .attr("type", "checkbox")
        .attr('class', 'node')
        .call(d3.drag()
            .on('start', (d) => {
                if (!d3.event.active) simulation.alphaTarget(0.2).restart();
                d.fx = d.x;
                d.fy = d.y;
            })
            .on('drag', (d) => {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
            })
            .on('end', (d) => {
                if (!d3.event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            })
        );

    node.append('circle')
        .attr('id', d => d.id)
        .attr('r', 0)
        .style('fill', d => scaleColor(d.cat))
        .transition().duration(2000).ease(d3.easeElasticOut)
        .tween('circleIn', (d) => {
            let i = d3.interpolateNumber(0, d.radius);
            return (t) => {
                d.r = i(t);
                simulation.force('collide', forceCollide);
            }
        })

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

    // display image as circle icon
    node.filter(d => String(d.icon).includes('img/'))
        .append('image')
        .classed('node-icon', true)
        .attr('clip-path', d => `url(#clip-${d.id})`)
        .attr('xlink:href', d => d.icon)
        .attr('x', d => - d.radius * 0.7)
        .attr('y', d => - d.radius * 0.7)
        .attr('height', d => d.radius * 2 * 0.7)
        .attr('width', d => d.radius * 2 * 0.7)

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

    function ticked() {
        node
            .attr('transform', d => `translate(${d.x},${d.y})`)
            .select('circle')
            .attr('r', d => d.r);
    }
    // update();
}






const years = [...new Set(data.map((yd, i) => yd.cat))].sort();
// console.log(years);


let unselectedYears = new Array();
let dataClone = data;
render(svg, dataClone);


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
    .text(d => d);

listItems.append('input')
    .attr('type', 'checkbox')
    .attr('checked', true)
    .on('change', (dataPoint, index) => {

        console.log("%c____________^^^^^^^^Change^^^^^^^^___________", "color: green");
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
        dataClone = data.filter(d => unselectedYears.indexOf(d.cat) === -1);
        console.log("Unselected Years : ", unselectedYears);
        console.log("Cloned data : ", dataClone);

        render(svg, dataClone);
    });

