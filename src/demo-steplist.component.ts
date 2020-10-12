import { PageViewElement } from '@components/page-view-element';
import { customElement, query, property} from 'lit-element';

import styles from './demo-steplist.styles';
import template from './demo-steplist.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Steplist } from '@spectrum/sp-steplist';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

type MenuElement = { id: String, text: String, type: String, children: NestableMenuElement[] };
type NestableMenuElement = MenuElement | { [k: string]: MenuElement };

@customElement('demo-steplist')
export class DemoSteplist extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-steplist': DemoSteplist;
  }
}
