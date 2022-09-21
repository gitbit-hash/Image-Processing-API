# Image Resize API

## Table of Contents

- [project description](#project-description)
- [how to install and run the project](#how-to-install-and-run-the-project)

## project description

The aim of this project is to create a back-end API to resize a given image and save it to a specific folder with dimensions appended to the image name.

The following topics will be covered in this project:

- How to setup a Node environment with Express and the necessary project dependencies?
- How to install and configure TypeScript to work with Node.
- How to install eslint and configure it with TypeScript.
- How to install Prettier and configure it with lint.
- How to setup a server with Express.js framework?
- How to use express middlewares?
- How to work with file system in Node environment?
- How to install Jasmine to test your code?
- How to use the new promise `async/await` syntax.
- How to use Sharp package to resize images.

## how to install and run the project

1. Go to [this link](https://github.com/gitbit-hash/Image-Processing-API) and copy the link as showed below.

![Clone link!](https://www.tutorialexample.com/wp-content/uploads/2021/07/clone-a-project-source-code-using-gitlab.png 'Clone link')

2. Make sure Git is installed on your machine

3. Create an empty directory

4. Right click on a mouse and click <span style="color:red">Git Bash Here</span>.

![Git Bash!](https://www.tutorialexample.com/wp-content/uploads/2021/07/Open-git-bash-here.png 'Git Bash')

5. Start to clone the project using git clone command.

```
    1. git clone git_file_url
```

![Git Bash!](https://www.tutorialexample.com/wp-content/uploads/2021/07/git-clone-a-project-source-code-to-disk.png 'Git Bash')

Then you can download a project successfully

7. In the root of the project folder run `npm i` to install all the required dependencies.

8. In your terminal run `npm start` to run the development server, and you can test in your browser your application is running by visiting `http://localhost:5000/`.

9. Supply the image name, width, and height in order to the following URL `http://localhost:5000/api/resize-image?filename=imagename&width=number&height=number`

10. Make sure that you have a folder called "assets", and inside it a folder called "full", in this folder you can place your full images and that's where your application will read the images

11. By supplying an existed image name to the URL,a valid non-negative width and height numbers, you can hit Enter key to see the resized image.

12. The resized image will be saved in a folder called "thumb" along with "full folder".

13. The resized images in the thumb folder have the name of the image appended to it the width and the height that you specified.