import { buildParameterSF } from "./parameterBuilder";

/**
 * buildCommonSF - * Builds the schema and form common to all commands.
 * @param  {Object} system  beer-garden system object.
 * @param  {Object} command beer-gardne command object.
 * @param  {Object} helptext  beer-garden helptext object
 * @return {Object}         Schema-form object that is common to all commands.
 */
export function buildCommonSF(system, command, helptext) {
  // SCHEMA
  let systemVersions = [system.version, "latest"]

  let instanceNames = [];
  for (var instance of system.instances) {
    instanceNames.push(instance.name);
  }
  instanceNames.sort();

  let commandTypes = ["ACTION", "INFO", "TEMP"]

  let helpval = helptext || 'Instance is not RUNNING, ' +
      'but you can still "Make Request"';

  let commonSchema = {
    system: {
      title: "System Name",
      type: "string",
      default: system.name,
      required: true,
    },
    system_version: {
      title: "System Version",
      type: "string",
      default: system.version,
      required: true,
    },
    namespace: {
      title: "Namespace",
      type: "string",
      default: system.namespace,
      required: true,
    },
    command: {
      title: "Command Name",
      type: "string",
      default: command.name,
      required: true,
    },
    comment: {
      title: "Comment",
      type: "string",
      default: "",
      required: false,
      maxLength: 140,
      validationMessage: "Maximum comment length is 140 characters",
    },
    output_type: {
      title: "Output Type",
      type: "string",
      default: command.output_type,
      required: false,
    },
    instance_name: {
      title: "Instance Name",
      type: "string",
      required: true,
    },
    command_type: {
      title: "Command Type",
      type: "string",
      required: true,
    },
  };

  commonSchema["system_version"]["default"] = system.version

  if (system.instances.length == 1) {
    commonSchema["instance_name"]["default"] = instanceNames[0];
    commonSchema["instance_name"]["readonly"] = true;
  }

  commonSchema["command_type"]["default"] = command.command_type

  // FORM
  const instanceHelp = {
    type: "help",
    helpvalue:
      '<div uib-alert class="alert alert-warning m-b-0">' + helpval +
      '</div><br>',
    condition: "checkInstance(instance_name)",
  };

  const systemSection = {
    type: "section",
    htmlClass: "row",
    items: [
      {
        key: "system",
        feedback: false,
        disableSuccessState: true,
        disableErrorState: true,
        readonly: true,
        required: true,
        htmlClass: "col-md-3",
      },
      {
        key: "system_version",
        feedback: false,
        disableSuccessState: true,
        htmlClass: "col-md-2",
        type: "select",
        choices: { titleMap: systemVersions },
      },
      {
        key: "command",
        feedback: false,
        disableSuccessState: true,
        disableErrorState: true,
        readonly: true,
        required: true,
        htmlClass: "col-md-3",
      },
      {
        key: "instance_name",
        feedback: false,
        disableSuccessState: true,
        htmlClass: "col-md-2",
        type: "select",
        choices: { titleMap: instanceNames },
      },
      {
        key: "command_type",
        feedback: false,
        disableSuccessState: true,
        htmlClass: "col-md-2",
        type: "select",
        choices: { titleMap: commandTypes },
      },
    ],
  };

  const hr = { type: "help", helpvalue: "<hr>" };
  const comment = {
    key: "comment",
    type: "textarea",
    feedback: true,
    disableSuccessState: false,
    disableErrorState: false,
    readonly: false,
    required: false,
    fieldHtmlClass: "m-b-3",
  };

  const buttonSection = {
    type: "section",
    htmlClass: "row",
    items: [
      {
        type: "button",
        style: "btn-warning w-100 ",
        title: "Reset",
        onClick: "reset(ngform, model, system, command.data)",
        htmlClass: "col-md-2",
      },
      {
        type: "submit",
        style: "btn-primary w-100",
        title: "Make Request",
        htmlClass: "col-md-10",
      },
    ],
  };

  const commonForm = {
    type: "fieldset",
    items: [hr, systemSection, comment, instanceHelp, buttonSection],
  };

  return {
    schema: commonSchema,
    form: commonForm,
  };
}

/**
 * buildModelSf - Build a schema and form for an object model.
 * @param  {Object} model     Parameter Model.
 * @param  {string} parentKey The key representing this model's parent.
 * @return {Object}           Schema-Form object for use by angular-schema-form.
 */
export function buildModelSF(model, parentKey) {
  let paramSchemas = {};
  let paramForms = [];

  for (let i = 0, len = model.parameters.length; i < len; i++) {
    let parameter = model.parameters[i];
    let key = parameter.key;
    let sf = buildParameterSF(parameter, parentKey);

    paramSchemas[key] = sf["schema"];
    paramForms.push(sf["form"]);
  }

  return {
    schema: paramSchemas,
    form: paramForms,
  };
}
