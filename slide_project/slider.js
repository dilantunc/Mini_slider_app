var models  = [
    {
        name : 'iphone 15 pro max',
        image : 'AppleiPhone 15 Pro Max 256 GB Natürel Titanyum.webp',
        link : 'https://www.trendyol.com/apple/iphone-15-pro-max-256-gb-naturel-titanyum-p-762254847'
    },
    {
        name : 'Samsung Galaxy S23 Ultra',
        image : 'SamsungGalaxy S23 Ultra 512 GB Krem Cep Telefonu.webp',
        link : 'https://www.trendyol.com/samsung/galaxy-s23-ultra-256-gb-yesil-cep-telefonu-samsung-turkiye-garantili-p-635097872?boutiqueId=638145&merchantId=968'
    }, 
    {
        name : 'Samsung Galaxy S24 Ultra',
        image : 'SamsungGalaxy S24 Ultra 1 TB Titanyum Mor.webp',
        link : 'https://www.trendyol.com/samsung/galaxy-s24-ultra-1-tb-titanyum-mor-p-792557589?boutiqueId=61&merchantId=106636'
    }, 
    {
        name : 'Xiaomi Redmi Note 12 pro ',
        image : 'XiaomiRedmi 12 128 GB 8 GB RAM Gümüş Cep Telefonu.webp',
        link : 'https://www.trendyol.com/xiaomi/redmi-note-12-pro-5g-256-gb-8-gb-ram-beyaz-cep-telefonu-ithalatci-garantili-p-699456672?boutiqueId=61&merchantId=757052'
    }
];

var index = 0;
var slideCount = models.length;
var interval ;

var settings={
    duration : '1000',
    random : false
};

init(settings);


showSlide(index);

document.querySelector('.fa-arrow-circle-left').addEventListener('click'  , function(){
    index--;
    showSlide(index);
    console.log(index);
})
document.querySelector('.fa-arrow-circle-right').addEventListener('click'  , function(){
    index++;
    showSlide(index);
    console.log(index);
})

document.querySelectorAll('.arrow' ).foreach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
})
document.querySelectorAll('.arrow').foreach(function(item){
    item.addEventListener('mouseleave' , function(){
        init(settings);
    })

})

function init(settings){
    var prev;
    interval = setInterval(function(){
       if(settings.random){
        do{
            index = Math.floor(Math.random() *slideCount);
        }while(index == prev)
        prev = index ;
       }else{
        if(slideCount == index +1){
            index =  -1 ;
        }
        showSlide(index);
        console.log(index);
        index++;
       }
    },settings.duration)
}

function showSlide(i){
    index =  i ;
 if (i<0 ){
    index= slideCount -1;
 }
if(i >= slideCount){
    index= 0 ; 
}
  

 document.querySelector('.card-title').textContent = models[index].name;
 document.querySelector('.card-img-top').setAttribute('src', models[index].image);
document.querySelector('.product-link').setAttribute('href',models[index].link);


}









