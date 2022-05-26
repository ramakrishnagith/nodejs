
import { moduleMetadata, Story } from "@storybook/angular";
import { KngButtonComponent, KngButtonModule } from "kinetic-angular";

export default {
  title: 'Example/Button',
  component: KngButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        KngButtonModule,
      ]
    })
  ]
};

export const Standard: Story<KngButtonComponent> = (args: KngButtonComponent) => ({
  props: args
});
Standard.bind({});
Standard.args = {
  styleName: 'primary',
  disabled: false,
  label: 'Hello Mom'
}
