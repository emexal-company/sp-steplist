import { customElement, property, css, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import steplistStyles from './steplist.styles';
import template from './steplist.template';
import { StepListItem } from './steplistitem.component';

@customElement('sp-steplist')
export class StepList extends Base {
  public static componentStyles = [steplistStyles, css`:host {padding: 11px 0;}`];

  @property({ type: Number })  public selected: number = 0;
  @property({ type: Boolean }) public interactive: boolean = false;
  @property({ type: Boolean }) private small: boolean = false;
  @query('slot') private slot!: HTMLElement;

  protected render() {
    return template.call(this);
  }

  protected getSteps(): StepListItem[] {
    return (this.slot as HTMLSlotElement)
      .assignedNodes({ flatten: true })
      .filter((e: Node) => (e instanceof StepListItem)) as any as StepListItem[];
  }

  protected handleSlotChange() {
    if (this.slot) {
      const steps = this.getSteps();
      let hasLabels = false;
      steps.forEach((step, index) => {
        const previousStep = (index === 0) ? null : steps[index - 1];
        step.first = (index === 0);
        step.last = (index === (steps.length - 1));
        step.small = this.small;
        // Marker type
        if (index === this.selected) {
          step.marker = 'selected';
        } else if (index < this.selected) {
          step.marker = 'complete';
        } else {
          step.marker = 'uncomplete';
        }
        // Segment type
        if (index === 0) {
          step.segment = 'none';
        } else if (step.marker === 'uncomplete') {
          step.segment = 'dashed';
        } else {
          step.segment = 'solid';
        }
        hasLabels = hasLabels || (step.label !== '');
      });
      this.small = !hasLabels;
    }


  }

}

declare global {
  interface HTMLElementTagNameMap {
    'sp-steplist': StepList;
  }
}
