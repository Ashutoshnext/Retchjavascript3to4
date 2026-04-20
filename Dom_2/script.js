fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>RenderData(data))

let container=document.querySelector('.container');


function RenderData(data){
data.map((item,index)=>{


    let card=document.createElement('div')
    card.setAttribute('class','card')


    let cardImage=document.createElement('img')
    cardImage.src=item.image;
    cardImage.setAttribute('class','card-image')

    let cardTitle=document.createElement('p')
    cardTitle.innerText=item.title
    cardTitle.setAttribute('class','card-title')

    card.append(cardImage,cardTitle)
    container.append(card)




    

})

}