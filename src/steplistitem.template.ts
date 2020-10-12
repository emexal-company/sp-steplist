import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { StepListItem } from './steplistitem.component';

import '@spectrum/sp-label';
import '@spectrum/sp-tooltip';

export function labelTemplate(this: StepListItem) {
    return html`
        <div class="spectrum-Steplist-item" ?small="${this.small}" ?interactive="${this.interactive}" ?first="${this.first}" ?last="${this.last}" type="${this.marker}">
            <sp-label label="${this.label}"></sp-label>
            <span class="spectrum-Steplist-markerContainer">
                <span class="spectrum-Steplist-marker" type="${this.marker}"></span>
            </span>
            <span class="spectrum-Steplist-segment" type="${this.segment}"></span>
        </div>`;
}

export function tooltipTemplate(this: StepListItem) {
    return html`
        <div class="spectrum-Steplist-item" ?small="${this.small}" ?interactive="${this.interactive}" ?first="${this.first}" ?last="${this.last}" type="${this.marker}">
            <sp-tooltip label="${this.tooltip}">
                <span class="spectrum-Steplist-markerContainer">
                    <span class="spectrum-Steplist-marker" type="${this.marker}"></span>
                </span>
            </sp-tooltip>
            <span class="spectrum-Steplist-segment" type="${this.segment}"></span>
        </div>`;
}
