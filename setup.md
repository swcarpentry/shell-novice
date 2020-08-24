---
layout: page
title: Setup
root: .
---

You need to download some files to follow this lesson:

1. Download [data-shell.zip]({{ page.root }}/data/data-shell.zip) and move the file to your Desktop.
2. Unzip/extract the file (ask your instructor if you need help with this step). You should end up with a new folder called **data-shell** on your Desktop.
3. Open a terminal. If you're not sure how to open a terminal in your operating system, see the section below.
4. In the terminal type `cd` then press the Enter key. That last step will make sure you start with your home folder as your working directory.

In the lesson, you will find out how to access the data in this folder.

> ## Where to type commands: How to open a new shell
> The shell is a program that enables us to send commands to the computer and receive output. It is also referred to as the terminal or command line.
>
> Some computers include a default Unix Shell program.
> The steps below describe some methods for identifying and opening a Unix Shell program if you already have one installed.
> There are also options for identifying and downloading a Unix Shell program, a Linux/Unix emulator, or a program to access a Unix Shell on a server.
>
> If none of the options below address your circumstances, try an online search for: Unix shell [your computer model] [your operating system].
>
> ### Linux
> The default Unix Shell for Linux operating systems is usually Bash.
> On most versions of Linux, it is accessible by running the [(Gnome) Terminal](https://help.gnome.org/users/gnome-terminal/stable/)
> or [(KDE) Konsole](https://konsole.kde.org/)
> or [xterm](https://en.wikipedia.org/wiki/Xterm),
> which can be found via the applications menu or the search bar.
> If your machine is set up to use something other than Bash, you can run it by opening a terminal and typing `bash`.
>
> ### macOS
> For a Mac computer running macOS Mojave or earlier releases, the default Unix Shell is Bash.
> For a Mac computer running macOS Catalina or later releases, the default Unix Shell is Zsh.
> Your default shell is available via the Terminal program within your Utilities folder.
>
> To open Terminal, try one or both of the following:
> * In Finder, select the Go menu, then select Utilities. Locate Terminal in the Utilities folder and open it.
> * Use the Mac 'Spotlight' computer search function. Search for: `Terminal` and press <kbd>Return</kbd>.
>
> To check if your machine is set up to use something other than Bash, type `echo $SHELL` in your terminal window.
>
> If your machine is set up to use something other than Bash, you can run it by opening a terminal and typing `bash`.
>
> #### Reference
> [How to Use Terminal on a Mac](http://www.macworld.co.uk/feature/mac-software/how-use-terminal-on-mac-3608274/)
>
> ### Windows
> Computers with Windows operating systems do not automatically have a Unix Shell program installed.
> In this lesson, we encourage you to use an emulator included in Git for Windows,
> which gives you access to both Bash shell commands and Git.
> If you are attending a Software Carpentry workshop session, it is likely you have already received instructions on how to install Git for Windows.
>
> Once installed, you can open a terminal by running the program Git Bash from the Windows start menu.
>
> Other solutions are available for running Bash commands on Windows.
> There is now a Bash shell command-line tool available for Windows 10 (the Windows Subsystem for Linux).
> Additionally, you can run Bash commands on a remote computer or server that already has a Unix or Linux Shell.
> This can usually be done through a Secure Shell (SSH) client.
> Free SSH clients for Windows computers include PuTTY and MobaXterm.
> See the suggestions below for information about PuTTY, MobaXterm, the Windows Subsystem for Linux, or using a Linux emulator.
>
> #### Reference
> * [Git for Windows](https://git-for-windows.github.io/) - *Recommended*
>
> ### For advanced users, you may choose one of the following alternatives:
> * Install a Secure Shell (SSH) client like [PuTTY](https://www.putty.org/) or [MobaXterm](https://mobaxterm.mobatek.net)
> * Install the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
> * Install a Linux emulator, such as [Cygwin](https://www.cygwin.com/)
{: .callout}
>   *Please note that commands in the Windows Subsystem for Linux (WSL) or Cygwin may differ slightly from those shown in the lesson or presented in the workshop.
