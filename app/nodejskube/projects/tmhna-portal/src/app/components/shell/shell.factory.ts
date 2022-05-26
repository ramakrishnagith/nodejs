import { KngShellFactory, KngShellState, KngHeaderNavState, KngHeaderNavMenuOption } from "kinetic-angular";

export class ShellFactory {
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