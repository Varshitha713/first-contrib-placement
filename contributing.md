# 🤝 Contributing to Placement Resources

Welcome to the community! 🎉

Thank you for your interest in contributing to Placement Resources — a centralized platform to share study and interview preparation materials for students and job seekers. This guide will help you contribute confidently, especially if you're new to open source.

This guide will help you contribute confidently, especially if you're new to open source.

---

## 📌 Project Overview

**Placement Resources** is a simple website that displays useful study and interview prep resources. Contributors add their own resource cards and/or help improve the website's UI/UX.

Live Preview: [first-contrib-placement.netlify.app](https://first-contrib-placement.netlify.app/)

---

## ⭐ Show Your Support

If you find this project helpful, consider ⭐ starring the repo — it motivates us to keep improving!

---

## 📌 Before You Begin

- Please read the [README.md](./README.md) to understand the project's purpose, setup instructions, and goals.
- Join our community and get involved:
  - 💬 [GitHub Discussions](https://github.com/Varshitha713/first-contrib-placement/discussions)
  - 💬 [Discord Server](https://discord.gg/eZUc6NA4Np)
- Ensure you're working on the latest `main` branch before starting any work.

---

## 🧠 Contribution Guidelines

Please follow these to ensure smooth collaboration and maintain quality.

### ✅ DOs

- Check if an issue already exists before creating a new one.
- Ask to be assigned before starting work.
- Mention the issue number in your PR (`Fixes #<number>` or `Closes #<number>`).
- Test your changes locally before submitting a PR.
- Keep PRs focused — one feature or fix per PR.
- Submit **one pull request per issue** to keep the review process clean and focused.
- Use screenshots for any visual/UI updates.

### ❌ DON’Ts

- Don’t comment **"I want to work"** on issues already assigned to someone else.  
- Don’t open PRs **without linking them to an issue**.  
- Don’t spam with duplicate or irrelevant issues.

---

## 🧠 Contributor Assignment Policy

To maintain fairness, transparency, and active contribution in our open-source community, we follow these simple rules regarding issue assignments:

### 🔢 Issue Assignment Limit

- ✅ A contributor can be assigned up to **2 open issues** at a time.
- 🚫 You **cannot be assigned new issues** until you've submitted a **pull request (PR)** for at least **one** of your current assignments.
- 🕐 This ensures fair opportunity for everyone and avoids issue hoarding or inactivity.

### ✅ Tip for Contributors

Once your pull request is created and linked to an assigned issue, feel free to request another!  

We're always happy to see active and consistent contributors. 😊

---

## 🚀 What You Can Contribute

- 🆕 Add new **resource cards** (title, link, description, and category).  
- 🛠️ Improve **UI/UX** — layout, responsiveness, or animations.  
- 🐞 Fix **bugs** — check the Issues tab.  
- 📝 Improve **documentation** — fix typos, clarify instructions, or reformat content.

---

## 🔍 Find or Create an Issue

- Check the [Issues tab](https://github.com/Varshitha713/first-contrib-placement/issues) for available tasks.
- ✅ **Only work on issues assigned to you.** If you're interested in an unassigned issue, comment:
  > "Can I work on this?"
  and wait for a maintainer to assign it.
- ❌ Avoid commenting on someone else's issue unless you're offering help or feedback.
- 🧠 Before creating a new issue:
  - Search both open and closed issues to avoid duplicates.

---

## 🧾 Steps to Add a Resource or Make Changes

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
git clone https://github.com/Varshitha713/first-contrib-placement.git
cd first-contrib-placement
```

### 2. Create a Branch

```bash
git checkout -b fix/issue-<number>-short-description
```

### 3. Make Your Changes

* Open `index.html`
* Locate the appropriate category (e.g., DSA, Aptitude)
* Add your resource following the existing card format

Ensure your card includes:

✅ A working link

✅ A short and clear description

✅ A valid category tag

### 4. Test Your Changes

* Check responsiveness on different screen sizes
* Verify that your changes don’t break any existing functionality
* Review in both light and dark mode (if applicable)

### 5. Commit Your Changes

```bash
git commit -m "feat: added [Resource Name] to [Category] (#issue-number)"
```

### 6. Push to Your Fork

```bash
git push origin fix/issue-<number>-short-description
```

### 7. Open a Pull Request

* Open a PR from your branch to the `main` branch
* Mention the issue like this:

```md
Fixes #issue-number
```

* Provide a short summary of your changes
* Add before/after screenshots if the UI was affected
* Mark the PR as **“Ready for Review”**

---

## ✅ Commit & PR Guidelines

### ✅ Commit Messages

Use clear, descriptive messages. Example:

```bash
fix: resolved button alignment issue (#34)
feat: added sorting algorithm card to DSA category (#18)
docs: updated README with project setup instructions
```

### ✅ Pull Requests
* Reference the relevant issue. Link the issue using :
  
  ```bash
  Fixes #34
  Resolves #12
  ```
  
* Keep PRs focused and minimal, and use labels like bug, enhancement, or documentation.
* For UI changes, include before/after screenshots and ensure it works in both light and dark mode.
* Only work on assigned issues, and reference the issue in your PR (e.g., Fixes #10).
* For new features, open an issue first, and mark your PR as Ready for Review when done.


## 🛠️ Code Style Guide

* Follow consistent indentation and formatting
* Keep all custom styles in `styles/style.css`
* Reuse components where possible
* Use comments for clarity where needed

---

## 🧪 Testing Your Changes

Make sure your updates:

* Work as expected without breaking other features
* Are responsive across screen sizes
* Include test cases, if applicable

---

## 📜 Code of Conduct

We aim to foster a respectful, inclusive, and welcoming environment for everyone.

* Be respectful and constructive
* Use inclusive and professional language
* Accept feedback gracefully

📄 [Read our full Code of Conduct](./CODE_OF_CONDUCT.MD)

---

## 💬 Support & Community

Need help or want to brainstorm ideas?

* Ask in our [GitHub Discussions](https://github.com/Varshitha713/first-contrib-placement/discussions)
* Join our [Discord Server](https://discord.gg/eZUc6NA4Np) 

We're here to help you grow and contribute successfully! 💪

---

## 🙌 Credits

Made with ❤️ by **Macha Varshitha**

Open to feedback, contributions, and suggestions! 🚀
