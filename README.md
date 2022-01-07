<h1 align="center">
  Rename Songs
</h1>

<p align="center">
<a href="#project">Project</a> | 
<a href="#technologies">Technologies</a> | 
<a href="#how-to-use">How to use</a> | 
<a href="#how-to-contribute">How to contribute</a> | 
<a href="#license">License</a> | 
</p>

![Screenshot (20)](https://user-images.githubusercontent.com/56188470/148616657-2d8fe919-b1ed-4f5b-bb16-09f60ef13c38.png)

## Project
I was downloading some songs on telegram and they came randomly named. So I was looking for a way to easily rename them with the title and track no.
And then  I was like 'why not??'. This script renames a song filename with its title!

## Technologies
This project was developed with the following technologies:
- Node.js
- Typescript
- Express
- Multer

## How to use
To run this project, you must have an http client, like [Insomnia](https://insomnia.rest/).
Start the project: ```npm start```. It'll running at the port 3333

Upload the songs one by one via Multipart at the route '/'.
The songs must be uploaded as the property `song`


## How to contribute
All the contributions are welcome, but you should follow this steps to contrinute:
- Open an issue describing your feature suggestion or bug fix
- fork this repo
- Create a new branch with your feature
- Commit your changes
- Open a PR with these changes

After your PR has been merged, you can delete your branch.

## License
This project is under the MIT License. check the file [LICENSE]() for details.

---

Made by Luis Saiete. Find me on [Twitter](https://twitter.com/ltsaiete).
