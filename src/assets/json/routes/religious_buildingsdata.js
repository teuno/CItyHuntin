const data = [
  {
    name: "Dominicanenklooster",
    description: "Dominicanenklooster was constructed in the traditional square design that is seen in many monasteries, featuring an open space right in the center where you will find a courtyard with sitting areas and beautiful, natural plants. This monastery was originally built and intended to be a training house. The designer in charge of the original construction was Kayser and the structure was constructed back in 1902.",
    date_build: "1890",
    image_url: "static/img/PoIs/dominicanen.jpg",
    position: {lat: 52.507646, lng: 6.100090}
  },
  {
    name: "Emmanuelshuizen",
    description: "Anna van Haerst was married to Emmanuel van Twenhuysen, a doctor in law. After he and their son died on black death, she had no heirs. So she decided to create a place for 9 elderly Catholic women to live in, she named the place after her husband. The houses continued till early 1900, now a days, there are some art galeries.",
    date_build: "founded in 1639",
    image_url: "static/img/PoIs/emanuels-houses.jpg",
    position: {lat: 52.510629, lng: 6.092635}
  },
  {
    name: "Basiliek van Onze Lieve Vrouw Ten Hemelopneming",
    description: "The baselik was builded in 4 phases. The baselik lost it's hole purpuse in 1580 til 1810. For it's 600 year aniversery Pope John Paul II gave it the honourble title of Baselik. The church is with it's 51 bellls counting carolion one of the biggest in The Netherlands.",
    date_build: "1394-1399",
    image_url: "static/img/PoIs/baselik.jpg",
    position: {lat: 52.512214, lng: 6.089766}
  },
  {
    name: "De peperbus",
    description: "The Pepperbox (Peperbus), also know as the Onze Lieve Vrouwe tower, is 75 meter high and has a carillon with 51 bells. It is the icon for Zwolle, you can see it from every direction you come. The Peperbus owes its 'nickname' to the shape, which resembles a pepper spreader. The roof that crowns the tower was placed in 1828, after the tower was struck by lightning. It took 13 years before the tower was repaired.",
    date_build: "1454, charistic hood: 1727",
    image_url: "static/img/PoIs/peperbus.jpg",
    position: {lat: 52.512182, lng: 6.089831}
  },
  {
    name: "R. C. Nieuwsstraatkerk St. Josef",
    description: 'On the location of the shelter church "Onder de Boge". Between 1892 and 1926 the meetingroom of the R. C. Workmen\'s association. Till 1987 it was used as a warehouse.Since then it helds room to 27 appartments',
    date_build: "1848",
    image_url: "static/img/PoIs/joseph.jpg",
    position: {lat: 52.511047, lng: 6.091728}
  },
  {
    name: "Christian Coffehouse De Fuik",
    description: "In the sixties the former kindergarten was converted into a Christian coffeebar called De Fuik. De Fuik has as main goal: personal and informal contact between young christians. The Fuik was owned by the 'Vrije Evengalisatie Zwolle' till they sold it at the 29th of may 2015",
    date_build: "coffee house opend in the sixties",
    image_url: "static/img/PoIs/the-fuik.jpg",
    position: {lat: 52.513819, lng: 6.092715}
  },
  {
    name: "Waanders in de Broeren",
    description: "Waanders in the Broeren, this gorgeous 15th century Dominican church was renovated into a modern-day bookstore. They managed to accommodate 700 square meter shopping floor to this Dominican church while keeping the main axis open. This allows the customers to experience the space as a whole, the height, the long axis, the high arches, enormous stained glass windows, the ceiling paintings and the pipe organ. The main eye-catchers on both sides of the axis – with the organ and a modern stained glass window.",
    date_build: "1640, bookstore since 2005",
    image_url: "static/img/PoIs/waanders-in-de-broeren.jpg",
    position: {lat: 52.513790, lng: 6.095474 }
  },
  {
    name: "St. Michaëlskerk",
    description: "St. Michaël’s church is one of the prettiest churches in the area. This church was constructed from 1406 until 1466 on the spot where once used to stand a small Romanesque church. The church was converted into a three-aisled hall church in the style of the Lower Rhine Gothic. Its 120 meter high tower was the highest in the country for a long period. But, due thunderstorms, the tower collapsed and was not rebuild.",
    date_build: "1406-1466",
    image_url: "static/img/PoIs/st-michaelskerk.jpg",
    position: {lat: 52.511998, lng: 6.092067}
  },
  {
    name: "Lutherse kerk",
    description: "Lutheristic church. The Lutheranism is the oldest protestants religion in Zwolle. About 1519 Zwolle was well-known as the first large protestant radiance centre in the Netherlands, because of the famous Latin school in Zwolle. In that time, the school was on her climax. It is special that many books of Luther were printed and spread here. German merchants, who came to Zwolle, came secretly together in “huisgemeenten”.  These have grown to one Lutheran community.",
    date_build: "1649(huge restauration in 1967)",
    image_url: "static/img/PoIs/luthers-church.jpg",
    position: {lat: 52.510165, lng: 6.091950}
  },
  {
    name: "Synagoge",
    description: 'Synagoge was inaugurated on July 21 1899, for a more than 600-member Jewish Congregation. After a terrible persecution of the Jews had taken place in 1349, a more liberal attitude of the city administration towards the Jews was adopted in later times. All this resulted in the construction of this synagogue. The names of the 500 Polish Jews who were murdered in the extermination camps were placed on the walls. Above the counter the saying is made: "Remember the Torah of Moses my servant who was offered to him on Mount Horeb". The street on which the synagogue is situated was named in 1989 after the last chief rabbi Samuel Juda Hirsch.',
    date_build: "1899",
    image_url: "static/img/PoIs/synagoge.jpg",
    position: {lat: 52.511101, lng: 6.096194}
  },
  {
    name: "Plantage kerk",
    description: "Plantagekerk is a reformed church building with a sexton's house built on the left, designed in the years 1874-1875. Remarkably located on the southeastern edge of the old town, reformed church is built in an eclectic design language, using neo-Romanesque, neo-Gothic and neo-Renaissance motifs. Church building on T-shaped floor plan, built from brown-red brick and covered by two perpendicular to each other with slate covered saddle roofs with two dormer windows at the front and rear. The interior is covered by a ceiling divided into 24 compartments; the twelve middle sections are deepened and have wooden beams with neo-Gothic four-sided treads and carved wooden sagging bricks; the construction rests on cut sides on cut wooden consoles.",
    date_build: "1874",
    image_url: "static/img/PoIs/plantage-church.jpg",
    position: {lat: 52.512440, lng: 6.098171}
  },

];

export default data;
