import React, { Component, PureComponent } from 'react';
import { Icon, Popover, Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export class ValueSources extends PureComponent {
  render() {
      const {config, valueSources, valueSrc, setValueSrcHandler} = this.props;
      
      const valueSourcesInfo = config.settings.valueSourcesInfo;
      const valueSourcesPopupTitle = config.settings.valueSourcesPopupTitle;
      //const fieldDefinition = getFieldConfig(field, config);
      //let valueSources = fieldDefinition.valueSources;
      //let valueSources = getValueSourcesForFieldOp(config, field, operator);

      if (!valueSources || Object.keys(valueSources).length == 1)
          return null;

      let content = (
          <RadioGroup
              value={valueSrc || "value"}
              size={config.settings.renderSize}
              onChange={setValueSrcHandler}
          >
              {valueSources.map(srcKey => (
                  <RadioButton
                      key={srcKey}
                      value={srcKey}
                  //checked={item.checked}
                  >{valueSourcesInfo[srcKey].label}</RadioButton>
              ))}
          </RadioGroup>
      );

      return (
          <span>
              <Popover content={content} title={valueSourcesPopupTitle}>
                  <Icon type="ellipsis" />
              </Popover>
          </span>
      );
  }
}
