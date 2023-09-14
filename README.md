# Git Notes:

Please note: We will not be using technical terms.

We will cover how to to copy a project, save a project and how to upload your changes to github.

To copy a project from github you use the key word "clone"

```
  git clone git@github.com:AyakoNaganeyama/JapanWeb.git
```

To save your changes before uploading we use the key words "add" and "commit".

```
  // the dot means add every change made in this folder
  git add .

  // commit is like telling your computer you're serious about this save, use the -m key to tell your computer that you're adding a message.
  git commit -m 'this message explains what change you made'
```

Now you can upload your changes to github by using push.

```
  // origin means where it's saved online, in this project we have it saved on github. main is the version of your project.
  git push origin main
```

# When to save/commit?

Only save code that works, is stable and whenever you can.
No commit is too small.

```
  // commit message: change var to let
  var users = ["John", "Kate"] => const users = ["John", "Kate"]
```
# JapanAndCambodiaWebSite
