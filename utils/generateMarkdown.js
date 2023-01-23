// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/license-${data.license}-blue)
  
  ## Description

  ${data.description}

  ### Table of contents

  * [Technologies](#technologies)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Technologies

  This project is created with:
  * ${data.technologies}

  ## Installation
  
  To install, run the following commands:

  1. Clone this repo to your local environment:
  \`\`\`
  git clone https://github.com/${data.githubName}/${data.repoName}.git
  \`\`\`

  2. Install NPM packages
  \`\`\`
  ${data.installDependencies}
  \`\`\`

  ## Usage

  The following shows the application's functionality:
  ![App demo](${data.usage})

  Navigate to a more thorough demonstration by clicking [this link](link) which will take you to a video. 

  ## License

  This project is licensed under the ${data.license} License.

  ## Contributing

  Do you have any suggestions? To contribute to this repo, follow the nest few steps:
  1. Fork the project (https://github.com/${data.githubName}/${data.repoName})<br>
  2. Create a new branch - \`\git checout -b feature/branch_name\`\<br>
  3. Commit your code on a separate branch - \`\git commit -m 'adds new feature'\`\<br>
  4. Push to the branch - \`\git push origin feature/branch_name\`\<br>
  5. Open a new Pull Request
  
  I will do my best to review your suggestion(s) in due time and merge it if all is well.

  ## Tests

  To run tests, run the following command:
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions about this repository, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can also reach me on GitHub and find more of my work at [${data.githubName}](https://github.com/${data.githubName}).

  #### [Back to top](#description)
  ---
  Copyright © 2023, ${data.fullName}
`;
}

module.exports = generateMarkdown;
