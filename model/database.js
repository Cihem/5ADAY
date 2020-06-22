require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS || "root",
  database: DB_NAME || "5aday",
  multipleStatements: true
 
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE if exists seasons; CREATE TABLE into seasons (id INT NOT NULL AUTO_INCREMENT, image VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(1000) NOT NULL, list VARCHAR(1000)NOT NULL, PRIMARY KEY (id));`;

            // `INSERT INTO seasons (image, title,https description, list) VALUES ('https://www.juiceplus.com/content/juiceplusblog/en/2019/3/the-ultimate-fruit-and-vegetable-season-calendar/_jcr_content/par/image.img.jpg/1553178913562.jpg', 'FRUITS AND VEGETABLES AVAILABLE IN WINTER', 'Fruits and vegetables available in the winter months consist of lots of fruits you’d typically associate with Christmas (clementines, cranberries), but also lots of earthy vegetables like turnips, parsnips and leeks. There are some lovely winter warming recipes you can cook with these!', 'Apple
            // Pears
            // Clementines
            // Cranberries
            // Dates
            // Beetroot
            // Brussels sprouts
            // Celeriac
            // Celery
            // Kale
            // Leek
            // Parsnip
            // Turnip
            // Sweet potato
            // Grapefruit
            // Lemon
            // Orange
            // Rhubarb
            // Kiwi
            // Passion Fruit
            // Pomegranate
            // Beetroot
            // Brussels sprouts
            // Celeriac
            // Celery
            // Kale
            // Leek
            // Parsnip
            // Turnip
            // Sweet potato
            // Cauliflower
            // Chicory
            // Jerusalem artichoke');`

            // `INSERT INTO seasons (image, title, description, list) VALUES ('https://www.juiceplus.com/content/juiceplusblog/en/2019/3/the-ultimate-fruit-and-vegetable-season-calendar/_jcr_content/par/image_1056369294.img.jpg/1553178984905.jpg', 'FRUITS AND VEGETABLES AVAILABLE IN SPRING', 'Coming into to spring and lots of fresh spring greens come into season, like watercress, spinach and lettuce. New potatoes also come in the spring, which make for a delicious buttery dish or potato salad with watercress.', 'Grapefruit
            // Lemon
            // Orange
            // Rhubarb
            // Passion Fruit
            // Pomegranate
            // Apricot
            // Nectarine
            // Brussels sprouts
            // Cauliflower
            // Chicory
            // Jerusalem artichoke
            // Spinach
            // Watercress
            // Purple sprouting broccoli
            // New potatoes
            // Potatoes
            // Carrot
            // Lambs lettuce
            // Lettuce');`

            // `INSERT INTO seasons (image, title, description, list) VALUES ('https://www.juiceplus.com/content/juiceplusblog/en/2019/3/the-ultimate-fruit-and-vegetable-season-calendar/_jcr_content/par/image_1788290349.img.jpg/1553179052619.jpg', 'FRUITS AND VEGETABLES AVAILABLE IN SUMMER', 'As summer comes around, you are certainly not limited in options when it comes to seasonal fruit and vegetables. This is prime time for strawberries, nectarines and apricots – as well as asparagus, peas and runner beans.', 'Apricot
            // Blackcurrants
            // Gooseberry
            // Nectarine
            // Rhubarb
            // Strawberry
            // Tomato
            // Cherries
            // Raspberry
            // Redcurrant
            // Watermelon
            // Elderberries
            // Figs
            // Peach
            // Asparagus
            // Aubergine
            // Carrot
            // Courgettes
            // Lambs lettuce
            // Lettuce
            // New potatoes
            // Peas
            // Potatoes
            // Runner beans
            // Beetroot
            // Cavolo Nero
            // Fennel
            // Celery');`

            // `INSERT INTO seasons (image, title, description, list) VALUES ('https://www.juiceplus.com/content/juiceplusblog/en/2019/3/the-ultimate-fruit-and-vegetable-season-calendar/_jcr_content/par/image_1229398484.img.jpg/1553179114378.jpg', 'FRUITS AND VEGETABLES AVAILABLE IN AUTUMN', 'As we turn into autumn, the choice is still plentiful as many vegetables are still giving following the summer months. Sweetcorn is exclusively at it’s best in September and apple and pears come back into full season.', 'Apple
            // Blackberry
            // Elderberries
            // Figs
            // Gooseberry
            // Nectarine
            // Peach
            // Redcurrant
            // Plum
            // Raspberry
            // Strawberry
            // Tomato
            // Pear
            // Plum
            // Aubergine
            // Beetroot
            // Cavolo Nero
            // Celeriac
            // Celery
            // Courgettes
            // Fennel
            // Artichoke
            // Lambs lettuce
            // Leek
            // Peas
            // Lettuce
            // Runner beans
            // Sweetcorn
            // Brussels sprouts
            // Kale
            // Parsnip
            // Pumpkin
            // Sweet potato ');`
            
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `seasons` was successful!");

    console.log("Closing...");
  });

  

  con.end();
});











