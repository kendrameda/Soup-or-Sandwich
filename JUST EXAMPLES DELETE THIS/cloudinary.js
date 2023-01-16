const cloud9 = require('cloudinary').v2;
// Create a Cloudinary instance and set your cloud name.
cloud9.config({
  cloud_name: 'dijep6dqz',
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
});

const myImage = cloudinary.image('v1673890632/sample.jpg');
console.log(myImage);
const imageUrl = myImage.toURL();
console.log(imageUrl);

const templateSource = document.getElementById("my-template").innerHTML;
console.log(templateSource)

const template = Handlebars.compile(templateSource);
console.log(template)

const html = template({ imageUrl });
document.body.innerHTML = html;


module.exports = imageUrl;


// https://res.cloudinary.com/dijep6dqz/image/upload/v1673890632/sample.jpg