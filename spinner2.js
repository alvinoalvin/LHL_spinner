process.stdout.write('hello from spinner2.js... \rheyyy\n');

let stick_animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let timout = 100;

for (let stick of stick_animation) {
  setTimeout(() => {
    process.stdout.write(stick);
  }, timout += 200);

}
