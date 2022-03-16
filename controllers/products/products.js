const {response, request} = require('express');

const getProducts = (req = request, res = response) => {
    
    const productsData = [
        {
            name: 'PC Gamer NVIDIA BATTLEBOX ESSENTIAL',
            precio: 4879000,
            img: 'img1.jpg' 
        },
        {
            name: 'PC Gamer Titán V3',
            precio: 5399000,
            img: 'img2.jpg' 
        },
        {
            name: 'PC Gamer BATTLEBOX SUPER',
            precio: 699000,
            img: 'img3.jpg' 
        },
        {
            name: 'PC Gamer Ultra',
            precio: 799000,
            img: 'img4.jpg' 
        },
    ]

    res.status(200).json({
        msg: 'get products succes',
        products: productsData
    });
}


module.exports =  {
    getProducts
}