fetch('./js/trending-db.json')
.then((resp)=>{
    return resp.json();
})
.then((data)=>{
    trending=data;
    console.log(trending);
    createTrandingCards(trending);  
    matchHeight();
})


const trendingWrapper = document.querySelector('.trending-images-wrapper');

function createTrandingCards(arr){
    for (item in arr){
        const card = document.createElement('div');
        card.classList = 'col-md-6';
        const imageWrapper = document.createElement('div');
        imageWrapper.classList = 'image-wrapper';
        const img = document.createElement('img');
        img.src = arr[item].image;
        imageWrapper.appendChild(img);
        card.appendChild(imageWrapper);

        const descriptionWrapper = document.createElement('div');
        descriptionWrapper.classList = 'description-wrapper';

        const description = document.createElement('div');
        description.classList = 'description';

        const leftContent = document.createElement('div');
        leftContent.classList = 'desription-left';

        const name = document.createElement('div');
        name.classList = 'description-name';
        name.innerHTML = arr[item].name;
        leftContent.appendChild(name);

        const author = document.createElement('div');
        author.innerHTML = '@'+arr[item].author;
        author.classList = 'description-author';
        leftContent.appendChild(author);

        const price = document.createElement('div');
        price.innerHTML = arr[item].price+' ETH';
        price.classList = 'description-price';
        leftContent.appendChild(price);
        description.appendChild(leftContent);

        const rightContent = document.createElement('div');
        rightContent.classList = 'description-right';
        
        const button = document.createElement('a');
        button.innerHTML = 'Collect Now';
        button.classList = 'button';
        rightContent.appendChild(button);
        description.appendChild(rightContent);
        descriptionWrapper.appendChild(description);
        card.appendChild(descriptionWrapper);
        trendingWrapper.appendChild(card);
    }
}


//Fix height of names of the card's list
function matchHeight(){
    $('.trending .container .row .col-md-12 .col-md-6 .description-wrapper .description .desription-left div.description-name').matchHeight(
        {
            byRow: false,
            property: 'height',
            remove: false
        }
    );
}
