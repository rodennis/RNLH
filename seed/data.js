import db from '../db/connection.js'
import Product from '../models/product.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {

  
   await Product.insertMany(products)
   console.log('Created users & products!')
 
   db.close()
 }
 
 insertData()
