new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['section1', 'section2', 'section3'],
    navigationTooltips: ['About Me', 'Projects', 'Contact'],
    showActiveTooltip: true
});

var downArrows = document.getElementsByClassName('arrow-down');
var upArrows = document.getElementsByClassName('arrow-up');

for (let i = 0; i < downArrows.length; i++) {
    TweenMax.to(downArrows[i], 1, {
        'scale': 1
    });

    var tl = new TimelineMax({ repeat: 25 });

    tl.to(downArrows[i], 1, {
        'opacity': 0.5
    }, 1)
    .to(downArrows[i], 1, {
        'opacity': 1
    }, 2);


}

for (let i = 0; i < upArrows.length; i++) {
    TweenMax.to(upArrows[i], 1, {
        'scale': 1
    });

    var tl2 = new TimelineMax({ repeat: 25 });

    tl2.to(upArrows[i], 1, {
        'opacity': 0.5
    }, 1)
        .to(upArrows[i], 1, {
            'opacity': 1
        }, 2);


}

