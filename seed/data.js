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
    //Clothing
    {
      imgURL: "https://i.ebayimg.com/images/g/Uy0AAOSwZK5gk38W/s-l1600.jpg",
      name: "Canada Goose Jacket",
      condition: "Lightly Worn",
      location: "Brooklyn, NY",
      price: "$600",
      description: "Women's Navy Blue Canada Goose Jacket - Size 2"
    },
    {
      imgURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHl-hKly12E3P8itlZ5ez7rkn5EKZmJGEgyDQTrn90XqTr67OV7AN9vKSphJOIVNHX7emJRq_fgD3zewR6_fOAfAaERUptWOCWlUstNDA&usqp=CAY",
      name: "Polo Ralph Lauren Puffer Jacket",
      condition: "Barely Worn",
      location: "Harrisburg, PA",
      price: "$310",
      description: "Men's Navy Blue Polo Ralph Lauren Puffer Jacket - Size: L"
    },
    {
      imgURL: "https://di2ponv0v5otw.cloudfront.net/posts/2021/12/11/61b4fb04efd0e41a9cccd520/m_wp_61b4fb0b3a0db9c12a41c8de.webp",
      name: "Amiri Jeans",
      condition: "Barely Worn",
      location: "Queens, NY",
      price: "$450",
      description: "Men's Light Blue Wash Amiri Jeans - Size: Waist 38"
    },
    {
      imgURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXy_YF-w5tgqp0Z1DdrHY0gljYklCh-lgPIb864YywkxhjZow3TYQXT2CeVYjqW3TnXqvuZ684eJxoaKq_25cmB7gNXVl3T5bPIUx8X1kErmWNesfBmm4nag&usqp=CAY",
      name: "Burberry Shirt",
      condition: "Lightly Worn",
      location: "Boston, MA",
      price: "$120",
      description: "Men's Light Blue Checkered Burberry Shirt - Size: M"
    },
    {
      imgURL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEwKoIinzsfWa0lmvmPyJwn3mM2ptYpw6v7djEK7lph1xsjLm1ExL1De0Vh8b2eY4dnVDX3AW8-GzFNO8yGwLZzURIRTLYQthVfX5he8Q&usqp=CAY",
      name: "G-Star Jeans",
      condition: "Worn",
      location: "Miami, FL",
      price: "$75",
      description: "Women's Dark Blue G-Star Jeans - Size: 27"
    },
    {
      imgURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTzZCAE7_frXMIbURqbFQp22Q-GePHj5s_1dKaN23hsbWeB_zh75HwppbjJYaEcM238MmrlKyJBxDJi9vAH7ELzRdMl-aKj7QMhp1Ibic&usqp=CAY",
      name: "Givenchy Top",
      condition: "Barely Worn",
      location: "Los Angeles, CA",
      price: "$425",
      description: "Women's Blue, Red & White Givenchy Top - Size: S"
    },
    {
      imgURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZLldCn0Fi2smzsYj5sLSUvbSsXa_ndoQ5zt8EVUtU_wRBYyLpSQDNmK7G1CioeU8BQ0hJFKafIwoD46hwEpf6v0wVMKUn_4FRmFrd2oA&usqp=CAY",
      name: "Off White Sweater",
      condition: "Lightly Worn",
      location: "Detroit, MI",
      price: "$345",
      description: "Men's White Off White Sweater - Size: L"
    },
    {
      imgURL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStxDOfG4xi9B1Y3MDH2yerdfg86ezOxYcKWJAGRYoMbJw0j4WT3BAoS4Egp0BLMXip2aSDFz4op3iLuVQWF7Y549l0ZPBJ-GEw1VSyDh12&usqp=CAYA",
      name: "Alexander McQueen Sweater",
      condition: "Worn",
      location: "Chicago. IL",
      price: "$150",
      description: "Women's Light Grey Cashmere Alexander McQueen Sweater - Size: XS"
    },
    {
      imgURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTVUnG-JPjrBa2px-pHnmbD6CTp02N3BaVVykqTx76qZmBxOrIVL5B5f-COLJ7kXL5-bUGGM03ThEl5dpFFFfKTt0P3cPOqE8jL5C2MLzE&usqp=CAY",
      name: "Gucci Belt",
      condition: "Lightly Worn",
      location: "Las Vegas, NV",
      price: "$450",
      description: "Women's Black Gucci Belt - Size: OS"
    },
    {
      imgURL: "https://u-mercari-images.mercdn.net/photos/m68794704332_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1606240697",
      name: "Hermes Belt",
      condition: "Worn",
      location: "Portland, OR",
      price: "$480",
      description: "Men's Black Hermes Belt - Size: OS"
    },
