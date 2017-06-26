// variables
let controllerOptions = {},
	minValue = -300,
	maxValue = 300,
	range = document.querySelector( ".progress-bar .value" );


// prototypes
Number.prototype.map = function ( in_min, in_max, out_min, out_max ) {
	return ( this - in_min) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
};

// loop
Leap.loop( controllerOptions, ( frame ) => {
	if ( frame.pointables.length ) {
		let finger = frame.pointables[ 0 ],
			percentage;

		percentage = finger.stabilizedTipPosition[ 0 ].map( minValue, maxValue, 0, 100 );
		range.style.width = `${percentage}%`;
	}
} );