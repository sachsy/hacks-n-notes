
# Git Configuration Levels

The first thing you should do when you get started using Git is to set your configuration options.

Git allows you to set configuration options at three different levels. The default value for Git config is --local.

--system - These are system-wide configurations. They apply to all users on this computer.
--global - These are the user level configurations. They only apply to your user account.
--local - These are the repository level configurations. They only apply to the specific repository where they are set.

```
git config --list
```

## Identity

Git uses the config settings for your user name and email address to generate a unique fingerprint for each of the commits you create,

```
git config user.name "Billy Everyteen"

git config --global user.email "your_email@example.com"

```

## Default editor

```
git config --global core.editor "atom --wait"
```

## OS related


I read this in a tutorial

> Different systems handle line endings and line breaks differently. If you open a file created on another system and do not have autocrlf set, Git will think you made changes to the file based on the way your system handles this type of file.

`git config --global core.autocrlf`

> If you are on a Windows machine, you will want to set this option to true.
> If you are on a Mac or Linux machine, you will set it to input.
> And for those wondering, autocrlf stands for "auto carriage return line feed".

## Configuring Default Push Behavior

When you push changes from your local computer to the remote you can choose whether you want Git to automatically push all of the local branches to their matching branches on the remote or whether you only want the currently checked out branch to be pushed.

The config setting we use to set this option is push.default. We can set the default to matching if we want to push all branches automatically. OR, we can set it to simple if we only want to push the branch we are on.

For now, let's use `git config --global push.default simple`. This way you don't make accidental pushes.
