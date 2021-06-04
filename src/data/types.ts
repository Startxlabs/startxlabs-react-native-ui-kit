type MarginSpacing = {
	ml?: string | number;
	mr?: string | number;
	mh?: string | number;
	mv?: string | number;
};

type PaddingSpacing = {
	pl?: string | number;
	pr?: string | number;
	ph?: string | number;
	pv?: string | number;
};

type Spacing = MarginSpacing & PaddingSpacing;
