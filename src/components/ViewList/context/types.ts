export type View = {
	name: string;
	query: string;
	variables: string;
	headers: string;
};

export type ViewInitialState = {
	views: View[];
	activeView: number;
};

export type ViewContext = ViewInitialState & {
	handleActiveView: (index: number) => void;
	handleAddView: () => void;
};

type ActionViewAdded = {
	type: 'view/viewAdded';
	payload: { view: View; activeView: number };
};

type ActionActiveViewChanged = {
	type: 'view/viewChanged';
	payload: number;
};

export type Action = ActionViewAdded | ActionActiveViewChanged;
