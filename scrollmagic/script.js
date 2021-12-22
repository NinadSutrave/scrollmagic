function splitScroll() {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({

        duration: '400%',
        triggerElement: '.about',
        triggerHook: 0,

    })
    .setPin('.about')
    .addTo(controller);
}
splitScroll();

function pinText() {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({

        duration: '500%',
        triggerElement: '.pin-text',
        triggerHook: 0.45,

    })
    .setPin('.pin-text')
    .addTo(controller);
}
pinText();

let editorial = ['TWIN', 'SPEED DIALS', 'VOGUE', 'TOUGH LOVE', 'WALLPAPER']
let commissioned = ['AGMES', 'JIMMY CHOO', 'SUNSPEL', 'TOM FORD', 'MANHOLO BLAHNIK']

window.addEventListener('scroll', () => {
    const position = document.documentElement.scrollTop || document.body.scrollTop;    //scroll position
    const height = document.documentElement.clientHeight;    //height of page

    console.log(position);
    console.log(height);

    //calculating page number with scroll position and height of page
    const curr_page = Math.floor((1 + (position + (height)/2.0)/height));
    const pageno = document.getElementById('current_page');
    pageno.innerHTML = curr_page;   

    //if we are on page 1
    if(document.URL.includes("editorial.html")) {
        const text = document.getElementById('text');    
        for(let i = 1; i<=5; ++i) {
            if(curr_page == i) {
                text.innerHTML = editorial[i-1];
            }
        }
    }
    //if we are on page 2
    else {
        const text = document.getElementById('text');    
        for(let i = 1; i<=5; ++i) {
            if(curr_page == i) {
                text.innerHTML = commissioned[i-1];
            }
        }
    }
});