//Games
    {
      imgURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqKc7YKXc1cPVcAR62Sn_UvM5A6TlHFvBVUpC68AzTnXRNavTDq02cbaQBgweDnlSeiqPbqDwDnRpUc91ePUK9DDiV7Z8XeGk-JCPkrTE&usqp=CAY",
      name: "Mortal Kombat",
      condition: "Used",
      location: "Austin, TX",
      price: "$15",
      description: "PS4 Video Game"
    },
    {
      imgURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRDCf5-7MhXy1IbH2FAwe-YsRaH0GhgtFcLtHBhe2PSu3srXdmVQvC4_95NOnR9OspeOBY1nGOWZNdinV7_sKRH1JjF9d_wxktvfS9YAw&usqp=CAY",
      name: "The Legend of Zelda - Breath of the Wild",
      condition: "Used",
      location: "San Diego, CA",
      price: "$27",
      description: "Nintendo Switch Video Game"
    },
    {
      imgURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8A7-xbeU-X9Wtymtyv9KKmh6lJb5LB5Ycy0BqmVORdryrrLvEgJhNoL_H9kzig_6GvhCqVEgSxmEhsGSbhBd1b168BkkbFX2HsOXmUqw&usqp=CAY",
      name: "Super Smash Bros. Brawl",
      condition: "Used",
      location: "Denver, CO",
      price: "$17",
      description: "Nintendo Wii Video Game"
    },
    {
      imgURL: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQOAPcIPPr34WJqaKKk1EGlH-9Ebk5nubJTxoGHaZ8yTrQP4QzqDUEkZ0PjpaQDzsbFg4Hp8AUcN8-3J6rIvmuwq_6tfJXfHq7i0Az0eWR&usqp=CAY",
      name: "Assasins Creed Valhalla",
      condition: "Used",
      location: "Atlanta, GA",
      price: "$14",
      description: "PS5 Video Game"
    },
    {
      imgURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTitDleWZPEPYYiuDTjfA988YUlLDShNieKax39rKqRcyP50o5aWoYe-1qYDOrq07lRwC5zstJKZ-ssWwCZsoU-RTYm5ni0rzulTX2tlC6URJcZFOA6iP7lwg&usqp=CAY",
      name: "Crash Bandicoot N. Sane Trilogy",
      condition: "Used",
      location: "Columbus, OH",
      price: "$20",
      description: "XBOX ONE Video Game"
    },
    {
      imgURL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQL9xtkwO2zzQAzBsfeU8wJmZWITt_DYh1ygILtgmYA3s9Sgbh8YwcndaHuO-gnHbrtoXZm7yUYY1drgbVMARK4uPiN6gtzeT6CGg_2YYRUAwbRUolREpMsYw&usqp=CAY",
      name: "Monopoly",
      condition: "Used",
      location: "Buffalo, NY",
      price: "$8",
      description: "Board Game"
    },
    {
      imgURL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ45Euj2erl9Kdy4EGJ1H8HAU7gfn26AtLB3UQ3mit8PX6t55we4cyD4GmXcHRU0f352GUcxZfBosdGnK3cTyHV8L1roQU7QTgOL7AZ1iVY4LpOKVNb0AVpCQ&usqp=CAY",
      name: "Life",
      condition: "Used",
      location: "San Francisco, CA",
      price: "$12",
      description: "Board Game"
    },
    {
      imgURL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSl5yfsHn_UyFG1-1gRR0ur5KtOqE48OOGYB5230eNcOL72Hb3VCRK2BxKDcWtTwI1SLSrwMGNH6H8opGa54OtHjWOalllsn5E2GEIWc0Edli-SowYFFem6&usqp=CAY",
      name: "12 in 1 Classic Games",
      condition: "Used",
      location: "Santa Fe, NM",
      price: "$20",
      description: "Board Game"
    },
    {
      imgURL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzHUm9rqAU_YtnUi0oVMBQnwtmW_AI5XrZnqZw0qoprT2L1-i4dTwBmLl0sK5seyF5Be1bF5hBMEN3gzvElBh7hpeYcTMw0-Sou6BqYVT56goj1aXa9HO9&usqp=CAY",
      name: "Trouble",
      condition: "Used",
      location: "Reno, NV",
      price: "$10",
      description: "Board Game"
    },
    {
      imgURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSm_bT2OG0C8Rb2m4N84TAqOtaH3VcrboHFMm7uEwXXsDna1ThMExOQoijvqxO30INpSrAfkTMnJQi3ZnJNtj6D0vlZ6ltNmRDp0dma1lVrEAwOde6jjPI_jg&usqp=CAY",
      name: "Sorry! Giant Edition",
      condition: "Used",
      location: "Tampa, FL",
      price: "$25",
      description: "Board Game"
    },
    {
      imgURL: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT2L5-nbbIc9M5vCLyNnN8DApaVNZeXuk3agziRbum4B0rDgGap7hKSYtdbrZdK8sQqyjFfySdLcssE73AUjAIelhjQAOp53cQ5pFwXoUzOjcbPfAPa-2Qv&usqp=CAY",
      name: "Pictionary",
      condition: "Used",
      location: "New Orleans, LA",
      price: "$10",
      description: "Board Game"
    },
