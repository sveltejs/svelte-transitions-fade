export default function fade ( node, { delay = 0, duration = 400, easing = x => x } ) {
	const o = +getComputedStyle( node ).opacity;

	return {
		delay,
		duration,
		css: t => `opacity: ${easing(t) * o}`
	};
}