/** Keyboard Shortcuts Button Configuration */
export class KeyboardShortcutsConfiguration {

    buttonsArray: {
        title: string,
        ctrlKey: boolean,
        shiftKey: boolean,
        altKey: boolean,
        key: string,
        route: string,
        id?: string
    }[];

    constructor() {
        this.makeCombination();
    }

    makeCombination() {
        this.buttonsArray = [
            // Navigation Page - alt + n
            {
                title: 'Navigation Page',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'n',
                route: 'navigation'
            },
            // Run Report - alt + t
            {
                title: 'Run Report',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 't',
                route: '',
                id: 'runReport'
            },
            // Checker Inbox & Pending Tasks - alt + i
            {
              title: 'Checker Inbox & Pending Tasks',
              ctrlKey: false,
              shiftKey: false,
              altKey: true,
              key: 'i',
              route: 'checker-inbox-and-tasks/checker-inbox'
            },
            // Collection Sheet- ctrl + alt + o
            // {
            // title: 'Collection Sheet',
            // ctrlKey: true,
            // shiftKey: false,
            // altKey: true,
            // key: 'o',
            // route: ''
            // },
            // Create Client - alt + c
            {
                title: 'Create Client',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'c',
                route: 'clients/create'
            },
            // Create Group - alt + g
            {
                title: 'Create Group',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'g',
                route: 'groups/create'
            },
            // Create Center - alt + q
            {
                title: 'Create Center',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'q',
                route: 'centers/create'
            },
            // Frequent Posting - alt + f
            {
                title: 'Frequent Posting',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'f',
                route: 'accounting/journal-entries/frequent-postings'
            },
            // Closure Entries - alt + e
            {
                title: 'Closure Entries',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'e',
                route: 'accounting/closing-entries'
            },
            // Journal Entry - alt + j
            {
                title: 'Journal Entry',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'j',
                route: 'accounting/journal-entries/create'
            },
            // Reports - alt + r
            {
                title: 'Reports',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'r',
                route: 'reports'
            },
            // Accounting - alt + a
            {
                title: 'Accounting',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'a',
                route: 'accounting'
            },
            // Save/Submit Forms - alt + s
            {
                title: 'Save/Submit Forms',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 's',
                route: '',
                id: 'submit'
            },
            // Cancel - alt + x
            {
                title: 'Cancel',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'x',
                route: '',
                id: 'cancel'
            },
            // Help - alt + h
            {
                title: 'Help',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'h',
                route: '',
                id: 'help'
            },
            // Pagination: Next - ctrl + n
            // {
            //     title: 'Pagination: Next'
            //     ctrlKey: true,
            //     shiftKey: false,
            //     altKey: true,
            //     key: 'n,
            //     route: ''
            // },
            // Pagination: Previous - ctrl + p
            // {
            //     title: 'Pagination: Previous'
            //     ctrlKey: true,
            //     shiftKey: false,
            //     altKey: true,
            //     key: 'p,
            //     route: ''
            // },
            // Logout - alt + l
            {
                title: 'Logout',
                ctrlKey: false,
                shiftKey: false,
                altKey: true,
                key: 'l',
                route: '',
                id: 'logout'
            }
        ];
    }

    get buttonCombinations() {
        return this.buttonsArray;
    }

}
