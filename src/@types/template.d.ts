interface TModal {
	isOpen: boolean;
	children?: ReactNode;
	onClosed?: any;
	Component?: ReactComponent;
	isAuth?: boolean;
	type?: string
	className?: string
	shouldCloseOnOverlayClick?: boolean
	offRequestClose?: boolean

}

interface TTextField {
	type?: string;
	name: string;
	placeholder?: string;
	onChange?: React.ChangeEvent;
	disabled?: boolean;
	value?: string;
	readOnly?: boolean;
	setFile?: any
	hideMark?: boolean
	className?: string
	style?: CSS
}

interface TFieldLabel {
	name: string;
	placeholder?: string;
	textFiled: any;
	icons?: ReactElement;
	disabled?: boolean;
}

interface TButton {
	type?: "button" | "submit" | "reset",
	children?: ReactNode
	isLoading?: boolean,
	className?: string,
	isDisabled?: boolean;
	variant?: string
	onClick?: ()=> void
}

interface TCheckbox {
	name: TTextField.name | FieldHookConfig<any>;
	onChange?: TTextField.onChange;
	isDisabled?: TTextField.disabled;
	value?: any;
	children?: TChildren.children;
	isChecked?: boolean
}


