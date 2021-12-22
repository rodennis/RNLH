import db from '../db/connection.js'
import Product from '../models/product.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
  await db.dropDatabase()

  const user1 = new User({
    username: 'temp',
    email: 'temp@gmail.com',
    password_digest: await bcrypt.hash('!$ecureP@ssw45!', 11)
  })

  await user1.save()

  const products = [
    {
      imgURL: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC70SUC181A021001.jpg",
      name: "2016 Subaru WRX Four Door",
      condition: "New",
      location: "Colorado",
      price: "25,000",
      description: "2016 Subaru WRX Four Door",
      },
  ]
  
   await Product.insertMany(products)
   console.log('Created users & products!')
 
   db.close()
 }
 
 insertData()
