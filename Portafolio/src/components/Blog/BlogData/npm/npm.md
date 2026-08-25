# **Dependency and Package Management with NPM**

I just finished a **NPM** course on the [PLatzi] platform (https://platzi.com/cursos/npm/) &nbsp;it was a simple course to review and I make this post.

---

## What is NPM (node package manager)?

It is a default package manager for Node.js, the most popular JavaScript, where you will find a large amount of resources to implement in your projects. You will also be able to create your own packages and share them with the entire community. [NPM](https://www.npmjs.com/)

### **First Steps**

- Install [NodeJs](https://nodejs.org/es/). Node.js comes with npm integrated with its installation
- We can also check for newer versions of NPM and install them with the command
  `npm install -g npm@latest`

### **Recommendation**

> Managing npm is very easy, and if you have any questions about any command, you can use one of the following commands:
>
> - `npm help` Shows the most used commands and their usage, and also all available commands
> - `npm <command> -h` Show help for some command

Another good resource is to look for documentation

## Basic configuration

### **Start a project**

`npm init` Creates a `package.json` file which has all the information about our project, the packages, scripts, etc.

`npm init -y` or `npm init -yes` Creates the `package.json` file with the basic information of our project, saying yes to everything, with the default data.

And to speed up the process of the `npm init -y` command we can set default data:

`npm set init.author.email <email>` Assigns an email as default

`npm set init.author.name <name>` Assigns a name as default

`npm set init.license <license>` Assigns a license as default

## Installing dependencies

### **Installation of Required dependencies**

The dependencies must be installed in the root folder of our project.

`npm install <pkg>` || `npm i <pkg> —save` || `npm i <pkg> —S` || `npm i <pkg>` By default it has the -S save flag, this command installs as a required dependency for the project (Required for production)

Install moment package `npm install moment`

- We can reduce the syntax, where **i** is short for install and **-S** is short for —save
- **node_modules** folder: all the modules that we add to our project will be installed here.
- **package-lock.json** file: avoids this general behavior of updating minor or fix versions so that when someone clones our repository and runs **npm install** on their computer, npm will examine **package-lock.json** and install the exact version of the packages that we had installed, thus ignoring the **^** and **~** of package.json.
- Simulate the installation of a package `npm i <pkg> --dry-run`
- Force installation of a package ` npm i <pkg> -f` || `npm i <pkg> --force `
- Install a specific version of a package `npm i <pkg> @<version>`

### **Installation of Global dependencies**

`npm i <pkg> -g` Installs a package globally so that it can be used in different projects.

After its installation, we can see the list of dependencies that we have installed globally with the following command: `npm list -g --depth 0`

### **Installation of Optional dependencies**

`npm i <pkg> -O` We can optionally install a package

### **List project packages**

`npm list` To list the packages that a specific project has, Show the package hierarchy tree

## Update and remove packages

- `npm update` -- Update all the dependencies of our project.
- `npm update <pkg>` -- Update a specific package.
- `npm uninstall <pkg>` -- Uninstall the project and json a dependency.
- `npm uninstall <pkg>` --no-save -- Uninstalls the package from node_modules but not from **package.json**.

---

- `npm outdate` Shows the packages that can be updated, the current and most recent version to which it can be updated, as well as its location and if it is required by another dependency it will also say which dependency needs it.
- `npm outdate —dd` Shows out-of-date packages and all revisions in greater detail
  (The `—dd` activates the `—verbose` mode and what it does is display detailed information, it can also be used for other commands)

## **Security**

- `npm audit` -- Show more information about the vulnerabilities.
- `npm audit --json` -- Does the same thing but with a json.
- `npm update <pkg> --depth 2` -- Update the vulnerable package (Depth is the depth it will reach)

## Package version symbols

`**^**` Updates when minor changes or patches/bug fixes are made
This symbol is called _circumflex accent (In Mexico)_ and is set with `alt + 94` \*\*

`~` Update when patches/bug fixes are made
This symbol is called _virgulilla (In Mexico)_ and is set with `alt + 126`

**`<`** Version lower than the specified version.

**`<=`** Version lower than or equal to the specified version.

**`>`** Version higher than the specified version.

**`>=`** Version higher than or equal to the specified version.

![ff](https://blog.desdelinux.net/wp-content/uploads/2020/10/NPM.jpg.webp)
