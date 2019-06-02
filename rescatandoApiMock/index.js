export const getBuscados = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const buscados = [];
      for (let i = 0; i < 10; i++) {
        buscados.push({
          name: "Bobby",
          image: images[i],
          location: locations[i]
        });
      }
      resolve(buscados);
      // reject("No pudimos traer las mascotas buscadas, intentá más tarde por favor");
    }, 1500);
  });
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const images = [
  require("./img/perro1.png"),
  require("./img/perro2.png"),
  require("./img/perro3.png"),
  require("./img/perro4.png"),
  require("./img/perro5.png"),
  require("./img/perro6.png"),
  require("./img/perro7.png"),
  require("./img/perro8.png"),
  require("./img/perro9.png"),
  require("./img/perro10.png")
];

const locations = [
  {
    latitude: -34.71863,
    longitude: -58.370963
  }
];