//Electronics
    {
      imgURL: "https://cdn.cnn.com/cnnnext/dam/assets/211025072623-macbook-pro-14-display-5.jpg",
      name: "2021 Macbook Pro",
      condition: "Used",
      location: "Pensacola, Fl",
      price: "900",
      description: "2021 Macbook Pro 8GB of ram, 500GB SSD,  mint condition no scratches"
    }, 
    {
      imgURL: "https://assets-prd.ignimgs.com/2020/10/23/image-from-ios-1603470363376.jpg",
      name: "Playstation 5",
      condition: "New",
      location: "Miami, Fl",
      price: "599",
      description: "Sony playstation 5, Brand new never opened. Comes with two new games, and a headset"
    },
    {
      imgURL: "https://s.yimg.com/os/creatr-uploaded-images/2020-09/7e945160-f699-11ea-beef-f468e8c9049c",
      name: "AirPods Pros",
      condition: "Used",
      location: "Jacksonville, Fl",
      price: "150",
      description: "Bought brand new, and only used one time, didn't like so reselling",
    },
    {
      imgURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/75-in-tv-1596812234.jpg?crop=0.648xw:0.971xh;0.343xw,0.0244xh&resize=640:*",
      name: "75in Samsung curved flat screen",
      condition: "New",
      location: "Ouray, Colorado",
      price: "799",
      description: "Brand new, got for Christmas and don't like flat screen TV's so reselling. Serious buyers only"
    },
    {
      imgURL: "https://www.cnet.com/a/img/rs2rW-IjIRkYj7AG5WUIZcYu2r0=/1200x675/2020/12/04/949c1344-2da7-416c-a012-1d09148d4aa9/acer-nitro-5-amd-03.jpg",
      name: "Acer gaming laptop",
      condition: "Used",
      location: "Gatlinburg, Tennessee",
      price: "1200",
      description: "not sure what the actual specs are on the laptop, Bought it for my son for his birthday, and he has been bad so im selling it."
    },
    {
      imgURL: "https://cdn.vox-cdn.com/thumbor/8fsiW-I6Vm6Od6opw7uVTUBZS80=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13665381/Samsung_2019_Monitors_main_2.jpg",
      name: "Samsung curved monitor",
      condition: "Used",
      location: "Pensacola, Fl",
      price: "450",
      description: "perfect working condition, comes with a usb c connector cable, has 144hz refresh rate"
    },
    {
      imgURL: "https://miro.medium.com/max/1400/1*sDpzeFIuCbWUa6f_7JAtxg.png",
      name: "Iphone 13 pro max",
      condition: "New",
      location: "Navarre, FL",
      price: "1150",
      description: "brand new never opened"
    },
    {
      imgURL: "https://i.ebayimg.com/images/g/kmoAAOSwJK5gkru2/s-l640.jpg",
      name: "GameCub",
      condition: "Used",
      location: "Montgomery, Alabama",
      price: "350",
      description: "Nintendo Gamecube, they don't make these anymore, and this one is in excellent condition. Buy this bad boy and be the talk of the night at boys night. Pop super smash bros in and the night has just began."
    },
    {
      imgURL: "https://techcrunch.com/wp-content/uploads/2019/10/Logitech-MX-Keys-MX-Master-3-10.jpg",
      name: "Mx master 3",
      condition: "Used",
      location: "Pensacola, Fl",
      price: "65",
      description: "Best mouse you'll ever use, never buy another one. Mint condition."
    },
    {
      imgURL: "https://thegadgetflow.com/wp-content/uploads/2021/05/Top-5-mechanical-keyboards-for-your-workspace-blog-featured.jpeg",
      name: "Mechanical Keyboard",
      condition: "Used",
      location: "Seattle, Washington",
      price: "150",
      description: "mechanical keyboard, slight wear and tear from daily use, has cherry switches installed"
    },
