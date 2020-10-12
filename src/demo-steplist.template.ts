import { html } from 'lit-element';
import { DemoSteplist } from './demo-steplist.component';

import '@spectrum/sp-steplist';
import '@spectrum/sp-steplist';
import '@spectrum/sp-container';

import '@spectrum/sp-rule';

import '@spectrum/sp-demo';

export default function template(this: DemoSteplist) {
  return html`
    <sp-container>
      <sp-rule medium label="Steplist - Standard"></sp-rule>
      <sp-demo width="500">
        <pre><sp-steplist selected="2">
  <sp-steplistitem></sp-steplistitem>
  <sp-steplistitem></sp-steplistitem>
  <sp-steplistitem></sp-steplistitem>
  <sp-steplistitem></sp-steplistitem>
</sp-steplist></pre>
      </sp-demo>

      <sp-demo width="500">
        <pre><sp-steplist interactive selected="2">
  <sp-steplistitem></sp-steplistitem>
  <sp-steplistitem></sp-steplistitem>
  <sp-steplistitem></sp-steplistitem>
  <sp-steplistitem></sp-steplistitem>
</sp-steplist></pre>
      </sp-demo>

      <sp-rule medium label="Steplist - With labels"></sp-rule>
      <sp-demo width="500">
        <pre><sp-steplist selected="2" >
  <sp-steplistitem label="Step 1"></sp-steplistitem>
  <sp-steplistitem label="Step 2"></sp-steplistitem>
  <sp-steplistitem label="Step 3"></sp-steplistitem>
  <sp-steplistitem label="Step 4"></sp-steplistitem>
</sp-steplist></pre>
      </sp-demo>

      <sp-demo width="500">
        <pre><sp-steplist interactive selected="2">
  <sp-steplistitem label="Step 1"></sp-steplistitem>
  <sp-steplistitem label="Step 2"></sp-steplistitem>
  <sp-steplistitem label="Step 3"></sp-steplistitem>
  <sp-steplistitem label="Step 4"></sp-steplistitem>
</sp-steplist></pre>
      </sp-demo>

      <sp-rule medium label="Steplist - With tooltip"></sp-rule>
      <sp-demo width="500">
        <pre><sp-steplist selected="2" >
  <sp-steplistitem tooltip="Step 1"></sp-steplistitem>
  <sp-steplistitem tooltip="Step 2"></sp-steplistitem>
  <sp-steplistitem tooltip="Step 3"></sp-steplistitem>
  <sp-steplistitem tooltip="Step 4"></sp-steplistitem>
</sp-steplist></pre>
      </sp-demo>

      <sp-demo width="500">
        <pre><sp-steplist interactive selected="2">
  <sp-steplistitem tooltip="Step 1"></sp-steplistitem>
  <sp-steplistitem tooltip="Step 2"></sp-steplistitem>
  <sp-steplistitem tooltip="Step 3"></sp-steplistitem>
  <sp-steplistitem tooltip="Step 4"></sp-steplistitem>
</sp-steplist></pre>
      </sp-demo>

    </sp-container>
  `;
}
