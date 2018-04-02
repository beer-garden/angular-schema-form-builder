const fs = require('fs');
const path = require('path');

import {sfBuilderService} from '../../src/builder';

let sut;
let jsonDir = path.join(__dirname, 'data');
let jsonData = {};

let files = fs.readdirSync(jsonDir);
for (var systemFile of files) {
  if (systemFile.endsWith('.json')) {
    let systemName = systemFile.slice(0, -5);
    jsonData[systemName] = {system: null, commands: {}};

    // Load in system definition
    jsonData[systemName]['system'] =
      JSON.parse(fs.readFileSync(path.join(jsonDir, systemFile), 'utf8'));

    let commandFiles = fs.readdirSync(path.join(jsonDir, systemName));
    for (var commandFile of commandFiles) {
      jsonData[systemName]['commands'][commandFile.slice(0, -5)] = JSON.parse(
          fs.readFileSync(path.join(jsonDir, systemName, commandFile), 'utf8'));
    }
  }
}

describe('Schemaform builder', () => {

  beforeEach(() => {
    sut = sfBuilderService();
  });

  for (let system in jsonData) {
    for (let command in jsonData[system]['commands']) {

      it(`should build the schema and form for ${system}: ${command}`, () => {
        jestExpect(sut.build(
          jsonData[system]['system'],
          jsonData[system]['commands'][command]
        )).toMatchSnapshot();
      });
    }
  }

});
