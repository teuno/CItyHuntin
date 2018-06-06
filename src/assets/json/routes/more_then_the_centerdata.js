const data = [
  {
    name: "Isala",
    description: "Isala is a hospital group in the IJsselland (Isala is an old Latin name for IJssel). It consists of 2 hospitals, the largest in Zwolle and a smaller one in Meppel. Isala originated in the early 21st century as a merger of the Catholic hospital De Weezenlanden, just outside the canal to the south of the city center, and the Sophia hospital on the Ceintuurbaan. The Weezenlanden was eventually demolished, while a new hospital was built at the Sophia hospital. During the building of the new hospital they gradually demolished the Sophia hospital. It is one of the larger hospitals in the Netherlands and the largest non-academic hospital. It has approximately 1.116 beds. Nearly all medical specialties are represented in the Isala hospital group.",
    date_build: "2009",
    image_url: "static/img/PoIs/isala.jpg",
    position: {lat: 52.512637, lng: 6.124481}
  },
  {
    name: "Stadion PEC Zwolle",
    description: "PEC Zwolle Stadium or MAC³PARK Stadium is a multi-use stadium. It is used mostly for football matches. It hosts the home matches of PEC Zwolle. The old stadium was built in 1934 and demolished in 2007. Construction started on 9 March 2007 and it was finished on 29 August 2009.",
    date_build: "2009",
    image_url: "static/img/PoIs/pec.jpg",
    position: {lat: 52.517777 , lng: 6.123341}
  },
  {
    name: "Oliemolen De Passiebloem",
    description: "Oliemodel de Passiebloem, is the name of an oil mill with storage barns from 1776. The mill stopped producing in 1928 and was subsequently purchased by the municipality of Zwolle. Until the Second World War, the mill was used as a storage place. In the thirties, the Municipality of Zwolle had the mill restored as part of an employment project for the unemployed. During the war, food for the soup kitchen was prepared food here. In 1965 the mill was restored again and the wicks started turning again. Because of a lack of money, the maintenance was a problem which resulted in the mill deteriorating rapidly. In 1984 Oliemodel de Passiebloem was restored for the 3e time, after which it was put into use again on 11 May 1985. Now is working just twice per month.",
    date_build: "1776",
    image_url: "static/img/PoIs/molen.jpg",
    position: {lat: 52.518068 , lng: 6.116857}
  },
  {
    name: "CityWall",
    description: "The beautiful city wall of Zwolle was built as a defense for the city against sieges and cannon fire. The wall had 23 towers of which there remain only 3 nowadays. It also had multiple ports of which the Sassenpoort is the only one remaining. From the Diezestraat to the Rodetorenplein there are still some nice pieces of the wall and its towers visible.",
    date_build: "1400ish",
    image_url: "static/img/PoIs/city-wall.jpg",
    position: {lat: 52.511290 , lng: 6.092908 }
  },
  {
    name: "Waanders in de Broeren",
    description: "Waanders in the Broeren, this gorgeous 15th-century Dominican church was renovated into a modern-day bookstore. They managed to accommodate 700 square meter shopping floor to this Dominican church while keeping the main axis open. This allows the customers to experience the space as a whole, the height, the long axis, the high arches, enormous stained glass windows, the ceiling paintings and the pipe organ. The main eye-catchers on both sides of the axis – with the organ and a modern stained glass window.",
    date_build: "1640, bookstore since 2005",
    image_url: "static/img/PoIs/waanders-in-de-broeren.jpg",
    position: {lat: 52.513790, lng: 6.095474 }
  },
  {
    name: "Sassenstraat",
    description: "The Sassenstraat is the oldest street in Zwolle and runs from the Sassenpoort to the Grote Kerk. Many famous Zwollenaren have walked in the Sassenstraat. From Thomas a Kempis, Joan Derk van de Capellan tot  Pol, Potgieter and Herman Brood. In the 14th century, when Zwolle was an important educational center, hundreds of students from the Latin school had to walk through this street.",
    date_build: "",
    image_url: "static/img/PoIs/sassenstraat.jpg",
    position: {lat: 52.510782, lng: 6.094562}
  },
  {
    name: "Sassenpoort",
    description: 'Sassenpoort, the gatehouse in the city wall of Zwolle, is part of the Top 100 Dutch heritage sites. The inner gate building shows a special view between the two fortification towers on the field side where the enemy was surprised with boiling pitch and oil. The round holes under the windows on the upper floor were used for falconets or "snakes" where burning fireballs were thrown down. The defense is made for the use of bow and arrow, crossbow and spears. In order to prevent damage by exhaust gases, driving under the gate has been prohibited since 2010. The gate now serves as a pedestrian road.',
    date_build: "1406-1409",
    image_url: "static/img/PoIs/sassenpoort.jpg",
    position: {lat:52.509969 , lng: 6.095519}
  },
  {
    name: "Potgietersingel",
    description: 'Potgietersingel is a park in the city of Zwolle, named after Everhardus Johannes Potgieter. The park was built at the beginning of the nineteenth century on a former fortifications, from the seventeenth century.',
    date_build: "19th century",
    image_url: "static/img/PoIs/potgietersingel.jpg",
    position: {lat: 52.509935 , lng: 6.091171 }
  },
  {
    name: "Museum De Fundatie",
    description: "Museum de Fundatie, former Palace of Justice was built in the neo-classicist style between 1838 and 1841, is a museum for the visual arts. The court building was completely revamped during the nineteen eighties to serve as the new office for the national planning service’s information department. The second renovation in 1994 turned the palace into a fully fledged museum. It possesses a collection of visual arts, with works ranging from the end of the Middle Ages until the present day. Among these works are paintings of Marc Chagall, Piet Mondrian, Isaac Israëls, Vincent van Gogh, Lucebert, Paul Citroen, Karel Appel, and Carel Willink, and sculptures by Antonio Canova and Gian Lorenzo Bernini.",
    date_build: "1838, museum since 2004",
    image_url: "static/img/PoIs/fundatie.jpg",
    position: {lat: 52.510177, lng: 6.091430}
  },
  {
    name: "Grote Markt",
    description: "Grote markt is one of the oldest parts of the city and lies on the spot where used to be a ford in the river, the Great Aa. In the fourteenth century the Aa was filled up and around that place they build the market. In 1929, a roundabout was built on the Grote Markt in order to be able to steer the increasing traffic in the right direction. The square is no longer accessible for car traffic, apart from taxis and supplies to the shops in the city center. In 2006 the square was restored.",
    date_build: "14th century",
    image_url: "static/img/PoIs/grote-markt.jpg",
    position: {lat: 52.512222 , lng: 6.092419}
  },
];

export default data;
