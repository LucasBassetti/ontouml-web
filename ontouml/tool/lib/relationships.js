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

/*
 * Template:
 * {
 * 		"relationshipKey1": "relationshipName1",
 * 		"relationshipKey3": "relationshipName2",
 * 		...
 * }
 */

relationshipsKeys =
{
	"a" : "association",
	"b" : "memberOf",
	"c" : "componentOf",
	"d"	: "mediation",
	"f"	: "formal",
	"h" : "characterization",
	"m" : "material",
	"q" : "subQuantityOf",
	"s" : "specialization",
	"u" : "subCollectionOf",
};

/*
 * Template:
 * {
 * 		"source": {
 * 			"target": ["relationshipKey1", relationshipKey2", ...],
 * 			"target": ["relationshipKey1", relationshipKey2", ...],
 * 			...
 * 		},
 * 		"source": {
 * 			"target": ["relationshipKey1", relationshipKey2", ...],
 * 			"target": ["relationshipKey1", relationshipKey2", ...],
 * 			...
 * 		},
 * ...
 * }
 */

relationships = 
{
		"Kind": {
			"Kind" : ["a","c","f","m"],
			"Quantity" : ["a","f","m"],
			"Collective" : ["a","f","m"],
			"Subkind" : ["a","f","m"],
			
			"Role" : ["a","c","f","m"],
			"Phase" : ["a","c","f","m"],
			
			"Category" : ["a","c","f","m","s"],
			"Mixin" : ["a","c","f","m","s"],
			"RoleMixin" : ["a","c","f","m"],
			
			"Relator" : ["a","d","f","m"],
			"Mode" : ["a","f","h","m"],
			"Quality" : ["a","f","h","m"],
		},
		
		"Quantity": {
			"Kind" : ["a","f","m"],
			"Quantity" : ["a","f","m","q"],
			"Collective" : ["a","f","m"],
			"Subkind" : ["a","f","m"],
			
			"Role" : ["a","f","m"],
			"Phase" : ["a","f","m"],
			
			"Category" : ["a","f","m","s"],
			"Mixin" : ["a","f","m","s"],
			"RoleMixin" : ["a","f","m"],
			
			"Relator" : ["a","d","f","m"],
			"Mode" : ["a","f","h","m"],
			"Quality" : ["a","f","h","m"],
		},
		
		"Collective": {
			"Kind" : ["a","b","f","m"],
			"Quantity" : ["a","f","m"],
			"Collective" : ["a","b","f","m","u"],
			"Subkind" : ["a","b","f","m"],
			
			"Role" : ["a","b","c","f","m"],
			"Phase" : ["a","b","c","f","m"],
			
			"Category" : ["a","b","c","f","m","s"],
			"Mixin" : ["a","b","c","f","m","s"],
			"RoleMixin" : ["a","b","c","f","m"],
			
			"Relator" : ["a","d","f","m"],
			"Mode" : ["a","f","h","m"],
			"Quality" : ["a","f","h","m"],
		},
		
		"Subkind": {
			"Kind" : ["a","c","f","m","s"],
			"Quantity" : ["a","f","m","s"],
			"Collective" : ["a","f","m","s"],
			"Subkind" : ["a","f","m","s"],
			
			"Role" : ["a","c","f","m"],
			"Phase" : ["a","c","f","m"],
			
			"Category" : ["a","c","f","m","s"],
			"Mixin" : ["a","c","f","m","s"],
			"RoleMixin" : ["a","c","f","m"],
			
			"Relator" : ["a","d","f","m"],
			"Mode" : ["a","f","h","m"],
			"Quality" : ["a","f","h","m"],
		},
		
		"Role": {
			"Kind" : ["a","c","f","m","s"],
			"Quantity" : ["a","f","m","s"],
			"Collective" : ["a","f","m","s"],
			"Subkind" : ["a","f","m","s"],
			
			"Role" : ["a","c","f","m","s"],
			"Phase" : ["a","c","f","m","s"],
			
			"Category" : ["a","c","f","m"],
			"Mixin" : ["a","c","f","m","s"],
			"RoleMixin" : ["a","c","f","m","s"],
			
			"Relator" : ["a","d","f","m","s"],
			"Mode" : ["a","f","h","m"],
			"Quality" : ["a","f","h","m"],
		},
		
		"Phase": {
			"Kind" : ["a","c","f","m","s"],
			"Quantity" : ["a","f","m","s"],
			"Collective" : ["a","f","m","s"],
			"Subkind" : ["a","f","m","s"],
			
			"Role" : ["a","c","f","m","s"],
			"Phase" : ["a","c","f","m","s"],
			
			"Category" : ["a","c","f","m"],
			"Mixin" : ["a","c","f","m","s"],
			"RoleMixin" : ["a","c","f","m","s"],
			
			"Relator" : ["a","d","f","m","s"],
			"Mode" : ["a","f","h","m"],
			"Quality" : ["a","f","h","m"],
		},
		
		"Category": {
			"Kind" : ["a","c","f","m"],
			"Quantity" : ["a","f","m"],
			"Collective" : ["a","f","m"],
			"Subkind" : ["a","f","m"],
			
			"Role" : ["a","c","f","m"],
			"Phase" : ["a","c","f","m"],
			
			"Category" : ["a","c","f","m","s"],
			"Mixin" : ["a","c","f","m","s"],
			"RoleMixin" : ["a","c","f","m"],
			
			"Relator" : ["a","d","f","m"],
			"Mode" : ["a","f","h","m"],
			"Quality" : ["a","f","h","m"],
		},
		
		"Mixin": {
			"Kind" : ["a","c","f","m"],
			"Quantity" : ["a","f","m"],
			"Collective" : ["a","f","m"],
			"Subkind" : ["a","f","m"],
			
			"Role" : ["a","c","f","m"],
			"Phase" : ["a","c","f","m"],
			
			"Category" : ["a","c","f","m","s"],
			"Mixin" : ["a","c","f","m","s"],
			"RoleMixin" : ["a","c","f","m"],
			
			"Relator" : ["a","d","f","m"],
			"Mode" : ["a","f","h","m"],
			"Quality" : ["a","f","h","m"],
		},
		
		"RoleMixin": {
			"Kind" : ["a","c","f","m"],
			"Quantity" : ["a","f","m"],
			"Collective" : ["a","f","m"],
			"Subkind" : ["a","f","m"],
			
			"Role" : ["a","c","f","m"],
			"Phase" : ["a","c","f","m"],
			
			"Category" : ["a","c","f","m","s"],
			"Mixin" : ["a","c","f","m","s"],
			"RoleMixin" : ["a","c","f","m","s"],
			
			"Relator" : ["a","d","f","m"],
			"Mode" : ["a","f","h","m"],
			"Quality" : ["a","f","h","m"],
		},
		
		"Relator": {
			"Kind" : ["a","d","f","m"],
			"Quantity" : ["a","d","f","m"],
			"Collective" : ["a","d","f","m"],
			"Subkind" : ["a","d","f","m"],
			
			"Role" : ["a","d","f","m"],
			"Phase" : ["a","d","f","m"],
			
			"Category" : ["a","d","f","m"],
			"Mixin" : ["a","d","f","m"],
			"RoleMixin" : ["a","d","f","m"],
			
			"Relator" : ["a","b","c","d","f","m","q","s","u"],
			"Mode" : ["a","f","h","m"],
			"Quality" : ["a","f","h","m"],
		},
		
		"Mode": {
			"Kind" : ["a","f","h","m"],
			"Quantity" : ["a","f","h","m"],
			"Collective" : ["a","f","h","m"],
			"Subkind" : ["a","f","h","m"],
			
			"Role" : ["a","f","h","m"],
			"Phase" : ["a","f","h","m"],
			
			"Category" : ["a","f","h","m"],
			"Mixin" : ["a","f","h","m"],
			"RoleMixin" : ["a","f","h","m"],
			
			"Relator" : ["a","d","f","h","m"],
			"Mode" : ["a","f","h","m","s"],
			"Quality" : ["a","f","h","m"],
		},
		
		"Quality": {
			"Kind" : ["a","f","h","m"],
			"Quantity" : ["a","f","h","m"],
			"Collective" : ["a","f","h","m"],
			"Subkind" : ["a","f","h","m"],
			
			"Role" : ["a","f","h","m"],
			"Phase" : ["a","f","h","m"],
			
			"Category" : ["a","f","h","m"],
			"Mixin" : ["a","f","h","m"],
			"RoleMixin" : ["a","f","h","m"],
			
			"Relator" : ["a","d","f","h","m"],
			"Mode" : ["a","f","h","m"],
			"Quality" : ["a","f","h","m","s"],
		},
}