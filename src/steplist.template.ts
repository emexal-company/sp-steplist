import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { StepList } from './steplist.component';

import '@spectrum/sp-icon';

export default function template(this: StepList) {
    const classes = {
        'spectrum-Steplist--interactive': this.interactive,
        'spectrum-Steplist--small': this.small,
    };

    return html`
        <div class="spectrum-Steplist ${classMap(classes)}">
            <slot @slotchange="${this.handleSlotChange}"></slot>
        </div>
    `;
}
