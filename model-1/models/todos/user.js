import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,  // use for unique 'username'
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      lowercase: true,
    },
    password: {
      type: String,  
      required: true,
    },
  },
  { timestamps: true } // use for stoge time create data time and update data time
);

export const User = mongoose.model('User', userSchema);  // 'User' in mongo look like 'users'
// all char in small and at end s is concate
