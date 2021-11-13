function startgame() {
   
    
    const cardarray = [
        
        {
            name: 'blue',
            img: 'images/blue.png'
            
        },
        {
            name: 'blue',
            img: 'images/blue.png'
            
        },
        {
            name: 'brown',
            img: 'images/brown.png'
            
        },
        {
            name: 'brown',
            img: 'images/brown.png'
            
        },
        {
            name: 'colors',
            img: 'images/colors.png'
            
        },
        {
            name: 'colors',
            img: 'images/colors.png'
           
            
        },
        {
            name: 'gray',
            img: 'images/gray.png'
            
            
        },
        {
            name: 'gray',
            img: 'images/gray.png'
            
            
        },
        {
            name: 'green',
            img: 'images/green.png'
            
            
        },
        {
            name: 'green',
            img: 'images/green.png'
            
            
        },
        {
            name: 'stripes',
            img: 'images/stripes.png'
            
            
        },
        {
            name: 'stripes',
            img: 'images/stripes.png'
            
            
        }
    ]
    

    const gridbox = document.querySelector(".gridbox");
    createboard();

    var cardChosen = [];
    var cardChosenId = [];
    var score = 0;
    // if card is chosen is should not be flippable again.

    function createboard() {

        for(i = 0; i < cardarray.length; i++) {

            var image = document.createElement('img');
            image.setAttribute('src', 'images/blank.png');
            image.setAttribute('width', '100px');
            image.setAttribute('height', '100px');
            image.setAttribute('data-id', i);
            image.setAttribute('clickable', 'yes');
            image.addEventListener('click', flipcard);
            gridbox.appendChild(image);
        }
   
    }

    function checkForMatch() {

        var cards = document.querySelectorAll('img');
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];
        if (cardChosen[0] === cardChosen[1] && cardChosenId[0] != cardChosenId[1]) {
            
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].setAttribute('clickable', 'no');
            cards[optionTwoId].setAttribute('clickable', 'no');
            score += 1;

            if(score === 6) {

                alert("You won");
            }
        } else {

        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        }

        cardChosenId = [];
        cardChosen = [];
    }

    function flipcard() {
   
        if (this.getAttribute('clickable') == 'yes') {
        var imageId = this.getAttribute('data-id');
        
        cardChosen.push(cardarray[imageId].name);
        cardChosenId.push(imageId);
        this.setAttribute('src', cardarray[imageId].img);

        if (cardChosenId.length === 2) {
            setTimeout(checkForMatch, 500);
        }

        }


    }

}