import mongoose from 'mongoose'
const Schema = mongoose.Schema

const product = new Schema(
  {
    imgURL: { type: String, required: true },
    name: { type: String, required: true },
    condition: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true }
    
  },
  { timestamps: true }
)

export default mongoose.model('products', Product)
