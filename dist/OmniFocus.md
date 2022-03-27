## OmniFocus Plugins


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Copy Selection as a Markdown Link](#copy-selection-as-a-markdown-link)
  - [Features](#features)
- [BillPay Export](#billpay-export)
  - [Usage](#usage)
    - [Example Task](#example-task)
    - [Example Perspective](#example-perspective)
    - [Example Output](#example-output)
    - [Tips](#tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation
Download the plugin file and unzip to the plugin location as per [the OmniAutomation documentation](https://omni-automation.com/omnifocus/actions.html)

## Copy Selection as a Markdown Link
[download this plugin](https://jeskingdev.github.io/pkm-scripts/copy-markdown-link.omnifocusjs)

### Features
* Link text = selected task/project/folder name
* Link URL = OmniFocus app link to the selection
* Supports single or multiple selections
* If the selection's name includes one or more JIRA issue keys, a link to that issue's page (Obsidian/Roam format) will be included.

## BillPay Export
[download this plugin](https://jeskingdev.github.io/pkm-scripts/billpay.omnifocusjs)

This plugin exports a table containing billpay information for the open perspective. 

Includes the amount, due date, and a running total.

### Usage
* Create a custom perspective that shows the items you want in your export.
* For any billpay item, add the amount at the end of the task name surrounded by parenthese.
  * The amount must be a valid US currency amount
  * Ex. ($12), ($12.34), (12), (12.34), (12)

#### Example Task
- _Pay Electricity Bill | Power Company (200.00)_
  - add tags if desired (I use the tag `$$$`)
  - set the due date if necessary
  - If the bill is recurring
    - set the appropriate repeat interval with _Repeat from Assigned Dates_
    - Set a defer date on the task
      - The date the invoice is generated is generally included on the bill; or you can set the date to when you usually receive it.
      - Or, if you prefer to pay certain bills at certain times of the month, set defer dates for those bills (ex. some on 1st and some on 15th)
      
#### Example Perspective
- Name = BillPay
- Icon = I use a money/currency symbol
- Rules
  - All of the following are true
    - Availability = Available
    - Any of the following are true
      - Tagged with any of: _$$$ or your desired tags_
      - Contained within the project or folder: _Finances or your desired projects/folders_

The "Presentation" of the perspective is up to you. The items aren't grouped, but it may be helpful to sort them, since the export includes a running total.
I use
- Group and Sort = Individual Actions
- Group actions by = Flagged
- Sort actions by = Due

This configuration allows me to flag items wehre needed and have those show at the top of my export. Ex. the invoice is not due for a while, but a project cannot start until the invoice is paid in full.


#### Example Output
```markdown

| paid | description                                | due on          | amount  | running_total |
| ---- | ------------------------------------------ | --------------- | ------- | ------------- |
| [ ]  | Electricity Bill | Power Company           | Sat Mar 26 2022 | 200.00  | 200.00       |
| [ ]  | Water Bill | County Water Utility          | Tue Mar 29 2022 | 50      | 250.00        |
```

| paid | description                                | due on          | amount  | running_total |
| ---- | ------------------------------------------ | --------------- | ------- | ------------- |
| [ ]  | Electricity Bill | Power Company           | Sat Mar 26 2022 | 200.00  | 200.00       |
| [ ]  | Water Bill | County Water Utility          | Tue Mar 29 2022 | 50      | 250.00        |

#### Tips
* I like to use the language "Pay" and "Confirm AutoPay" to remind me which ones I've set up for autopay.
* If a bill has a variable amount, I include something like `**Variable Amount**` to remind me to check the specific amount for this instance.
* For most bills, I have a single action list with all of them there. I use this in my perspective.
* I use a tag as well, because often I will have invoices to pay associated with a project. This allows me to see those in context of the project, while also being included when I'm paying bills.
* Use the sort configuration in your perspective to list the output in your desired order.