import { moduleMetadata, Story } from "@storybook/angular";
import { KngShellComponent, KngShellModule, KngShellState, KngHeaderNavMenuOption, KngShellFactory } from "kinetic-angular";

export default {
    title: 'Example/Shell',
    component: KngShellComponent,
    decorators: [
        moduleMetadata({
            imports: [
                KngShellModule,
            ]
        }),
    ]
};

export const AppShell: Story<KngShellComponent> = (args: KngShellComponent) => ({
    props: {
        ...args,
        state: MockShellFactory.buildState()
    },
    template: `
    <ng-container *ngIf="state; else elseTemplate">
        <kng-shell [state]="state">
            <div role="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Sagittis nisl rhoncus mattis
                rhoncus urna neque. Suspendisse potenti nullam ac tortor vitae purus. Nisl rhoncus mattis rhoncus urna. Est
                velit egestas dui id ornare. Ultrices in iaculis nunc sed augue lacus. Sed faucibus turpis in eu mi bibendum
                neque. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Velit ut tortor pretium viverra.
                Adipiscing commodo elit at imperdiet dui accumsan sit. Nec ultrices dui sapien eget mi proin sed libero.
                Faucibus nisl tincidunt eget nullam. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.
                Id venenatis a condimentum vitae sapien pellentesque. Morbi leo urna molestie at elementum. Viverra justo nec
                ultrices dui sapien eget. Sit amet consectetur adipiscing elit duis. Amet tellus cras adipiscing enim eu. Tortor
                condimentum lacinia quis vel eros donec ac odio. Enim nunc faucibus a pellentesque sit amet porttitor eget
                dolor. Et netus et malesuada fames ac. Venenatis a condimentum vitae sapien. At tellus at urna condimentum
                mattis pellentesque id. Erat nam at lectus urna duis convallis convallis. Tellus cras adipiscing enim eu turpis.
                Tempus quam pellentesque nec nam. Faucibus interdum posuere lorem ipsum. Non odio euismod lacinia at quis risus
                sed. Dui faucibus in ornare quam viverra. Maecenas sed enim ut sem viverra aliquet eget sit amet. Vivamus at
                augue eget arcu. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Augue eget arcu dictum varius duis.
                A pellentesque sit amet porttitor eget. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.
                Accumsan tortor posuere ac ut consequat semper viverra nam. Cras fermentum odio eu feugiat pretium nibh ipsum
                consequat. Pretium vulputate sapien nec sagittis aliquam malesuada. Dui nunc mattis enim ut tellus elementum
                sagittis vitae. Tempus urna et pharetra pharetra massa massa ultricies mi. Diam quam nulla porttitor massa id.
                Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Justo laoreet sit amet cursus sit amet
                dictum. Venenatis urna cursus eget nunc scelerisque viverra. Volutpat consequat mauris nunc congue nisi vitae
                suscipit. Porttitor leo a diam sollicitudin tempor id. Tellus elementum sagittis vitae et leo duis ut diam.
                Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Nunc sed augue lacus viverra vitae. Volutpat est
                velit egestas dui id ornare. Odio morbi quis commodo odio. Mauris rhoncus aenean vel elit scelerisque mauris
                pellentesque pulvinar. Etiam erat velit scelerisque in dictum non consectetur a. Ut tortor pretium viverra
                suspendisse potenti nullam ac tortor vitae. At volutpat diam ut venenatis tellus in. Tristique magna sit amet
                purus gravida quis. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Cursus mattis molestie a
                iaculis at erat pellentesque adipiscing. Commodo ullamcorper a lacus vestibulum sed. Cras tincidunt lobortis
                feugiat vivamus at augue. Non diam phasellus vestibulum lorem sed. Mattis molestie a iaculis at erat. Neque
                volutpat ac tincidunt vitae semper quis. Quis hendrerit dolor magna eget est lorem ipsum. Id aliquet lectus
                proin nibh nisl condimentum id venenatis. Placerat duis ultricies lacus sed turpis tincidunt. Malesuada nunc vel
                risus commodo. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Vitae proin sagittis
                nisl rhoncus. Quisque id diam vel quam elementum pulvinar etiam. Ornare aenean euismod elementum nisi quis
                eleifend quam adipiscing vitae. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Odio
                pellentesque diam volutpat commodo. Condimentum lacinia quis vel eros. Suspendisse sed nisi lacus sed viverra
                tellus in. Pulvinar etiam non quam lacus. Nullam vehicula ipsum a arcu cursus. In hendrerit gravida rutrum
                quisque non. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Rhoncus mattis rhoncus urna
                neque. Nec ullamcorper sit amet risus nullam eget felis eget. Orci ac auctor augue mauris. Eget nullam non nisi
                est sit. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. In eu mi bibendum neque egestas.
                Nunc consequat interdum varius sit amet. Convallis convallis tellus id interdum velit laoreet id. Porttitor
                rhoncus dolor purus non enim. Nisl nisi scelerisque eu ultrices vitae. Vitae ultricies leo integer malesuada
                nunc vel risus. Tristique senectus et netus et malesuada fames ac. Euismod quis viverra nibh cras pulvinar
                mattis nunc. Rutrum quisque non tellus orci ac auctor augue mauris augue. Condimentum mattis pellentesque id
                nibh tortor id aliquet lectus. Vel orci porta non pulvinar. Metus dictum at tempor commodo ullamcorper a lacus.
                Arcu dui vivamus arcu felis bibendum ut. Ut eu sem integer vitae justo eget. Facilisis magna etiam tempor orci
                eu. Ultricies tristique nulla aliquet enim tortor at auctor. Ac feugiat sed lectus vestibulum mattis
                ullamcorper. Eget magna fermentum iaculis eu non diam. Porta lorem mollis aliquam ut porttitor. Ipsum a arcu
                cursus vitae congue. Iaculis eu non diam phasellus vestibulum lorem. Justo nec ultrices dui sapien eget mi proin
                sed. Id faucibus nisl tincidunt eget nullam non nisi est sit. Magna fringilla urna porttitor rhoncus dolor purus
                non. Malesuada pellentesque elit eget gravida cum. Orci phasellus egestas tellus rutrum tellus. Sed egestas
                egestas fringilla phasellus faucibus scelerisque. Condimentum vitae sapien pellentesque habitant. Vitae semper
                quis lectus nulla at volutpat diam. Donec ultrices tincidunt arcu non sodales neque. Volutpat diam ut venenatis
                tellus in metus vulputate. Dui id ornare arcu odio ut sem. Platea dictumst vestibulum rhoncus est pellentesque
                elit. Augue mauris augue neque gravida in. Sit amet consectetur adipiscing elit. At auctor urna nunc id. Quis
                varius quam quisque id diam vel quam. Ultricies integer quis auctor elit sed vulputate. Velit dignissim sodales
                ut eu sem integer vitae. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Pulvinar elementum
                integer enim neque volutpat ac tincidunt vitae semper. Tristique sollicitudin nibh sit amet commodo nulla
                facilisi nullam. Sit amet aliquam id diam maecenas. Condimentum id venenatis a condimentum vitae. Tellus rutrum
                tellus pellentesque eu. Cras pulvinar mattis nunc sed. Enim tortor at auctor urna nunc id cursus metus. Aliquet
                risus feugiat in ante metus dictum. Adipiscing at in tellus integer feugiat scelerisque. Lectus mauris ultrices
                eros in cursus turpis massa tincidunt dui. At auctor urna nunc id cursus metus. Morbi leo urna molestie at
                elementum eu facilisis sed odio. Enim ut tellus elementum sagittis vitae et leo duis. Mattis rhoncus urna neque
                viverra justo nec ultrices. Est sit amet facilisis magna etiam tempor orci eu lobortis. Molestie at elementum eu
                facilisis sed odio morbi. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Sed turpis
                tincidunt id aliquet. Molestie nunc non blandit massa enim nec dui. Bibendum arcu vitae elementum curabitur
                vitae. Sit amet justo donec enim diam. Massa enim nec dui nunc mattis. Vestibulum mattis ullamcorper velit sed
                ullamcorper morbi tincidunt ornare. Sed id semper risus in hendrerit gravida rutrum quisque non. Sed faucibus
                turpis in eu mi bibendum neque egestas. Orci sagittis eu volutpat odio facilisis mauris sit amet. Tristique
                nulla aliquet enim tortor at auctor urna nunc. Faucibus purus in massa tempor nec. In fermentum et sollicitudin
                ac orci phasellus egestas. Pellentesque massa placerat duis ultricies lacus sed. Scelerisque purus semper eget
                duis at tellus at urna. Id semper risus in hendrerit gravida rutrum quisque non tellus. Risus at ultrices mi
                tempus. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Sit amet aliquam id diam maecenas. In
                aliquam sem fringilla ut morbi tincidunt augue interdum velit. Tellus cras adipiscing enim eu. Justo laoreet sit
                amet cursus sit. Tellus elementum sagittis vitae et leo duis ut. Pellentesque pulvinar pellentesque habitant
                morbi. Scelerisque eleifend donec pretium vulputate. Donec massa sapien faucibus et molestie ac. Volutpat
                blandit aliquam etiam erat velit scelerisque in dictum non. Dis parturient montes nascetur ridiculus. Nisl
                rhoncus mattis rhoncus urna neque. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Sed viverra tellus in
                hac habitasse platea. Cras pulvinar mattis nunc sed blandit libero. Neque gravida in fermentum et sollicitudin
                ac. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Aliquet eget sit amet tellus. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Tristique et egestas quis ipsum suspendisse ultrices
                gravida dictum fusce. Nunc sed id semper risus in hendrerit gravida. Augue lacus viverra vitae congue eu
                consequat ac felis donec. Lectus sit amet est placerat in egestas. Lorem donec massa sapien faucibus et molestie
                ac. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Malesuada fames ac turpis egestas
                integer. Vel orci porta non pulvinar neque laoreet. Facilisis volutpat est velit egestas dui. Congue quisque
                egestas diam in arcu cursus. Eget velit aliquet sagittis id. Nulla facilisi cras fermentum odio. Gravida cum
                sociis natoque penatibus et magnis dis parturient. Aliquam ut porttitor leo a diam sollicitudin tempor. Nunc
                mattis enim ut tellus elementum sagittis vitae et leo. Sagittis aliquam malesuada bibendum arcu vitae elementum.
                Arcu odio ut sem nulla pharetra diam sit amet nisl. Sociis natoque penatibus et magnis dis parturient. Molestie
                nunc non blandit massa enim nec dui. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.
                Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ut diam quam nulla porttitor massa id neque
                aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Venenatis urna cursus eget nunc scele???
            </p>
            </div>
            <div role="footer">test footer</div>
            <div role="modal">
                <div class="modal-card">
                    test modal stuff
                </div>
            </div>
        </kng-shell>
    </ng-container>
    <ng-template #elseTemplate>
    Initializing
    </ng-template>
    `
});

