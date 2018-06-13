
export function setDynamicChoices(schema, form, parameter, parentKey) {
  // First determine what form element to use
  if (parameter.choices.display) {
    if (parameter.choices.display === 'typeahead') {
      form['type'] = 'typeahead';
    } else if (parameter.choices.display === 'select') {
      form['type'] = 'select';
    } else {
      form['type'] = 'typeahead';
      console.error('Don\'t know how to render choices type \'' +
        parameter.choices.type + '\', defaulting to \'typeahead\' ' +
        '(valid options are \'typeahead\' and \'select\')');
    }
  } else {
    form['type'] = 'typeahead';
  }

  // Then determine if it should be strict (only really affects typeaheads)
  if (parameter.choices.strict) {
    form['strict'] = true;
  }

  // Then populate the choices
  // Simple case - static list of choices
  if (parameter.choices.type === 'static') {
    form['choices'] = {titleMap: parameter.choices.value};

    if (parameter.choices.details && parameter.choices.details.key_reference) {
      let field = parentKey + '.' + parameter.choices.details.key_reference;

      form['choices']['updateOn'] = field;
      form['choices']['transforms'] = [{lookupField: field}];
    }
  } else if (parameter.choices.type === 'url') {
    form['choices'] = {
      updateOn: [],
      httpGet: {
        url: parameter.choices.details['address'],
        queryParameterFields: {},
      },
    };

    for (let i=0; i<parameter.choices.details['args'].length; i++) {
      let pair = parameter.choices.details['args'][i];
      let field = parentKey + '.' + pair[1];

      form['choices']['updateOn'].push(field);
      form['choices']['httpGet']['queryParameterFields'][pair[0]] = field;
    }
  } else if (parameter.choices.type === 'command') {
    form['choices'] = {
      updateOn: [],
      callback: {
        function: 'createRequestWrapper',
        arguments: [{
          command: parameter.choices.details['name'],
          parameterNames: [],
        }],
        argumentFields: [],
      },
    };

    for (let i=0; i<parameter.choices.details['args'].length; i++) {
      let pair = parameter.choices.details['args'][i];
      let field = parentKey + '.' + pair[1];

      form['choices']['updateOn'].push(field);
      form['choices']['callback']['argumentFields'].push(field);
      form['choices']['callback']['arguments'][0]['parameterNames'].push(pair[0]);
    }

    // If it's an object then it's a fully specified command
    if (typeof parameter.choices.value === 'object') {
      Object.assign(form['choices']['callback']['arguments'][0], {
        system: parameter.choices.value.system,
        system_version: parameter.choices.value.system_version,
        instance_name: parameter.choices.value.instance_name,
      });
    }
  } else {
    console.error('Don\'t know how to handle parameter \'%s\' choices type (%s)',
      parameter.key, parameter.choices.type);
  }

  if (parameter.nullable && form['type'] === 'select') {
    if (!Array.isArray(form['choices']['transforms'])) {
      form['choices']['transforms'] = [];
    }

    form['choices']['transforms'].push('fixNull');
  }
};
