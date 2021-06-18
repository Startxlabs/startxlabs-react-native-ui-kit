export type MarginSpacing = {
	ml?: string | number;
	mr?: string | number;
	mh?: string | number;
	mv?: string | number;
};

export type PaddingSpacing = {
	pl?: string | number;
	pr?: string | number;
	ph?: string | number;
	pv?: string | number;
};

export type Spacing = MarginSpacing & PaddingSpacing;
