const {response, request} = require('express');

const getProducts = (req = request, res = response) => {
    
    const productsData = [
        {
            name: 'PC Gamer NVIDIA BATTLEBOX ESSENTIAL',
            precio: 4879000,
            img: 'https://gtech.systems/wp-content/uploads/2016/03/11-e1558743296579-400x400.png' 
        },
        {
            name: 'PC Gamer Titán V3',
            precio: 5399000,
            img: 'https://gtech.systems/wp-content/uploads/2016/03/pc-gamer-titan-v2-intel-8va-gen-nvidia-gtx-1060-3gb-8gb-ram-1tb_iZ84XvZgrandeXpZ1XfZ63153024-51035998895-4XsZ63153024xIM1-400x400.jpg' 
        },
        {
            name: 'PC Gamer BATTLEBOX SUPER',
            precio: 699000,
            img: 'https://gtech.systems/wp-content/uploads/2019/10/SPIDERtrans-400x400.png' 
        },
        {
            name: 'PC Gamer Ultra',
            precio: 799000,
            img: 'https://gtech.systems/wp-content/uploads/2020/02/3a-Copiar-400x400.png' 
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