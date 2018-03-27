const fs = require('fs');
const path = require('path');

import {sfBuilderService} from './builder';

let sut, utilityStub;
let jsonDir = path.join(__dirname, '..', 'test', 'jsons');
let jsonData = {};

beforeAll(() => {
  let promises = [];

  let files = fs.readdirSync(jsonDir);
  for (var systemFile of files) {
    if (systemFile.endsWith('.json')) {
      let systemName = systemFile.slice(0, -5);
      jsonData[systemName] = {system: null, commands: {}};

      // Load in system definition
      jsonData[systemName]['system'] = JSON.parse(fs.readFileSync(path.join(jsonDir, systemFile), 'utf8'));

      let commandFiles = fs.readdirSync(path.join(jsonDir, systemName));
      for (var commandFile of commandFiles) {
        let commandName = commandFile.slice(0, -5);
        jsonData[systemName]['commands'][commandName] =
            JSON.parse(fs.readFileSync(path.join(jsonDir, systemName, commandFile), 'utf8'));
      }
    }
  }
});

function wrapper(system, command) {
  it('should generate correct json for'+systemfile+commandfile, function() {
    console.log('fart');
    let output = sut.build(system, command);
    jestExpect(output).toMatchSnapshot();
  });
}


describe('Schemaform builder', () => {

  beforeEach(() => {
    utilityStub = {
      escapeHtml: sinon.stub()
    };

    sut = sfBuilderService(utilityStub);
  });

  function wrapper(system, command) {
    let output = sut.build(system, command);
    jestExpect(output).toMatchSnapshot();
  }

  it('should do the things', () => {
    for (var system in jsonData) {
      for (var command in jsonData[system]['commands']) {
        let output = sut.build(jsonData[system]['system'], jsonData[system]['commands'][command]);
        jestExpect(output).toMatchSnapshot(system+command);
      }
    }
  });
});
