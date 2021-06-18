# D3 js
### D3 Dom Manipulation
 - List method
```
    d3.format(',d')
    d3.pack()
    d3.forceCollide(d => d.r + 1)
    d3.forceSimulation()
    d3.hierarchy({ children: data })
    d3.legendColor()
    .scale(scaleColor)
    .filter(function(d) { return d.value > 50  })
    .tween
    .shape('circle')
    .call(legendOrdinal)
     d3.scaleOrdinal()
    .domain(['less use', 'more use'])
    .range([5, 10])
    .html(d => d.desc)
    d3.event.stopPropagation()
```


 - Group is not deleting properly 