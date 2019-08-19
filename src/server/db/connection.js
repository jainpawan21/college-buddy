const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://rishu:rishu555@cluster0-uxdjs.mongodb.net/mernproject?retryWrites=true&w=majority');
module.exports=mongoose;