//Home Furniture
    {
      imgURL: "https://img1.homary.com/filters:format(webp)/mall/file/2021/12/04/0cd962361d574ab0b942344c51aa255e.jpg",
      name: "Dining Table",
      condition: "Used",
      location: "San Antonio, TX",
      price: "350",
      description: "Originally purchased at Rooms to Go. This dining set includes table, and 4 chairs.",
    },
    {
      imgURL: "https://i5.walmartimages.com/asr/8ebe9728-7f18-4fa9-a40d-9353a9104161.d5ae8243e11742647fa73fb19f541242.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      name: "Green Velvet Couch",
      condition: "Used",
      location: "Nashville, TN",
      price: "300",
      description: "Green Velvet Couch. Like New. Price Negotiable"
    },
    {
      imgURL: "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202148/0175/mid-century-nightstand-z.jpg",
      name: "Modern Nighstand",
      condition: "Used",
      location: "Seattle, WA",
      price: "60",
      description: "Made of stained pine and antique-finished metal hardware."
    },
    {
      imgURL: "https://res.cloudinary.com/castlery/image/private/w_700,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1637919402/crusader/variants/41960014/Vincent-Dining-Table-180cm-Oak-Lifestyle-Crop.jpg",
      name: "Dining Table",
      condition: "Used",
      location: "Boston, MA",
      price: "440",
      description: "This is such a beautiful table that goes well with any midcentury decor. Comfortably fits 4, could probably squeeze in 6; perfect for my small kitchen!"
    },
    {
      imgURL: "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202130/0014/jack-metal-frame-dining-chair-set-of-2-z.jpg",
      name: "Dining Chair",
      condition: "New",
      location: "San Diego, CA",
      price: "300",
      description: "Brand New. Ended up changing my mind. Set up 2."
    },
    {
      imgURL: "https://res.cloudinary.com/castlery/image/private/w_700,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1624960642/crusader/variants/52460065/August-TV-Console-Lifestyle-Crop.jpg",
      name: "Vintage Side Table",
      condition: "Used",
      location: "Atlanta, GA",
      price: "500",
      description: "Perfect touch to your living room needs"
    },
    {
      imgURL: "https://i8.amplience.net/i/wineenthusiast/35022_1?$f1200$&fmt=auto",
      name: "Barrel Table & Chairs",
      condition: "New",
      location: "Austin, TX",
      price: "450",
      description: "Table & 2 chairs included. Set is made to order."
    },
    {
      imgURL: "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202139/0014/industrial-storage-side-table-z.jpg",
      name: "End Table",
      condition: "Used",
      location: "Miami, FL",
      price: "250",
      description: "Slight scuff marks on table."
    },
    {
      imgURL: "https://cb2.scene7.com/is/image/CB2/CamdenWhiteChairSHF21/$web_pdp_main_carousel_md$/210723122025/camden-wide-white-accent-chair.jpg",
      name: "White Armchair",
      condition: "Used",
      location: "Chicago, IL",
      price: "125",
      description: "Excellent condition."
    },
    {
      imgURL: "https://res.litfad.com/site/img/item/2020/06/12/886308/584x584.jpg",
      name: "Floral Lamp",
      condition: "Used",
      location: "Chicago, IL",
      price: "35",
      description: "Lamp is in good condition and is very bright."
    },
