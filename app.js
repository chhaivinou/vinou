// const url=("https://fakestoreapi.com/products/6");
const url=("https://fakestoreapi.com/products?limit=5");
var text='';
const fetchData=async()=>{
    const resposes =await fetch(url);
    const data=await resposes.json();
    try{
        const resposes =await fetch(url);
        const data=await resposes.json();
        for(let item of data){
        
        text +=`
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h1>${item.title}</h1>
                <h3>${item.price}</h3>
                <h3>${item.category}</h3>
                <h3>${item.rating['rate']}</h3>
            </div>
        </div>
        `;

        }
        document.getElementsByClassName('container')[0].innerHTML=text;
    }catch(err){
        console.log(err);
    }
    
}
fetchData();
