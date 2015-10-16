/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2015 Lucas Bassetti R. da Fonseca
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE. 
 */

ontology.tool.OntoUML = Backbone.View.extend({
	
	app: undefined,

	
	initialize: function() {
		
	},

	start: function(app) {
		
		this.app = app;
		this.initializeResizingProcedures();
        this.initializeRelationshipsProcedures();
		
	},
	
	//Procedure to handle with resizing
	initializeResizingProcedures: function() {
		
		var graph = this.app.graph;
		
		$.each(['show', 'hide'], function (i, ev) {
			var el = $.fn[ev];
			$.fn[ev] = function () {
				this.trigger(ev);
				return el.apply(this, arguments);
			};
		});
		
		graph.on('add', function(cell, collection, opt) {

			if (!opt.stencil) return;
			if(cell.get('type') === 'link') return;
			
			//Set font-size
			cell.attr('.stereotype/font-size', 12);
			cell.attr('.name-text/font-size', 12);
			
			var originalSize = cell.get('size');
			
			cell.set('size', {
				width: originalSize.width * 2,
				height: originalSize.height * 1.5
			});
			
		});
		
	},
	
    /**
	 * Relationships procedures
	 */
	initializeRelationshipsProcedures: function() {
		
		var graph = this.app.graph;
		var validator = this.app.validator;
		
        //Create relatiohips options 
		validator.validate('change:target change:source', function(err, command, next) {

			var link = graph.getCell(command.data.id);
            
			if(!(link.isLink())){
				return;
			}
            
			var sourceElement = graph.getCell(link.get('source').id);
			var targetElement = graph.getCell(link.get('target').id);

			//Remove if link does't have source or target
			if(!(sourceElement && targetElement)){
				link.remove();
				return;
			}
            
			var sourceSubType = sourceElement.get('subType').replace(" ", "");
			var targetSubType = targetElement.get('subType').replace(" ", "");
			
			//Remove if link does't present in relationships source
			if(!relationships[sourceSubType]) {
				link.remove();
				return;
			}
            
			//Remove if link does't present in relationships target
			if(!relationships[sourceSubType][targetSubType]) {
				link.remove();
				return;
			}
            
			//Get relationships
			var eRelationships = {};
            $.each(relationships[sourceSubType][targetSubType], function (index, relationKey) {
                if(relationshipsKeys[relationKey]) {
                    eRelationships[index] = relationshipsKeys[relationKey];
                }
                else {
                    eRelationships[index] = relationKey;
                }
		    });
			
			var source = sourceElement.get('name');
			var target = targetElement.get('name');
            
			if(target === undefined){
				target = targetElement.get('subType');
			}
			
			var content = '<table class="relationships-container">' +
							'<tr><th>' + source + ' -> ' + target + '</tr></th>';
			
			$.each(eRelationships, function(index, value){
				content = content + '<tr><td id="'+ value + '">' + value + '</td></tr>';
			});
				
			content = content +  '</table>';
			
			var dialog = new joint.ui.Dialog({
				width: 300,
				type: 'neutral',
				title: 'Create Relationship',
				content: content,
				buttons: [
				          { action: 'cancel', content: 'Cancel', position: 'left' },
				          ]
			});
			dialog.on('action:cancel', cancel);
			dialog.on('action:close', cancel);
			dialog.open();
            
			function cancel() {
				link.remove();
				dialog.close();
			};
			
			$('.relationships-container td').click(function(){
				
				var relationshipType = $(this).attr('id');	
                console.log(relationshipType);
				link.set('relationshipType', relationshipType);
                
				//close dialog
				dialog.close();
				
			});
		});
		
    },
	
});
