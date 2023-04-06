const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')
const info = document.querySelector('#info');
const circle = document.querySelector('#circle')

// Add event listener

closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click', () => {
    if(closedFace.classList.contains('closed')) {
        closedFace.classList.add('active')
        openFace.classList.remove('active');
    }
}) ;

let data = [
    {
        name:'Kevin',
        instrument: 'guitarist',
        age: '36'
    },    {
        name:'Sarah',
        instrument: 'vocalist',
        age: '32'
    },    {
        name:'John',
        instrument: 'drummer',
        age: '20'
    },    {
        name:'Barry',
        instrument: 'bassist',
        age: '37'
    },    {
        name:'Hampton',
        instrument: 'keyboard player',
        age: '33'
    },    {
        name:'Joey',
        instrument: 'percussionist',
        age: '34'
    },
    
];



let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is the ' + item.instrument + ' and is ' + item.age + ' years old' + '</div>';
    
});

info.innerHTML = details.join('\n');



circle.addEventListener('mouseenter', () => {
    if(!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave', () => {
    if(circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});