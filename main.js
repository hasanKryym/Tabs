info = [
    {
        title: 'History',

        text: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
    },
    {
        title: 'Vision',

        text: "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal."
    },
    {
        title: 'Goals',

        text: "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones."
    },
];
window.onload = content
btns = document.querySelectorAll('.btn');
text = document.querySelector('.text');
// let selected = false;
// btns.forEach(btn =>{
//     // console.log(btn.id);
//     btn.addEventListener(e=>{
//         e.classList.add('selected');
//         let id = btn.id;
//         content(id);
        
//     })
// })

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        remove();
        let id = e.target.id;
        e.target.classList.add('selected')
        content(id);
    })
})

function remove() {
    btns.forEach(function(btn){
        btn.classList.remove('selected');
    })
}

function content(id) {
    
    let i = 0;
    if (id == 'history'){
        i=0;
    }
    else if(id == 'vision'){
        i=1;
    }
    else if(id == 'goals') {
        i=2;
    }
    else{
        i=0;
    }
    value = `
        <h4>${info[i].title}</h4>
            <p>
              ${info[i].text}
            </p>
    `;
    text.innerHTML = value;
}