import mongoose from "mongoose";
import auroIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    username:{
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    phone:{
        type: Number, 
        required: true
    },
});

auroIncrement.initialize(mongoose.connection);
userSchema.plugin(auroIncrement.plugin, 'user');
const user = mongoose.model('user', userSchema);
export default user;