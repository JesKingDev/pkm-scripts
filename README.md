## PKM Scripts

I've created this project for my own PKM tool scripts and plugins. You're welcome to use them :). Feel free to [open an Issue](https://github.com/JesKingDev/pkm-scripts/issues) or submit a feature request if you have an idea for something that may be a good addition.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Roam](#roam)
  - [Installation](#installation)
  - [Features](#features)
- [OmniFocus](#omnifocus)
  - [Copy Selection as a Roam Link](#copy-selection-as-a-roam-link)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### Roam
#### Installation
* Open (or create) the page `roam/css` in your Roam graph
* Use **cmd + shift + v** to paste the following at the top of the page

```markdown
- [[JesKingDev pkm-scripts]]
  - ```css
@import url("https://jeskingdev.github.io/pkm-scripts/roam.css"); ```
- Example
- [This is a link to an omnifocus task](omnifocus://)
- For more info, visit https://jeskingdev.github.io/pkm-scripts/

```
#### Features
* Adds an OmniFocus icon to outgoing OmniFocus app links
  * Designed to work with the [OmniFocus plugin](#omnifocus), which adds some additional context and Roam links

---

### OmniFocus
Install the plugin file as per [the OmniAutomation documentation](https://omni-automation.com/omnifocus/actions.html)

#### Copy Selection as a Roam Link
[download the plugin](https://jeskingdev.github.io/pkm-scripts/copy-roam-link.omnifocusjs)

**Features**
* Supports single or multiple selections
* Link text will be the selected task/project/folder name
* Link URL will be the OmniFocus app link to the selection
* Includes a link to a Roam notes page for any JIRA issue keys it finds
* Tasks - Includes a link to the Roam notes page for a project.
  * To override the Roam project link, specify a custom page name in brackets.
  * ex. A project named `Some Project Name I use in addition to the codename [Project 404]` will include a link to the `Project 404` page in Roam
  * ex. A project named `My Awesome Project` will include a link to the `My Awesome Project` page in Roam.

