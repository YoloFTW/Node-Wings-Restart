<h3 align="center">Node-Wings-Restart</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/YoloFTW/Node-Wings-Restart.svg)](https://github.com/YoloFTW/Node-Wings-Restart/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/YoloFTW/Node-Wings-Restart.svg)](https://github.com/YoloFTW/Node-Wings-Restart/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)

- [Installing](#installing)

- [Configuration](#Configuration)

- [Usage](#usage)

- [License](#License)

- [Contribution](#Contribution)

- [Authors](#authors)

</br>

## About <a name = "about"></a>

Node-Wings-Restart is a Node.js app designed to automate the process of restarting the wings service for pterodactyl by running the "service wings restart" command periodically. This app is particularly useful for managing game servers, web applications, or any service that requires periodic restarts to ensure optimal performance.

</br>

## Installing <a name="installing"></a>

To install Node-Wings-Restart, clone the Git repository to your local machine:

```bash
git clone https://github.com/YoloFTW/node-wings-restart.git

cd node-wings-restart

npm install
```

</br>


## Configuration <a name="Configuration"></a>

To configure Node-Wings-Restart edit the .env file with the correct time and discord webhook url.

The default time is set at 00:00:00 each day.

You can also edit the "TITLE" variable to change how the module is reflected in the webhook message.

</br>


## Usage <a name="usage"></a>

To start Node-Wings-Restart, run the following command:

```bash
node index.js
```

Once configured and started, Node-Wings-Restart will handle the automatic restarts of your wings service as per the defined schedule. It will also send status updates to the specified Discord webhook after each restart.

</br>

## License <a name="License"></a>
This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.

</br>

## Contribution <a name="Contribution"></a>

Contributions are welcome! If you find a bug or have any suggestions, please open an issue or create a pull request.

</br>

## Sponsored by <a name="SponsoredBy"></a>

This has been sponsored by [Cybrancee](https://cybrancee.com/andreisawesome)

</br>

## Authors <a name = "authors"></a>

- [@YoloFTW](https://github.com/YoloFTW)