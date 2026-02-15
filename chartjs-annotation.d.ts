import 'chartjs-plugin-annotation';

declare module 'chartjs-plugin-annotation' {
	interface AnnotationTypeRegistry {
		doughnutLabel: {
			type: 'doughnutLabel';
			content: string[] | (() => string[]);
			font?: { size?: number; weight?: number }[];
			color?: string[];
		};
	}
}