//Vehicles 
    {
      imgURL: "https://i.gyazo.com/4931cfcadcb9f46f12c03cbf0716d286.jpg",
      name: "2008 Subaru Impreza WRX Sport",
      condition: "Used",
      location: "Portland, Oregon",
      price: "$6,750",
      description: "Up for sale I have my 2008 wrx, it is completely stock. The turbo went out on it last Tuesday due to its age. I have an extra turbo(from an STI) to go with the car when sold, along with an STI intake, and some other things. I just don't have time to fix it. I also bought a new car so I'm no longer in need of the Subaru, I will have pictures of the interior posted up soon or upon request."
    },
    {
      imgURL: "https://i.gyazo.com/aa0d428757dc4d448e522bf072a35243.jpg",
      name: "2007 Mazda MX-5 Miata Sport",
      condition: "New",
      location: "Arlington, Texas",
      price: "$9,999",
      description: "70k miles, 5 speed manual. No issues, no warning lights. Clean title on my name on hand"
    },
    {
      imgURL: "https://i.gyazo.com/70d90a8c128a72ae9a37300482943565.jpg",
      name: "2018 Ford Fiesta ST Hatchback",
      condition: "New",
      location: "Aurora, Colorado",
      price: "$15,000",
      description: "Looking to sell my 2018 Fiesta ST. 70,000mi. Clean Title. Turbosmart wastewater. Turbosmart symposer delete bov kit. Whoosh v3  3in down pipe. Fifteen52 cup spoilers. Airlift 3P management. Air Force suspension. Whoosh V1 fmic. Hks 1step cooler spark plugs. Dizzy e40 tune. Injen short ram intake. Cobb rear motor mount. Cobb accessport v3. Whoosh hot and cold charge pipes"
    },
    {
      imgURL: "https://i.gyazo.com/34cc4eb985a48b2e627c008ac2b01f7a.jpg",
      name: "2013 Subaru Legacy 3.6R Limited",
      condition: "Used",
      location: "Akron, Ohio",
      price: "$4,000",
      description: "This vehicle runs and drives great does have a salvage title but is a solid car. Just need to upgrade to a bigger size for a family"
    },
    {
      imgURL: "https://i.gyazo.com/62fcc3c8c0cfbd675e4f98f74483393f.jpg",
      name: "2011 Argo avenger 750 efi ",
      condition: "$New",
      location: "Oakland, California",
      price: "$15,500",
      description: "2011 ARGO AVENGER 750 EFI. Excellent condition. 1500 miles. Located in Casper,Wy. Asking 15500 or obo. Call only at [hidden information]."
    },
    {
      imgURL: "https://i.gyazo.com/152c123b746741e6faae754c1f4c70d2.jpg",
      name: "2008 BMW Series 3 335xi Sedan",
      condition: "Used",
      location: "Lubbock, Texas",
      price: "$6,800",
      description: "2008 BMW 335xi Sports AWD (WINTER BEASTS). 189k miles no issue. It has full tuneup  with everything flush. New brakes And with mods  catless down pipe. like jb4 with back flash. Muffler Delete, resonator Delete. Charge pipe, inter cooler. New struts etc willing to negotiate price!!"
    },
    {
      imgURL: "https://i.gyazo.com/c8952c15c80c5f4fda2118aaec9af751.jpg",
      name: "2018 GMC Sierra Denali Pickup",
      condition: "New",
      location: "Albuquerque, New Mexico",
      price: "$62,000",
      description: "I'm testing the waters 2018 Denali 80,000 miles title in hand 2500 diesel no low balls."
    },
    {
      imgURL: "https://i.gyazo.com/6bb723578b2b7fd376551a90d2c3a670.jpg",
      name: "2022 Nissan Frontier SV",
      condition: "New",
      location: "Arlington, Virginia",
      price: "$37,675",
      description: "‼ 2022 Nissan Frontier SV ‼ The 2022 Nissan Frontier is a show stopper! 3.8L V6 offering best in class 310 HP? Newly redesigned body style? And genuine Nissan accessories in the dozens, this is a truck you can't go wrong with! As if that weren't tempting enough, 0% APR financing is available for 36  months OAC!"
    },
    {
      imgURL: "https://i.gyazo.com/f72ee07762563921a25457336218ce16.jpg",
      name: "2022 Jeep wagoeer Series 3",
      condition: "New",
      location: "Miami, Florida",
      price: "$91,725",
      description: "Brand new 2022 Jeep WagoneerSeries 35.7 Hemi V8 Luxury white 19 speaker McIntosh sound system4 corner auto leveling air suspension Heated and vented seatsMassaging front seats 4x4 w/ locking diffPassenger screenSecond row entertainmentMuch more!!"
    },
    {
      imgURL: "https://i.gyazo.com/61a44d4119c30e8593814a7be55abb2d.jpg",
      name: "2013 Audi A7",
      condition: "New",
      location: "Kansas City, Missouri",
      price: "$26,995",
      description: "This vehicle is for sale by SAL'S AUTO SALES."
    },
  ]
  
  await Product.insertMany(products)
  console.log('Created users & products!')

  db.close()
}

insertData()
