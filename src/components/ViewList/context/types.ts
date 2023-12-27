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
	handleRenameView: (id: number, name: string) => void;
};

type ActionViewAdded = {
	type: 'view/viewAdded';
	payload: { view: View; activeView: number };
};

type ActionActiveViewChanged = {
	type: 'view/viewChanged';
	payload: number;
};

type ActionRenameView = {
	type: 'view/viewRenamed';
	payload: { id: number; name: string };
};

export type Action = ActionViewAdded | ActionActiveViewChanged | ActionRenameView;
