let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
// change sneaker
document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});
// change sneaker end

// nav bar start
const nav_bar =[
    {
        home: '<a href="../Home-page/index.html">Home</a>',
        item1: [
            {
                dropdown: ''
            },
        ],
    },
    {
        home: 'Products',
        item1: [
            {
                dropdown: '<a href="../sneaker/index.html">Sneakers</a>'
            },
            {
                dropdown: '<a href="../Shirt/index.html">T-shirt</a>'
            },
            {
                dropdown: '<a href="../Jersey/index.html">Jerseys</a>'
            },
            {
                dropdown: 'Pants'
            }
        ],
    },

    {
        home: 'Featured',
         item1: [
            {
                dropdown: ''
            },
        ],
    },
    {
        home: 'Review',
         item1: [
            {
                dropdown: ''
            },
        ],
    },

];
var text='';
for(let i in nav_bar){
    var dropItem1 = '';
    for (let menu_1 of nav_bar[i]['item1']) {
        dropItem1 += `
                        <li><a href="#">${menu_1['dropdown']}</a></li>
                      `;
    }
    // nav_bar.style.display = 'block';
    text +=`<li>     
                <a href="#">${nav_bar[i]['home']}</a>
                <div class="dropdown">
                    <ul>
                        ${dropItem1}
                    </ul>
                </div>
            </li>
    `;
}
document.getElementsByClassName('navbar')[0].innerHTML = `<ul>${text}</ul>`;
// nav bar end
