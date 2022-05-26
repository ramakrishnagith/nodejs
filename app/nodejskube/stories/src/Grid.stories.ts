
import { moduleMetadata, Story } from "@storybook/angular";
import { KngGridComponent, KngGridModule } from "kinetic-angular";

export default {
    title: 'Example/Grid',
    component: KngGridComponent,
    decorators: [
        moduleMetadata({
            imports: [
                KngGridModule,
            ]
        }),
    ]
};

export const EqualWidthSameNumberColumns: Story<KngGridComponent> = (args: KngGridComponent) => ({
    props: args,
    template: `
    <kng-grid>
        <div class="row">
            <div class="col">
                <h1>Grid system</h1>
                <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve
                    column
                    system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.</p>

                <h2>How it works</h2>
                <p>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s
                    built
                    with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes
                    together.
                </p>
                <p>New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology,
                    guidelines,
                    and code snippets.
                </p>
            </div>
        </div>
        <div class="row grid__sample-box" style="margin: 1rem;">
            <div class="col">
                <div class="row">
                    <div class="col-sm grid__sample-box__result">
                        <div class="row">
                            <div class="col-sm" style="padding-top: 0.75rem; padding-bottom: 0.75rem; background-color: rgba(86,61,124,.15);border: 1px solid rgba(86,61,124,.2);">
                                One of three columns
                            </div>
                            <div class="col-sm" style="padding-top: 0.75rem;
                            padding-bottom: 0.75rem;
                            background-color: rgba(86,61,124,.15);
                            border: 1px solid rgba(86,61,124,.2);">
                                One of three columns
                            </div>
                            <div class="col-sm" style="padding-top: 0.75rem;
                            padding-bottom: 0.75rem;
                            background-color: rgba(86,61,124,.15);
                            border: 1px solid rgba(86,61,124,.2);">
                                One of three columns
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row grid__sample-box" style="margin: 1rem;">
            <div class="col">
                <div class="row">
                    <div class="col-sm grid__sample-box__result">
                        <div class="row">
                            <div class="col" style="padding-top: 0.75rem;
                            padding-bottom: 0.75rem;
                            background-color: rgba(86,61,124,.15);
                            border: 1px solid rgba(86,61,124,.2);">
                                1 of 2
                            </div>
                            <div class="col" style="padding-top: 0.75rem;
                            padding-bottom: 0.75rem;
                            background-color: rgba(86,61,124,.15);
                            border: 1px solid rgba(86,61,124,.2);">
                                2 of 2
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" style="padding-top: 0.75rem;
                            padding-bottom: 0.75rem;
                            background-color: rgba(86,61,124,.15);
                            border: 1px solid rgba(86,61,124,.2);">
                                1 of 3
                            </div>
                            <div class="col" style="padding-top: 0.75rem;
                            padding-bottom: 0.75rem;
                            background-color: rgba(86,61,124,.15);
                            border: 1px solid rgba(86,61,124,.2);">
                                2 of 3
                            </div>
                            <div class="col" style="padding-top: 0.75rem;
                            padding-bottom: 0.75rem;
                            background-color: rgba(86,61,124,.15);
                            border: 1px solid rgba(86,61,124,.2);">
                                3 of 3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </kng-grid>
    `
});

export const EqualWidthDifferentNumberColumns: Story<KngGridComponent> = (args: KngGridComponent) => ({
    props: args,
    template: `<kng-grid>
    <div class="row" style="margin: 1rem;">
        <div class="col" style="padding-top: 0.75rem; padding-bottom: 0.75rem; background-color: rgba(86,61,124,.15);border: 1px solid rgba(86,61,124,.2);">
            One of three columns
        </div>
        <div class="col" style="padding-top: 0.75rem; padding-bottom: 0.75rem; background-color: rgba(86,61,124,.15);border: 1px solid rgba(86,61,124,.2);">
            One of three columns
        </div>
        <div class="col" style="padding-top: 0.75rem; padding-bottom: 0.75rem; background-color: rgba(86,61,124,.15);border: 1px solid rgba(86,61,124,.2);">
            One of three columns
        </div>
    </div>
    <div class="row" style="margin: 1rem;">
        <div class="col" style="padding-top: 0.75rem; padding-bottom: 0.75rem; background-color: rgba(86,61,124,.15);border: 1px solid rgba(86,61,124,.2);">
            One of two columns
        </div>
        <div class="col" style="padding-top: 0.75rem; padding-bottom: 0.75rem; background-color: rgba(86,61,124,.15);border: 1px solid rgba(86,61,124,.2);">
            One of two columns
        </div>
    </div>
    <kng-grid>
    `
});
