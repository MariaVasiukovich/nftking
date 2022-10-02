const topCreators = [
    {
        "avatar":"img/top-list/photo-Hibnastiar.png",
        "backgound":"img/top-list/bg-Hibnastiar.png",
        "name": "Hibnastiar",
        "works": 27300,
        "followed": true
    },
    {
        "avatar":"img/top-list/photo-Tukirin.png",
        "backgound":"img/top-list/bg-Tukirin.png",
        "name": "Tukirin",
        "works": 21600,
        "followed": false
    },
    {
        "avatar":"img/top-list/photo-Aksaraz.png",
        "backgound":"img/top-list/bg-Aksaraz.png",
        "name": "Aksaraz",
        "works": 14000,
        "followed": true
    },
    {
        "avatar":"img/top-list/photo-YukJum.png",
        "backgound":"img/top-list/bg-YukJum.png",
        "name": "Yuk Jum",
        "works": 11900,
        "followed": false
    },
    {
        "avatar":"img/top-list/photo-Hibnastiar.png",
        "backgound":"img/top-list/bg-Hibnastiar.png",
        "name": "5 Hibnastiar",
        "works": 29300,
        "followed": false
    },

    {
        "avatar":"img/top-list/photo-Aksaraz.png",
        "backgound":"img/top-list/bg-Tukirin.png",
        "name": "6 Aksaraz",
        "works": 14000,
        "followed": false
    },

    {
        "avatar":"img/top-list/photo-Tukirin.png",
        "backgound":"img/top-list/bg-Aksaraz.png",
        "name": "7 Tukirin",
        "works": 21600,
        "followed": false
    },

    {
        "avatar":"img/top-list/photo-Hibnastiar.png",
        "backgound":"img/top-list/bg-Hibnastiar.png",
        "name": "8 Hibnastiar",
        "works": 17300,
        "followed": true
    },

    {
        "avatar":"img/top-list/photo-Aksaraz.png",
        "backgound":"img/top-list/bg-Aksaraz.png",
        "name": "9 Aksaraz",
        "works": 22300,
        "followed": true
    },

    {
        "avatar":"img/top-list/photo-Tukirin.png",
        "backgound":"img/top-list/bg-Tukirin.png",
        "name": "10 Tukirin",
        "works": 31600,
        "followed": false
    },

    {
        "avatar":"img/top-list/photo-Aksaraz.png",
        "backgound":"img/top-list/bg-Aksaraz.png",
        "name": "11 Aksaraz",
        "works": 8600,
        "followed": true
    },
    {
        "avatar":"img/top-list/photo-Tukirin.png",
        "backgound":"img/top-list/bg-Hibnastiar.png",
        "name": "12 Tukirin",
        "works": 12600,
        "followed": false
    },

    {
        "avatar":"img/top-list/photo-Hibnastiar.png",
        "backgound":"img/top-list/bg-Tukirin.png",
        "name": "13 Hibnastiar",
        "works": 1600,
        "followed": true
    },

    {
        "avatar":"img/top-list/photo-Aksaraz.png",
        "backgound":"img/top-list/bg-Aksaraz.png",
        "name": "14 Aksaraz",
        "works": 19000,
        "followed": true
    },

    {
        "avatar":"img/top-list/photo-Tukirin.png",
        "backgound":"img/top-list/bg-Tukirin.png",
        "name": "15 Tukirin",
        "works": 21600,
        "followed": false
    },

    {
        "avatar":"img/top-list/photo-Aksaraz.png",
        "backgound":"img/top-list/bg-Aksaraz.png",
        "name": "16 Aksaraz",
        "works": 12000,
        "followed": true
    },

];

const popularCreators = [...topCreators];  //copy of data

const collectionWrapper = document.querySelector('.top-creators-wrapper');  //wrapper for the cards

function clearCards(){ //clear children 
    while(collectionWrapper.firstChild){
        collectionWrapper.removeChild(collectionWrapper.firstChild)
    }
} 

function createCreatorCards(arr){  //create cards
    clearCards();
    for (item in arr){
        const card = document.createElement('div');
        card.classList = 'col-md-3';
        const bgWrapper = document.createElement('div');
        bgWrapper.classList = 'creators-bg-wrapper';
        const bg = document.createElement('img');
        bg.src = arr[item].backgound;
        
        bgWrapper.appendChild(bg);
        card.appendChild(bgWrapper);
        const creatorsInfoWrapper = document.createElement('div');
        creatorsInfoWrapper.classList = 'creators-info-wrapper';
        const photoWrapper = document.createElement('div');
        photoWrapper.classList = 'creater-photo-wrapper';
        const creatorPhoto = document.createElement('img');
        creatorPhoto.src = arr[item].avatar;
        photoWrapper.appendChild(creatorPhoto);
        creatorsInfoWrapper.appendChild(photoWrapper);
        const creatorName = document.createElement('div');
        creatorName.innerHTML = arr[item].name;
        creatorName.classList = 'creator-name';
        creatorsInfoWrapper.appendChild(creatorName);
        const createrWorks = document.createElement('div');
        createrWorks.innerHTML = `${(arr[item].works/1000).toFixed(1)}K <span>Artwork</span>`;
        createrWorks.classList = 'creater-works';
        creatorsInfoWrapper.appendChild(createrWorks);
        card.appendChild(creatorsInfoWrapper);
        const btnWrapper = document.createElement('div');
        btnWrapper.classList = 'button-wrapper';
        const btn = document.createElement('a');
    
        if(arr[item].followed == true){
            const btnContent =  document.createElement('span');
            btnContent.innerHTML = 'Followed';
            btn.appendChild(btnContent);
            btn.classList = 'button no-bg followed';
            btnWrapper.appendChild(btn);
            creatorsInfoWrapper.appendChild(btnWrapper);
        } else {
            const btnContent =  document.createElement('span');
            btnContent.innerHTML = 'Follow';
            btn.appendChild(btnContent);
            btn.classList = 'button no-followed';
            btnWrapper.appendChild(btn);
            creatorsInfoWrapper.appendChild(btnWrapper);
        }
        
        collectionWrapper.appendChild(card);
    };
}

createCreatorCards(topCreators);  //create cards default
slideShow();

function slideShow(){
    $(".top-creators-wrapper").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        dotsClass: 'slider-dots',
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
          },
          {
            breakpoint: 520,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
          }
        ]
    });
}


$(()=>{

    // "Following" button clicked
    $('#following').on('click', function(){
        $(".top-creators-wrapper .col-md-3 .creators-info-wrapper .button-wrapper .no-followed").closest('.col-md-3').hide();
    });

    // "Popular" button clicked
    $('#popular').on('click', function(){
        popularCreators.sort((x,y) => y.works - x.works);
        createCreatorCards(popularCreators);
        $(".top-creators-wrapper").removeClass('slick-initialized slick-slider slick-dotted');
        slideShow();
    }); 

})


$('.no-followed').on('click', function(){
    $(this).addClass('no-bg followed');
    $(this).removeClass('no-followed');
    $(this).find('span').text('Followed');
})

$('.top-creators-wrapper .no-bg').on('click', function(){
    $(this).addClass('no-followed');
    $(this).removeClass('no-bg followed');
    $(this).find('span').text('Follow');
})