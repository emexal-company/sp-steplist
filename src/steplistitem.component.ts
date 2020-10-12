import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import steplistStyles from './steplistitem.styles';
import { tooltipTemplate, labelTemplate } from './steplistitem.template';

@customElement('sp-steplistitem')
export class StepListItem extends Base {
  public static componentStyles = steplistStyles;

  @property({ type: String }) public marker: string = '';
  @property({ type: String }) public segment: string = '';
  @property({ type: String }) public label: string = '';
  @property({ type: String }) public tooltip: string = '';
  @property({ type: Boolean }) public first: boolean = false;
  @property({ type: Boolean }) public last: boolean = false;
  @property({ type: Boolean }) public small: boolean = false;
  @property({ type: Boolean }) public interactive: boolean = false;

  protected render() {
    if(this.tooltip !== '') {
        return tooltipTemplate.call(this);
    } else {
      return labelTemplate.call(this);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-steplistitem': StepListItem;
  }
}
