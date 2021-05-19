const Cafeteria = require('../models/Cafeteria')

exports.getCafeterias = async (req, res, next) => 
{
    try {
        const cafeterias=await Cafeteria.find();
        return res.status(200).json({
            success:true,
            count:cafeterias.length,
            data:cafeterias
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error : 'Server error'})
    }
};

//Create 

exports.addCafeteria = async (req, res, next) => 
{
    try {
        const cafeteria = await Cafeteria.create(req.body);

        return res.status(200).json({
            success :true,
            data: cafeteria
        })
    } catch (err) {
        console.error(err);
        if(err.code === 11000){
            return res.status(400).json({error : 'This Cafeteria already exists'});

        }
        res.status(500).json({ error : 'Server error'})
    }
};
