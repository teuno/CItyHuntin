const data = [
  {
    name: "Sassenpoort",
    description: 'Sassenpoort, the gatehouse in the city wall of Zwolle, is part of the Top 100 Dutch heritage sites. The inner gate building shows a special view between the two fortification towers on the field side where the enemy was surprised with boiling pitch and oil. The round holes under the windows on the upper floor were used for falconets or "snakes" where burning fireballs were thrown down. The defense is made for the use of bow and arrow, crossbow and spears. In order to prevent damage by exhaust gases, driving under the gate has been prohibited since 2010. The gate now serves as a pedestrian road.',
    date_build: "1406-1409",
    image_url: "static/img/PoIs/sassenpoort.jpg",
    position: {lat:52.509969 , lng: 6.095519}
  },
  {
    name: "Museum De Fundatie",
    description: "Museum de Fundatie, former Palace of Justice was built in the neo-classicist style between 1838 and 1841, is a museum for the visual arts. The court building was completely revamped during the nineteen eighties to serve as the new office for the national planning service’s information department. Second renovation in 1994 saw the palace become a fully fledged museum. It possesses a collection of visual arts, with works ranging from the end of the Middle Ages until the present day. Among these works are paintings of Marc Chagall, Piet Mondrian, Isaac Israëls, Vincent van Gogh, Lucebert, Paul Citroen, Karel Appel, and Carel Willink, and sculptures by Antonio Canova and Gian Lorenzo Bernini.",
    date_build: "1838, museum since 2004",
    image_url: "static/img/PoIs/fundatie.jpg",
    position: {lat: 52.510177, lng: 6.091430}
  },
  {
    name: "De Peperbus",
    description: "The Pepperbox (Peperbus), also know as the Onze Lieve Vrouwe tower, is 75 meter high and has a carillon with 51 bells. It is the icon for Zwolle, you can see it from every direction you come. The Peperbus owes its 'nickname' to the shape, which resembles a pepper spreader. The roof that crowns the tower was placed in 1828, after the tower was struck by lightning. It took 13 years before the tower was repaired.",
    date_build: "1454, charistic hood: 1727 ",
    image_url: "static/img/PoIs/peperbus.jpg",
    position: {lat: 52.512182 , lng: 6.089831 }
  },
  {
    name: "Baseliek van Onze Lieve Vrouwe Ten Hemelopneming",
    description: "The baselik was builded in 4 phases. The baselik lost it's hole purpuse in 1580 til 1810. For it's 600 year aniversery Pope John Paul II gave it the honourble title of Baselik. The church is with it's 51 bellls counting carolion one of the biggest in The Netherlands.",
    date_build: "1394-1399",
    image_url: "static/img/PoIs/olv-baselik.jpg",
    position: {lat: 52.512214 , lng: 6.089766}
  },
  {
    name: "St. Michaëls church ",
    description: "St. Michaël’s church is one of the prettiest churches in the area. This church was constructed from 1406 until 1466 on the spot where once used to stand a small Romanesque church. The church was converted into a three-aisled hall church in the style of the Lower Rhine Gothic. Its 120 meter high tower was the highest in the country for a long period. But, due thunderstorms, the tower collapsed and was not rebuild.",
    date_build: "1406-1466",
    image_url: "static/img/PoIs/st-michaels-kerk.jpg",
    position: {lat: 52.511998, lng: 6.092067}
  },
  {
    name: "The Glass Angel",
    description: "The sculpture was made by artist Herman Lamers in 2010. St. Michaël is the Patron saint of Zwolle. He created St. Michaël for the church as reconazion of the city. The angel was made of 325 pieces of glass. It's contraform stands in front of the Isala hospital.",
    date_build: "2010",
    image_url: "static/img/PoIs/engel.jpg",
    position: {lat: 52.512090 , lng: 6.092818}
  },
  {
    name: "Hof van Ittersum ",
    description: "From the 13th century this place was housed by the highly influencial family van Ittersum. The van Ittersums were in the magistrate of Zwolle and also twice Episcopal steward. On the Facade is the medailion of emperor Carl the V placed. In World War 2 the place was used for the distribution of iligal underground papers",
    date_build: "facade: 1571",
    image_url: "static/img/PoIs/hof-van-ittersum.jpg",
    position: {lat: 52.511308, lng: 6.094390}
  },
  {
    name: "Citywall",
    description: "The beautifull city wall of Zwolle was builed as a defence for the city against sieges and canonfire. The wall had 23 towers of which there remain only 3 nowadays. It also had multiple ports of which the Sassenpoort is the only one remaining. From the Diezestraat to the Rodetorenplein there are still some nice pieces of the wall and it's towers viseble.",
    date_build: "1400",
    image_url: "static/img/PoIs/city-wall.jpg",
    position: {lat: 52.514166 , lng: 6.097567 }
  },
  {
    name: "Statenzaal",
    description: "Statenzaal is in neo-Gothic style, recognizable by the windows with pointed arches. It was also neogothically decorated inside, the style has been implemented down to the smallest detail of wall decorations and furniture. This makes this space a special space, because until that date this style was only applied to ecclesiastical architecture.",
    date_build: "1898",
    image_url: "static/img/PoIs/statenzaal.jpg",
    position: {lat: 52.512804, lng: 6.097212 }
  },
  {
    name: "De Librije",
    description: "The best restaurant of the Netherlands(34th of the world) is currently located in this building. The restaurant of Jonnie and Terese Boer used to be in an old building on the Broerenkerkplein. The building used to be prison. By lotery has Zwolle gotten the province prison of Overijssel. The prison was build in 1739 by design of Isaac van den Heuvel. The sandstone entrance is designed by Gotfried Gerlach. In WOII the building was used by the nazis to imprisonate resistance fighters.",
    date_build: "1739",
    image_url: "static/img/PoIs/librije.jpg",
    position: {lat: 52.515370, lng: 6.097837}
  },
  {
    name: "Theater De Spiegel",
    description: "In 2004 the building of a hyper modern theater was started, and opend by her Majesty queen Beatrix at 30th of september 2006. It's the only theater in The Netherlands with a moveble ceiling. It has place for 850 people(with the ceiling on it's hightest 1000 people fit in). The hit TV-show: Holland's Got Tallent is also recored in this theater.",
    date_build: "2004",
    image_url: "static/img/PoIs/spiegel.jpg",
    position: {lat: 52.515827 , lng: 6.097992}
  },
];

export default data;
