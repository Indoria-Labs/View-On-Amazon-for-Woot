# View on Amazon for Woot
![License](https://img.shields.io/badge/license-GPLv3-blue.svg)
![Version](https://img.shields.io/badge/version-1.0-brightgreen.svg)


A lightweight, privacy-focused browser extension that adds a convenient "View on Amazon.com" button to Woot.com product pages, saving you time and hassle.

---

![Screenshot of the extension in action](https://tabula.civitat.es/images/2025/06/28/k3kFK.jpg)

### The Problem

Shopping on Woot.com is great for deals, but finding the original Amazon product to read full reviews, pictures, product details provided by the manufacturer or checking other buying options can be a chore. You have to find the ratings link, open it, and then manually edit the URL to get to the Amazon page. This extension solves that.

### The Solution

This extension automatically scans Woot product offer pages and inserts a simple, helpful "View on Amazon.com" button in a convenient spot right below the price. It's designed to look like a natural part of the page, giving you the one-click convenience you've always wanted.

## Features

* **Time-Saving:** Go directly from a Woot deal to its corresponding Amazon page in a single click.
* **Cross-Browser Support:** Works on both Google Chrome and Mozilla Firefox.
* **Privacy-First:** Requires no special permissions and collects absolutely **zero** user data. It's built to do one job safely and efficiently.

## Installation

### 1. From the Official Stores (Recommended)

Once approved, you will be able to install this extension directly from the official browser stores. This is the easiest and safest method.

* [**Get it for Chrome**](https://chromewebstore.google.com/detail/view-on-amazon-for-woot/cabpeeibklpgeokimmehnmlalpiifkbc)
* [**Get it for Firefox**](https://addons.mozilla.org/en-US/firefox/addon/view-on-amazon-for-woot/)

### 2. Sideloading for Development / Testing

If you want to run the extension directly from the source code, you can sideload it.

**Step 1: Get the Code**

First, clone or download this repository to your computer.
```sh
git clone [https://github.com/Indoria-Labs/View-On-Amazon-for-Woot](https://github.com/Indoria-Labs/View-On-Amazon-for-Woot)
```
Or, download the ZIP and extract it to a folder on your computer.

**Step 2: Load the Extension**

*For Google Chrome*

- Open Chrome and navigate to chrome://extensions.

- In the top-right corner, enable "Developer mode".

- Click the "Load unpacked" button that appears.

- Select the folder where you cloned or extracted the code. Make sure you select the correct folder containing the manifest.json for Chrome (the one with "manifest_version": 3).

- The extension is now installed locally.

*For Mozilla Firefox*

- Open Firefox and navigate to about:debugging.

- In the left-hand menu, click on "This Firefox".

- Click the "Load Temporary Add-on..." button.

- Navigate into the extension's folder and select the manifest.json file for Firefox (the one with "manifest_version": 2).

- The extension is now temporarily installed until you close Firefox.

## Privacy Policy

We do not collect, store, or transmit any personal data. The extension does not track your Browse activity. Its code runs entirely locally in your browser and only activates on woot.com/offers/ pages.

License

This project is licensed under the GPLv3 License. See the LICENSE file for details.
