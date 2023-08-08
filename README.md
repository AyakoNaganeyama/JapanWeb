# Git Notes:

Please note: I will not be using technical terms, I will be using made up easy words.

We will cover how to to copy a project, save a project and how to upload your changes to github.

To copy a project from github you use the key word "clone"
Example:

```
  git clone git@github.com:AyakoNaganeyama/JapanWeb.git
```

To save your changes before uploading you use the "add" and "commit" key words.
Example:

```
  // the dot means add every change made in this folder
  git add .

  // commit is like telling your computer you're serious about this save, the -m key to say to your computer that you're leaving a message.
  git commit -m 'this message explains what change you made'
```

Now you can upload your changes to github by using push
Example:

```
  // origin means where it's saved online, in this project we have it saved on github. main is the version of your project.
  git push origin main
```