var Stencil = {};
var ns = 'http://localhost:8080/nemo-platform/ontology#';
var attr = { '.name-text': { 'font-size': 8 } };

Stencil.groups = {
	sortal: { index: 1, label: 'Sortal' },
	nonSortal: { index: 2, label: 'Non-Sortal' },
	moment: { index: 3, label: 'Moment' },
};

Stencil.shapes = {

	sortal: [
         new joint.shapes.ontouml.Kind({name: 'Kind', namespace: ns, attrs: attr}),
         new joint.shapes.ontouml.Subkind({name: 'Subkind', namespace: ns, attrs: attr}),
         new joint.shapes.ontouml.Role({name: 'Role', namespace: ns, attrs: attr}),
         new joint.shapes.ontouml.Phase({name: 'Phase', namespace: ns, attrs: attr}),
         new joint.shapes.ontouml.Collective({name: 'Collective', namespace: ns, attrs: attr}),
         new joint.shapes.ontouml.Quantity({name: 'Quantity', namespace: ns, attrs: attr}),
    ],
    
    nonSortal: [
         new joint.shapes.ontouml.Category({name: 'Category', namespace: ns, attrs: attr}),  
         new joint.shapes.ontouml.RoleMixin({name: 'RoleMixin', namespace: ns, attrs: attr}),  
         new joint.shapes.ontouml.Mixin({name: 'Mixin', namespace: ns, attrs: attr}),  
    ],
    
    moment: [
        new joint.shapes.ontouml.Relator({name: 'Relator', namespace: ns, attrs: attr}),  
        new joint.shapes.ontouml.Mode({name: 'Mode', namespace: ns, attrs: attr}),  
        new joint.shapes.ontouml.Quality({name: 'Quality', namespace: ns, attrs: attr}),  
   ],

    
};
