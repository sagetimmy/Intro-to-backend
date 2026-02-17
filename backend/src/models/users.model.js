import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({

      username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minlength: 3,
            maxlength: 30
      },
      password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 30

      },
      email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
  
      },
        
    timestamps: true

});
export default mongoose.model("User", userSchema);