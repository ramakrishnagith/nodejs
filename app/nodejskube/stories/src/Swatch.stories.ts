import { moduleMetadata, Story } from "@storybook/angular";
import { KngSwatchComponent, KngSwatchModule } from "kinetic-angular";

export default {
  title: 'Example/Swatch',
  component: KngSwatchComponent,
  decorators: [
    moduleMetadata({
      imports: [
        KngSwatchModule,
      ]
    })
  ]
};

export const Standard: Story<KngSwatchComponent> = (args: KngSwatchComponent) => ({
  props: {
      ...args,
      state: {
          code: 'darkest',
          tone: 'main'
      }
  },
  template: `
    <ng-container *ngIf="state; else elseTemplate">
        <kng-swatch [state]="state"></kng-swatch>
    </ng-container>
    <ng-template #elseTemplate> Loading... </ng-template>
  `
});