class MockShellFactory {
    public static buildState(): KngShellState {
        const state: KngShellState = KngShellFactory.buildState();
        state.header.menu = this.buildMenu();
        return state;
    }
    private static buildMenu(): Array<KngHeaderNavMenuOption> {
        return [
            {
                id: 'cea51ba2-09d7-4a4e-8597-9d8fed4e3e0b',
                isSelected: true,
                label: `Dashboard`,
                icon: null,
                subMenu: [],
                clickOn: (event: Event) => { console.log(`Dashboard`, event) }
            },
            {
                id: '2bae218d-3507-4afb-8aba-52bd418252ad',
                isSelected: false,
                label: `UIO Management`,
                icon: null,
                subMenu: [],
                clickOn: (event: Event) => { console.log(`UIO Management`, event) }
            },
            {
                id: '1b1af7ee-1b11-4939-a719-bc68d6cb4798',
                isSelected: false,
                label: `Financing`,
                icon: null,
                subMenu: [
                    {
                        id: 'e32e7cb9-42a2-4adf-8180-42d2043e0436',
                        isSelected: false,
                        label: `Fin-Suboption 1`,
                        icon: null,
                        subMenu: [],
                        clickOn: (event: Event) => { event.stopPropagation(); console.log(`Fin-Suboption 1`, event) }
                    },
                    {
                        id: '1a55e4cc-d81c-4e43-bad9-0c86e4ad3a6b',
                        isSelected: false,
                        label: `Fin-Suboption 2`,
                        icon: null,
                        subMenu: [],
                        clickOn: (event: Event) => { event.stopPropagation(); console.log(`Fin-Suboption 2`, event) }
                    },
                    {
                        id: 'ae38fc0f-7d36-4d27-aaa3-7328795adbbb',
                        isSelected: false,
                        label: `Fin-Suboption 3`,
                        icon: null,
                        subMenu: [],
                        clickOn: (event: Event) => { event.stopPropagation(); console.log(`Fin-Suboption 3`, event) }
                    }
                ],
                clickOn: (event: Event) => { console.log(`Financing`, event) }
            },
            {
                id: '44b7017e-afc5-48e2-bffa-0cc558a115f8',
                isSelected: false,
                label: `Quotes and Orders`,
                icon: null,
                subMenu: [
                    {
                        id: 'f6413e80-75ef-4361-b6f7-0a82d59b3335',
                        isSelected: false,
                        label: `Q&O-Suboption 1`,
                        icon: null,
                        subMenu: [],
                        clickOn: (event: Event) => { event.stopPropagation(); console.log(`Q&O-Suboption 1`, event) }
                    },
                    {
                        id: '90bacce1-fe4e-40cf-b2d1-51e390ca86bb',
                        isSelected: false,
                        label: `Q&O-Suboption 2`,
                        icon: null,
                        subMenu: [],
                        clickOn: (event: Event) => { event.stopPropagation(); console.log(`Q&O-Suboption 2`, event) }
                    },
                    {
                        id: 'b6b916f5-b3c1-4ca4-a1d5-b6b1118d5e2f',
                        isSelected: false,
                        label: `Q&O-Suboption 3`,
                        icon: null,
                        subMenu: [],
                        clickOn: (event: Event) => { event.stopPropagation(); console.log(`Q&O-Suboption 3`, event) }
                    }
                ],
                clickOn: (event: Event) => { console.log(`Quotes and Orders`, event) }
            },
            {
                id: 'a9aba29f-61f4-4336-afbb-972597219fbe',
                isSelected: false,
                label: `Service Management`,
                icon: null,
                subMenu: [
                    {
                        id: 'cac3c9d1-fe04-4d6e-925b-a6b247b85c0f',
                        isSelected: false,
                        label: `SM-Suboption 1`,
                        icon: null,
                        subMenu: [],
                        clickOn: (event: Event) => { event.stopPropagation(); console.log(`SM-Suboption 1`, event) }
                    },
                    {
                        id: '6b753fb4-31fc-4d34-9e90-b7d73c2a1345',
                        isSelected: false,
                        label: `SM-Suboption 2`,
                        icon: null,
                        subMenu: [],
                        clickOn: (event: Event) => { event.stopPropagation(); console.log(`SM-Suboption 2`, event) }
                    },
                    {
                        id: 'f44092e0-ac75-44f1-895f-b7ed1c45a43f',
                        isSelected: false,
                        label: `SM-Suboption 3`,
                        icon: null,
                        subMenu: [],
                        clickOn: (event: Event) => { event.stopPropagation(); console.log(`SM-Suboption 3`, event) }
                    }
                ],
                clickOn: (event: Event) => { console.log(`Service Management`, event) }
            }

        ]
    }
}