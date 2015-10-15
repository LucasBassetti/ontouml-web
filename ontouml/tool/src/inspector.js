var CommonInspectorInputs = {

    size: {
        width: { type: 'number', min: 1, max: 500, group: 'geometry', label: 'width', index: 1 },
        height: { type: 'number', min: 1, max: 500, group: 'geometry', label: 'height', index: 2 }
    },
    position: {
        x: { type: 'number', min: 1, max: 2000, group: 'geometry', label: 'x', index: 3 },
        y: { type: 'number', min: 1, max: 2000, group: 'geometry', label: 'y', index: 4 }
    },
    custom: { type: 'text', group: 'data', index: 1, label: 'Custom data', attrs: { 'label': { 'data-tooltip': 'An example of setting custom data via Inspector.' } } }
};

var CommonInspectorGroups = {

    text: { label: 'Text', index: 1 },
    presentation: { label: 'Presentation', index: 2 },
    geometry: { label: 'Geometry', index: 3 },
    data: { label: 'Data', index: 4 }
};

var CommonInspectorTextInputs = {
    'text': { type: 'textarea', group: 'text', index: 1 },
    'font-size': { type: 'range', min: 5, max: 80, unit: 'px', group: 'text', index: 2 },
    'font-family': { type: 'select', options: ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia', 'Garamond', 'Tahoma', 'Lucida Console', 'Comic Sans MS'], group: 'text', index: 3 },
    'font-weight': { type: 'range', min: 100, max: 900, step: 100, defaultValue: 400, group: 'text', index: 4 },
    'fill': { type: 'color', group: 'text', index: 5 },
    'stroke': { type: 'color', group: 'text', index: 6, defaultValue: '#000000' },
    'stroke-width': { type: 'range', min: 0, max: 5, step: .5, defaultValue: 0, unit: 'px', group: 'text', index: 7 },
    'ref-x': { type: 'range', min: 0, max: .9, step: .1, defaultValue: .5, group: 'text', index: 8 },
    'ref-y': { type: 'range', min: 0, max: .9, step: .1, defaultValue: .5, group: 'text', index: 9 },
    'opacity': { type: 'range', min: 0, max: .9, step: .1, defaultValue: .9, group: 'text', index: 10 }
};

var InputDefs = {
    text: { type: 'textarea', label: 'Text' },
    'font-size': { type: 'range', min: 5, max: 80, unit: 'px', label: 'Font size' },
    'font-family': { type: 'select', options: ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia', 'Garamond', 'Tahoma', 'Lucida Console', 'Comic Sans MS'], label: 'Font family' },
    'font-weight': { type: 'range', min: 100, max: 900, step: 100, defaultValue: 400, label: 'Font weight' },
    'fill': { type: 'color', label: 'Fill color' },
    'stroke': { type: 'color', defaultValue: '#000000', label: 'Stroke' },
    'stroke-width': { type: 'range', min: 0, max: 5, step: .5, defaultValue: 0, unit: 'px', label: 'Stroke width' },
    'ref-x': { type: 'range', min: 0, max: .9, step: .1, defaultValue: .5, label: 'Horizontal alignment' },
    'ref-y': { type: 'range', min: 0, max: .9, step: .1, defaultValue: .5, label: 'Vertical alignment' },
    'ref-dx': { type: 'range', min: 0, max: 50, step: 1, defaultValue: 0, label: 'Horizontal offset' },
    'ref-dy': { type: 'range', min: 0, max: 50, step: 1, defaultValue: 0, label: 'Vertical offset' },
    'dx': { type: 'range', min: 0, max: 50, step: 1, defaultValue: 0, label: 'Horizontal distance' },
    'dy': { type: 'range', min: 0, max: 50, step: 1, defaultValue: 0, label: 'Vertical distance' },
    'stroke-dasharray': { type: 'select', options: ['0', '1', '5,5', '5,10', '10,5', '3,5', '5,1', '15,10,5,10,15'], label: 'Stroke dasharray' },
    rx: { type: 'range', min: 0, max: 30, defaultValue: 1, unit: 'px', label: 'X-axis radius' },
    ry: { type: 'range', min: 0, max: 30, defaultValue: 1, unit: 'px', label: 'Y-axis radius' },
    'xlink:href': { type: 'text', label: 'Image URL' }
};

function inp(defs) {
    var ret = {};
    _.each(defs, function(def, attr) {

        ret[attr] = _.extend({}, InputDefs[attr], def);
    });
    return ret;
}

var ontoumlInputs = {
		
	    inputs: _.extend({
	        attrs: {
	            '.name-text': inp({
	                'font-size': { group: 'general', index: 3 },
	                'font-family': { group: 'general', index: 4 }
	            }),
	            '.scalable': inp({
	                fill: { group: 'general', index: 5 },
	                'stroke-width': { group: 'general', index: 6, min: 0, max: 30, defaultValue: 1 },
	                'stroke-dasharray': { group: 'general', index: 7 },
	            }),
	        },
	        name: { type: 'textarea', group: 'general', index: 1, label: 'Name' },
	        namespace: { type: 'text', group: 'general', index: 2, label: 'Namespace' },
	        documentation: { type: 'textarea', group: 'general', index: 3, label: 'Documentation' },
	        attributes: { type: 'list', item: { type: 'text' }, group: 'attributes', index: 1, label: 'Attributes' },
            methods: { type: 'list', item: { type: 'text' }, group: 'methods', index: 1, label: 'Methods' }
	    }),
	    groups: {
	    	general: { label: 'General', index: 1 },
	    	attributes: { label: 'Attributes', index: 2 },
            methods: { label: 'Methods', index: 3 },
	    }
}

var ontoumlRelationshipsInputs = {
		
		inputs: _.extend({
	        label: { type: 'text', group: 'general', index: 1, label: 'Label' },
	        namespace: { type: 'text', group: 'general', index: 2, label: 'Namespace' },
	        documentation: { type: 'textarea', group: 'general', index: 3, label: 'Documentation' },
			sourceMultiplicity: { type: 'text', group: 'general', index: 4, label: 'Source' },
	        targetMultiplicity: { type: 'text', group: 'general', index: 5, label: 'Target' },
		}),	
		
		groups: {
			general: { label: 'General', index: 1 },
	    }
}

var InspectorDefs = {
		
	'ontouml.Relationships': ontoumlRelationshipsInputs,
		
	'ontouml.Kind': ontoumlInputs,
	'ontouml.Subkind': ontoumlInputs,
	'ontouml.Role': ontoumlInputs,
	'ontouml.Phase': ontoumlInputs,
	'ontouml.Collective': ontoumlInputs,
	'ontouml.Quantity': ontoumlInputs,
	'ontouml.Category': ontoumlInputs,
	'ontouml.RoleMixin': ontoumlInputs,
	'ontouml.Mixin': ontoumlInputs,
	'ontouml.Relator': ontoumlInputs,
	'ontouml.Mode': ontoumlInputs,
	'ontouml.Quality': ontoumlInputs,

};