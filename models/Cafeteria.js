const mongoose=require('mongoose');
const geocoder=require('../utils/geocoder');
const CafeteriaSchema = new mongoose.Schema({
  cafeteriaId:{
        type:String,
        required :[true,'Please add a Cafeteria Id'],
        unique : true,
        trim:true,
        maxlength:[10, 'Cafeteria ID must be less than 10 chars']
    },
    address:{
        type:String,
        required:[true,'Please add an address']
    },
    location: {
        type: {
          type: String, 
          enum: ['Point']
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        },
        formattedAddress : String
      },
      createdAt:{
        type:Date,
        default:Date.now
      }
});

//Geocoder create location
CafeteriaSchema.pre('save', async function( next){
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates:[
      loc[0].longitude, loc[0].latitude],
    formattedAddress : loc[0].formattedAddress  
  }
  this.address=undefined;
  next(); 
});

module.exports = mongoose.model('Cafeteria',CafeteriaSchema);