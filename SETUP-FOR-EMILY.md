# Getting set up on your computer

Welcome! This guide gets the website onto your own Mac so you can edit it. You only do this **once**. It takes about 20–30 minutes, and you don't need any technical background — just follow along in order.

If you get stuck on any step, that's normal. Take a screenshot and send it to Jacob, or (once you finish Step 4) just ask Claude Code to help.

---

## Before you start: accept the GitHub invite

Jacob is adding you as a collaborator on the website's code. You'll get an email from GitHub inviting you to the `EPA-Website` repository — **click the link and accept it** before doing anything below. (If you don't have a GitHub account yet, the link will walk you through making a free one first. Remember the username and password you choose — you'll need them.)

---

## Step 1 — Open Terminal

Terminal is the app where you'll type a few commands. Don't be intimidated — you're mostly copying and pasting.

1. Press `Cmd` + `Space` to open Spotlight search.
2. Type **Terminal** and press `Enter`.

A window with a blinking cursor opens. That's it. Leave it open.

---

## Step 2 — Install the tools (Homebrew, Git, Node)

**Homebrew** is a "installer of installers" for Mac. Copy this whole line, paste it into Terminal, press `Enter`, and follow any prompts (it may ask for your Mac password — typing it won't show any characters, that's normal):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

When it finishes, it may print two lines starting with `echo` and `eval` that it asks you to run. If so, copy and run those. Then install Git and Node:

```bash
brew install git node
```

To confirm it worked, run these two — each should print a version number:

```bash
git --version
node --version
```

---

## Step 3 — Download the website ("clone the repo")

This copies the website's files from GitHub onto your computer. Run these one line at a time:

```bash
cd ~/Documents
git clone https://github.com/jacobhannusch/EPA-Website.git
cd EPA-Website
```

The first time you `clone`, GitHub may ask you to sign in — use the same GitHub username and password from your invite.

Now install the site's building blocks and start it up locally:

```bash
npm install
npm run dev
```

Open your web browser and go to **http://localhost:3000** — you should see your website running on your own computer. 🎉

(To stop it later, click the Terminal window and press `Ctrl` + `C`. To start it again another day: open Terminal, run `cd ~/Documents/EPA-Website`, then `npm run dev`.)

---

## Step 4 — Install Claude Code (your editing assistant)

This is the tool that lets you change the website by just describing what you want in plain English.

```bash
npm install -g @anthropic-ai/claude-code
```

Then start it from inside the project:

```bash
cd ~/Documents/EPA-Website
claude
```

The first time, it'll ask you to sign in with your Anthropic account. Once you're in, try something simple like:

> *"What pages does this website have?"*

---

## How you'll make changes from now on

Any time you want to edit the site:

1. Open Terminal.
2. `cd ~/Documents/EPA-Website`
3. Run `claude`
4. Tell it what you want: *"Update the headline on the home page to say X"* or *"Add a new testimonial from Jane Smith."*
5. When you're happy, tell Claude: *"Commit and push this."*

Pushing sends your change to GitHub, and Vercel automatically publishes it to the live site within a couple of minutes. You never have to touch code.

**One habit worth keeping:** before you start editing on any given day, run `git pull` first (or just ask Claude *"pull the latest first"*). That makes sure you have the newest version in case anything changed.

---

## What's next

Once you're set up, open **TODO-FOR-EMILY.md** in this same folder — that's your punch-list for turning on the contact form, connecting Honeybook, and getting the site found on Google. You can ask Claude Code to walk you through any item on it.
