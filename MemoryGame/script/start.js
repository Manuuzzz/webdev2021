function startgame() {
   
    
    const cardarray = [
        
        {
            name: 'fries',
            img: 'images/fries.png'
            
        },
        {
            name: 'fries',
            img: 'images/fries.png'
            
        },
        {
            name: 'fries',
            img: 'images/fries.png'
            
        },
        {
            name: 'fries',
            img: 'images/fries.png'
            
        },
        {
            name: 'fries',
            img: 'images/fries.png'
            
        },
        {
            name: 'fries',
            img: 'images/fries.png'
            
        },
        {
            name: 'fries',
            img: 'images/fries.png'
            
        },
        {
            name: 'fries',
            img: 'images/fries.png'
            
        },
        {
            name: 'fries',
            img: 'images/fries.png'
            
        },
        {
            name: 'fries',
            img: 'images/fries.png'
            
        },
        {
            name: 'fries',
            img: 'images/fries.png'
            
        },
        {
            name: 'fries',
            img: 'images/fries.png'
            
        }
    ]
    

    const gridbox = document.querySelector(".gridbox");
    createboard();

    function createboard() {

        for(i = 0; i < cardarray.length; i++) {

            var image = document.createElement('img');
            image.setAttribute('src', 'images/blank.png');
            image.setAttribute('width', '100px');
            image.setAttribute('height', '100px');
            gridbox.appendChild(image);
        }
   
    }

}