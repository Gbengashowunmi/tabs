const infos = [
    {
        heading: 'History',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet saepe impedit ab tempore rem incidunt non officia distinctio qui sint ratione eos corporis harum quia a necessitatibus pariatur rerum nobis veritatis atque placeat excepturi, laborum quasi repudiandae. Nemo, quasi! Voluptatum?'
    },
    {
        heading: 'Vision',
        details: 'consectetur adipisicing elit. Deserunt ab tempore accusantium itaque, voluptate aliquam magnam voluptatum dolor facilis ipsam corrupti veritatis dignissimos dolorem fuga minus ut, inventore impedit aliquid pariatur soluta alias tempora! Fuga illum aspernatur suscipit expedita delectus ex doloribus sapiente, explicabo adipisci? Rem delectus consequatur labore eius ullam! Laborum non corrupti, quae rerum labore et rem. Soluta.'
    },
    {
        heading: 'Goals',
        details: 'it amet consectetur adipisicing elit. Commodi veritatis illum fugit expedita esse ea odit ducimus dignissimos perspiciatis fugiat libero facere similique repellendus ipsa aliquid cupiditate est, repellat molestias velit? Quibusdam distinctio nihil, provident ex sequi et adipisci ea veritatis voluptatem cum consequatur minima.'
    }
]


const buttons = document.querySelectorAll('.btns')
const content = document.querySelector('.section-content');



//onload


// window.addEventListener('DOMContentLoaded', function(){
//     displayFrameItem
// })
//filter items

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // console.log('loaded');
    
        const about = e.currentTarget.dataset.id; 

        const aboutInfo = infos.filter(function(infor){
            if (infor.heading === about) {

                    return infor
            } 
            
        })
        displayFrameItem(aboutInfo)
    
    })
})

function displayFrameItem(infoss) {

    let displayItem = infoss.map(function(info){
    
        return `<h4>${info.heading}</h4>
        <p class="content">
            ${info.details}
        </p>`;
    })

    displayItem = displayItem.join('');
    content.innerHTML = displayItem;
    
}
