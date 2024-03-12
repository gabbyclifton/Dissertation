//Define custom blocks here if necessary
Blockly.defineBlocksWithJsonArray([
  {
    "type": "set_variable",
    "message0": "%1 = %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "variable"
      },
      {
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "variables_get",
    "message0": "%1",
    "args0": [
      {   
        "type": "field_variable",
        "name": "VAR",
        "variable": "variable"
      }
    ],
    "output": null,
    "colour": 330
  },
  {
    "type": "print",
    "message0": "print ( %1 )",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "string_concat",
    "message0": "%1 + %2",
    "args0": [
      {
        "type": "input_value",
        "name": "STR1",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "STR2",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    'type': 'controls_if',
    'message0': 'if  %1 :',
    'args0': [
      {
        'type': 'input_value',
        'name': 'IF0',
        'check': 'Boolean',
      },
    ],
    'message1': '  %1',
    'args1': [
      {
        'type': 'input_statement',
        'name': 'DO0',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_CONTROLS_IF_HELPURL}',
    'suppressPrefixSuffix': true,
    'mutator': 'controls_if_mutator',
    'extensions': ['controls_if_tooltip'],
  },
  {
    "type": "create_list",
    "message0": "[%1 , %2 , %3]",
    "args0": [
      {
        "type": "input_value",
        "name": "item1"
      },
      {
        "type": "input_value",
        "name": "item2"
      },
      {
        "type": "input_value",
        "name": "item3"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "index_list",
    "message0": "%1 [ %2 ]",
    "args0": [
      {
        "type": "input_value",
        "name": "LIST"
      },
      {
        "type": "field_input",
        "name": "INDEX",
        "text": "0"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    'type': 'lists_create_empty',
    'message0': '[ ]',
    'output': 'Array',
    "colour": 230,
    'tooltip': '%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}',
    'helpUrl': '%{BKY_LISTS_CREATE_EMPTY_HELPURL}',
  },
  {
    'type': 'lists_length',
    'message0': 'len(%1)',
    'args0': [
      {
        'type': 'input_value',
        'name': 'VALUE',
        'check': ['String', 'Array'],
      },
    ],
    'output': 'Number',
    "colour": 230,
    'tooltip': '%{BKY_LISTS_LENGTH_TOOLTIP}',
    'helpUrl': '%{BKY_LISTS_LENGTH_HELPURL}',
  },
  {
    'type': 'controls_forEach',
    'message0': 'for %1 in %2:',
    'args0': [
      {
        'type': 'field_variable',
        'name': 'VAR',
        'variable': null,
      },
      {
        'type': 'input_value',
        'name': 'LIST',
        'check': 'Array',
      },
    ],
    'message1': '%1',
    'args1': [
      {
        'type': 'input_statement',
        'name': 'DO',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'loop_blocks',
    'helpUrl': '%{BKY_CONTROLS_FOREACH_HELPURL}',
    'extensions': [
      'contextMenu_newGetVariableBlock',
      'controls_forEach_tooltip',
    ],
  },
  {
    'type': 'controls_whileUntil',
    'message0': '%1 %2 :',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'MODE',
        'options': [
          ['%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}', 'WHILE'],
          ['%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}', 'UNTIL'],
        ],
      },
      {
        'type': 'input_value',
        'name': 'BOOL',
        'check': 'Boolean',
      },
    ],
    'message1': '%1',
    'args1': [
      {
        'type': 'input_statement',
        'name': 'DO',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    "colour": 120,
    'helpUrl': '%{BKY_CONTROLS_WHILEUNTIL_HELPURL}',
    'extensions': ['controls_whileUntil_tooltip'],
  },
  {
    'type': 'controls_flow_statements',
    'message0': '%1',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'FLOW',
        'options': [
          ['break', 'BREAK'],
          ['continue', 'CONTINUE'],
        ],
      },
    ],
    'previousStatement': null,
    'style': 'loop_blocks',
    'helpUrl': '%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}',
    'suppressPrefixSuffix': true,
    'extensions': ['controls_flow_tooltip', 'controls_flow_in_loop_check'],
  },
  {
    "type": "range",
    "message0": "range( %1 , %2)",
    "args0": [
      {
        "type": "input_value",
        "name": "LOW"
      },
      {
        "type": "input_value",
        "name": "HIGH"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "import_pandas",
    "message0": "import pandas libraries",
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "import_data",
    "message0": "pd.read_csv (%1)",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "dataset",
    "message0": "dataset",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "df_head",
    "message0": "%1 .head (%2)",
    "args0": [
      {
        "type": "input_value",
        "name": "DF"
      },
      {
        "type": "field_number",
        "name": "NUM",
        "value": 0
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "df_tail",
    "message0": "%1 .tail (%2)",
    "args0": [
      {
        "type": "input_value",
        "name": "DF"
      },
      {
        "type": "field_number",
        "name": "NUM",
        "value": 0
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "select_columns",
    "message0": "%1 [ %2 ]",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "variable"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "iloc",
    "message0": "%1  . iloc [%2]",
    "args0": [
      {
        "type": "input_value",
        "name": "DATA"
      },
      {
        "type": "input_value",
        "name": "ROWS"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "create_series",
    "message0": "pd.Series (%1)",
    "args0": [
      {
        "type": "input_value",
        "name": "CONTENTS"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "create_dataframe",
    "message0": "pd.DataFrame(%1)",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "column_equals",
    "message0": "%1 [ %2 ] =  %3 %4",
    "args0": [
      {
        "type": "field_variable",
        "name": "DF",
        "variable": "variable"
      },
      {
        "type": "input_value",
        "name": "COL"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "display",
    "message0": "display ( %1 )",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "import_seaborn",
    "message0": "import seaborn libraries",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "set_title",
    "message0": "%1 .set_title(%2)",
    "args0": [
      {
        "type": "input_value",
        "name": "GRAPH"
      },
      {
        "type": "field_input",
        "name": "TITLE",
        "text": "Title"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "set_xlabel",
    "message0": "%1 .set_xlabel(%2)",
    "args0": [
      {
        "type": "input_value",
        "name": "GRAPH"
      },
      {
        "type": "field_input",
        "name": "LABEL",
        "text": "X-axis"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "set_ylabel",
    "message0": "%1 .set_ylabel(%2)",
    "args0": [
      {
        "type": "input_value",
        "name": "GRAPH"
      },
      {
        "type": "field_input",
        "name": "LABEL",
        "text": "Y-axis"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "scatterplot",
    "message0": "sns.scatterplot ( %1 , x = ' %2 %3 ', y = ' %4')",
    "args0": [
      {
        "type": "input_value",
        "name": "DATA"
      },
      {
        "type": "field_input",
        "name": "XAXIS",
        "text": "total_bill"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "YAXIS",
        "text": "tip"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "histplot",
    "message0": "sns.histplot ( %1 , x = ' %2 %3 ', hue = ' %4')",
    "args0": [
      {
        "type": "input_value",
        "name": "DATA"
      },
      {
        "type": "field_input",
        "name": "XAXIS",
        "text": "total_bill"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "HUE",
        "text": "sex"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "countplot",
    "message0": "sns.countplot ( %1 , x = '%2')",
    "args0": [
      {
        "type": "input_value",
        "name": "DATA"
      },
      {
        "type": "field_input",
        "name": "XAXIS",
        "text": "day"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "lineplot",
    "message0": "sns.lineplot ( %1 , x = ' %2 %3 ', y = ' %4')",
    "args0": [
      {
        "type": "input_value",
        "name": "DATA"
      },
      {
        "type": "field_input",
        "name": "XAXIS",
        "text": "total_bill"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "YAXIS",
        "text": "tip"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "regplot",
    "message0": "sns.regplot ( %1 , x = ' %2 %3 ', y = ' %4')",
    "args0": [
      {
        "type": "input_value",
        "name": "DATA"
      },
      {
        "type": "field_input",
        "name": "XAXIS",
        "text": "total_bill"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "YAXIS",
        "text": "tip"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "pairplot",
    "message0": "sns.pairplot (%1)",
    "args0": [
      {
        "type": "input_value",
        "name": "DATA"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "plot",
    "message0": "plt.show() %1",
    "args0": [
      {
        "type": "input_end_row"
      }
    ],
    "previousStatement": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  }
]);

python.pythonGenerator.forBlock['set_variable'] = function(block, generator) {
  var variable_var = generator.getVariableName(block.getFieldValue('VAR'));
  var value_value = generator.valueToCode(block, 'VALUE', python.Order.ATOMIC);
  var code = (variable_var + " = " + value_value + "\n");
  return code;
};

python.pythonGenerator.forBlock['print'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', python.Order.ATOMIC);
  var code = ("print("+value_name+")\n");
  return code;
};

python.pythonGenerator.forBlock['string_concat'] = function(block, generator) {
  var value_str1 = generator.valueToCode(block, 'STR1', python.Order.ATOMIC);
  var value_str2 = generator.valueToCode(block, 'STR2', python.Order.ATOMIC);
  var code = value_str1 + " + " + value_str2;
  return [code, python.Order.NONE];
};

python.pythonGenerator.forBlock['create_list'] = function(block, generator) {
  var value_item1 = generator.valueToCode(block, 'item1', python.Order.NONE);
  var value_item2 = generator.valueToCode(block, 'item2', python.Order.NONE);
  var value_item3 = generator.valueToCode(block, 'item3', python.Order.NONE);
  var code = "["+ value_item1 + ", " + value_item2 + ", " + value_item3 + "]";
  return [code, python.Order.NONE];
};

python.pythonGenerator.forBlock['index_list'] = function(block, generator) {
  var value_list = generator.valueToCode(block, 'LIST', python.Order.ATOMIC);
  var text_index = block.getFieldValue('INDEX');
  var code = value_list + "[" + text_index + "]";
  return [code, python.Order.NONE];
};

python.pythonGenerator.forBlock['range'] = function(block, generator) {
  var value_low = generator.valueToCode(block, 'LOW', python.Order.ATOMIC);
  var value_high = generator.valueToCode(block, 'HIGH', python.Order.ATOMIC);
  var code = 'range('+value_low+", "+value_high+")";
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['import_pandas'] = function(block, generator) {
  var code = 'import pandas as pd\nfrom pyodide.http import open_url\nfrom pyscript import display\n';
  return code;
};

python.pythonGenerator.forBlock['import_data'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = 'pd.read_csv(open_url('+value_name+'))';
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['dataset'] = function(block, generator) {
  var code = "'https://raw.githubusercontent.com/mwaskom/seaborn-data/master/tips.csv'";
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['df_head'] = function(block, generator) {
  var value_df = generator.valueToCode(block, 'DF', python.Order.ATOMIC);
  var number_num = block.getFieldValue('NUM');
  var code = value_df+'.head('+number_num+')';
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['df_tail'] = function(block, generator) {
  var value_df = generator.valueToCode(block, 'DF', python.Order.ATOMIC);
  var number_num = block.getFieldValue('NUM');
  var code = value_df+'.tail('+number_num+')';
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['select_columns'] = function(block, generator) {
  var variable_name = generator.getVariableName(block.getFieldValue('NAME'));
  var value_name = generator.valueToCode(block, 'NAME', python.Order.ATOMIC);
  var code = variable_name+'['+value_name+']';
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['column_equals'] = function(block, generator) {
  var variable_df = generator.getVariableName(block.getFieldValue('DF'));
  var value_col = generator.valueToCode(block, 'COL', python.Order.ATOMIC);
  var value_value = generator.valueToCode(block, 'VALUE', python.Order.ATOMIC);
  var code = variable_df+'['+value_col+'] = '+value_value+'\n';
  return code;
};

python.pythonGenerator.forBlock['iloc'] = function(block, generator) {
  var value_data = generator.valueToCode(block, 'DATA', python.Order.ATOMIC);
  var value_rows = generator.valueToCode(block, 'ROWS', python.Order.ATOMIC);
  var code = value_data+'.iloc['+value_rows+']';
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['create_series'] = function(block, generator) {
  var value_contents = generator.valueToCode(block, 'CONTENTS', python.Order.ATOMIC);
  var code = 'pd.Series('+value_contents+')';
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['create_dataframe'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', python.Order.ATOMIC);
  var code = 'pd.DataFrame('+value_name+')';
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['display'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', python.Order.ATOMIC);
  var code = ("display("+value_name+")\n");
  return code;
};

python.pythonGenerator.forBlock['import_seaborn'] = function(block, generator) {
  var code = 'import seaborn as sns\nimport matplotlib.pyplot as plt\n';
  return code;
};

python.pythonGenerator.forBlock['set_title'] = function(block, generator) {
  var value_graph = generator.valueToCode(block, 'GRAPH', python.Order.ATOMIC);
  var text_title = block.getFieldValue('TITLE');
  var code = value_graph+".set_title('"+text_title+"')\n";
  return code;
};

python.pythonGenerator.forBlock['set_xlabel'] = function(block, generator) {
  var value_graph = generator.valueToCode(block, 'GRAPH', python.Order.ATOMIC);
  var text_label = block.getFieldValue('LABEL');
  var code = value_graph+".set_xlabel('"+text_label+"')\n";
  return code;
};

python.pythonGenerator.forBlock['set_ylabel'] = function(block, generator) {
  var value_graph = generator.valueToCode(block, 'GRAPH', python.Order.ATOMIC);
  var text_label = block.getFieldValue('LABEL');
  var code = value_graph+".set_ylabel('"+text_label+"')\n";
  return code;
};

python.pythonGenerator.forBlock['scatterplot'] = function(block, generator) {
  var value_data = generator.valueToCode(block, 'DATA', python.Order.ATOMIC);
  var text_xaxis = block.getFieldValue('XAXIS');
  var text_yaxis = block.getFieldValue('YAXIS');
  var code = "sns.scatterplot("+value_data+", x='"+text_xaxis+"', y='"+text_yaxis+"')";
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['histplot'] = function(block, generator) {
  var value_data = generator.valueToCode(block, 'DATA', python.Order.ATOMIC);
  var text_xaxis = block.getFieldValue('XAXIS');
  var text_hue = block.getFieldValue('HUE');
  var code = "sns.histplot("+value_data+", x='"+text_xaxis+"', hue='"+text_hue+"')";
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['countplot'] = function(block, generator) {
  var value_data = generator.valueToCode(block, 'DATA', python.Order.ATOMIC);
  var text_xaxis = block.getFieldValue('XAXIS');
  var code = "sns.countplot("+value_data+", x='"+text_xaxis+"')";
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['lineplot'] = function(block, generator) {
  var value_data = generator.valueToCode(block, 'DATA', python.Order.ATOMIC);
  var text_xaxis = block.getFieldValue('XAXIS');
  var text_yaxis = block.getFieldValue('YAXIS');
  var code = "sns.lineplot("+value_data+", x='"+text_xaxis+"', y='"+text_yaxis+"')";
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['regplot'] = function(block, generator) {
  var value_data = generator.valueToCode(block, 'DATA', python.Order.ATOMIC);
  var text_xaxis = block.getFieldValue('XAXIS');
  var text_yaxis = block.getFieldValue('YAXIS');
  var code = "sns.regplot("+value_data+", x='"+text_xaxis+"', y='"+text_yaxis+"')";
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['pairplot'] = function(block, generator) {
  var value_data = generator.valueToCode(block, 'DATA', python.Order.ATOMIC);
  var code = "sns.pairplot("+value_data+")";
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['plot'] = function(block, generator) {
  var code = 'plt.show()\n';
  return code;
};

document.addEventListener('DOMContentLoaded', function () {

  var toolbox = {
      'kind': 'categoryToolbox',
      'contents': [
        {
          "kind": "category",
          "name": "Variables",
          "contents": [
            {"kind": "block","type": "set_variable"},
            {"kind": "block","type": "variables_get"}
          ]
        },
        {
          "kind": "category",
          "name": "Outputs",
          "contents": [
            {'kind': 'block','type': 'print'}
          ]
        },
        {
          "kind": "category",
          "name": "Arithmetic",
          "contents": [
            {'kind': 'block','type': 'math_number'},
            {'kind': 'block','type': 'math_arithmetic'}
          ]
        },
        {
          "kind": "category",
          "name": "Strings",
          "contents": [
            {'kind': 'block','type': 'text'},
            {'kind': 'block','type': 'string_concat'}
          ]
        },
        {
          "kind": "category",
          "name": "Logic",
          "contents": [
            {'kind': 'block','type': 'logic_compare'},
            {'kind': 'block','type': 'logic_operation'},
            {'kind': 'block','type': 'controls_if'}
          ]
        },
        {
          "kind": "category",
          "name": "Lists",
          "contents": [
            {'kind': 'block','type': 'lists_create_empty'},
            {'kind': 'block','type': 'create_list'},
            {'kind': 'block','type': 'lists_create_with'},
            {'kind': 'block','type': 'index_list'},
            {'kind': 'block','type': 'lists_isEmpty'},
            {'kind': 'block','type': 'lists_length'},
          ]
        },
        {
          "kind": "category",
          "name": "Loops",
          "contents": [
            {"kind": "block", 'type': 'controls_forEach'},
            {'kind': 'block', 'type': 'controls_whileUntil'},
            {"kind": "block", 'type': 'controls_flow_statements'},
            {"kind": "block", 'type': 'range'}
          ]
        },
        {
          "kind": "category",
          "name": "Pandas",
          "contents": [
            {"kind": "block", 'type': 'import_pandas'},
            {"kind": "block", 'type': 'import_data'},
            {"kind": "block", 'type': 'dataset'},
            {"kind": "block", 'type': 'display'}
          ]
        },
        {
          "kind": "category",
          "name": "DataFrames",
          "contents": [
            {"kind": "block", 'type': 'df_head'},
            {"kind": "block", 'type': 'df_tail'},
            {"kind": "block", 'type': 'select_columns'},
            {"kind": "block", 'type': 'column_equals'},
            {"kind": "block", 'type': 'iloc'},
            {"kind": "block", 'type': 'create_series'},
            {"kind": "block", 'type': 'create_dataframe'}
          ]
        },
        {
          "kind": "category",
          "name": "Plotting",
          "contents": [
            {"kind": "block", 'type': 'import_seaborn'},
            {"kind": "block", 'type': 'set_title'},
            {"kind": "block", 'type': 'set_xlabel'},
            {"kind": "block", 'type': 'set_ylabel'},
            {"kind": "block", 'type': 'scatterplot'},
            {"kind": "block", 'type': 'histplot'},
            {"kind": "block", 'type': 'countplot'},
            {"kind": "block", 'type': 'lineplot'},
            {"kind": "block", 'type': 'regplot'},
            {"kind": "block", 'type': 'pairplot'},
            {"kind": "block", 'type': 'plot'}
          ]
        }
      ]
    };


  // Load Blockly
  var workspace = Blockly.inject('blocklyDiv', {
      toolbox: toolbox,
      trashcan: true
  });

  document.getElementById('createVariableBtn').addEventListener('click', function () {
    Blockly.Variables.createVariableButtonHandler(workspace, null, 'panda')
  });

  // Event listener for the "Generate Code" button
  document.getElementById('generateCodeBtn').addEventListener('click', function () {
    // Translate JavaScript to Python (this is a basic translation)
    var pythonCode = Blockly.Python.workspaceToCode(workspace);
    
    // Display the translated Python code in the output box
    document.getElementById('pythonCode').textContent = pythonCode;

  });

  function outf(text) { 
    var mypre = document.getElementById("codeOutput"); 
    mypre.innerHTML = mypre.innerHTML + text; 
  } 
  function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
  }

  // Event listener for the "Run Code" button
  document.getElementById('runCodeBtn').addEventListener('click', function () { 
    var prog = Blockly.Python.workspaceToCode(workspace); 
    var mypre = document.getElementById("codeOutput"); 
    mypre.innerHTML = ''; 
    Sk.pre = "codeOutput";
    Sk.configure({output:outf, read:builtinRead}); 
    var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, prog, true);
    });
    myPromise.then(function(mod) {
        console.log('success');
    },
        function(err) {
        console.log(err.toString());
    });
  });

});


    