
## Git Configuration Levels

The first thing you should do when you get started using Git is to set your configuration options.

Git allows you to set configuration options at three different levels. The default value for Git config is --local.

--system - These are system-wide configurations. They apply to all users on this computer.
--global - These are the user level configurations. They only apply to your user account.
--local - These are the repository level configurations. They only apply to the specific repository where they are set.

```
git config user.name "Billy Everyteen"

git config --global user.email "your_email@example.com"

```
