export interface ISimplePollState {
    loaded: boolean;
    alreadyVote?: boolean;
    existingAnswer?: string;
    question?: string;
    questionInternalName?: string;
    choices?: string[];
    viewResults?: boolean;
    resultsLoaded?: boolean;
    popupOpened?: boolean;
    popupErrorOpened?: boolean;
    selectedValue?: string;
    results?: number[];
}