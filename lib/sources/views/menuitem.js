// Copyright 2005 The ZZ Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Provide zz.ui.mdl.menuitem.views.MenuItem class.
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.ui.mdl.menuitem.views.MenuItem' );

goog.require( 'goog.dom.classlist' );

goog.require( 'zz.ui.mdl.views.BaseView' );
goog.require( 'zz.ui.mdl.menuitem.enums.CSS' );

/**
 * Default renderer for {@link zz.ui.mdl.menuitem.controllers.MenuItem}s. Extends the superclass to support buttons states.
 * @constructor
 * @extends {zz.ui.mdl.views.BaseView}
 */
zz.ui.mdl.menuitem.views.MenuItem = function( ){

	zz.ui.mdl.menuitem.views.MenuItem.base( this, 'constructor' );
};
goog.inherits( zz.ui.mdl.menuitem.views.MenuItem, zz.ui.mdl.views.BaseView );
goog.addSingletonGetter( zz.ui.mdl.menuitem.views.MenuItem );


/**
 * @override
 */
zz.ui.mdl.menuitem.views.MenuItem.prototype.createDom = function( control ){

	var element= control.getDomHelper( ).createDom( goog.dom.TagName.LI, { }, control.getContent( ) );
	goog.dom.classlist.add( element, zz.ui.mdl.menuitem.enums.CSS.ROOT_ELEMENT );
	goog.dom.classlist.add( element, zz.ui.mdl.menuitem.enums.CSS.RIPPLE_EFFECT );
	goog.dom.appendChild( element, control.getDomHelper( ).createDom( goog.dom.TagName.SPAN, {

		'class': zz.ui.mdl.menuitem.enums.CSS.RIPPLE_CONTAINER

	}, control.getDomHelper( ).createDom( goog.dom.TagName.SPAN, {

		'class': zz.ui.mdl.menuitem.enums.CSS.RIPPLE
	} ) ) );
	return element;
};

/**
 * @override
 */
zz.ui.mdl.menuitem.views.MenuItem.prototype.canDecorate = function( element ){

	return element.tagName == goog.dom.TagName.LI;
};

zz.ui.mdl.menuitem.views.MenuItem.prototype.render = function(){};

/**
 * @override
 */
zz.ui.mdl.menuitem.views.MenuItem.prototype.decorate = function( control, element ){

	if( goog.dom.classlist.contains( element, zz.ui.mdl.menuitem.enums.CSS.RIPPLE_EFFECT ) ){

		goog.dom.appendChild( element, control.getDomHelper( ).createDom( goog.dom.TagName.SPAN, {

			'class': zz.ui.mdl.menuitem.enums.CSS.RIPPLE_CONTAINER

		}, control.getDomHelper( ).createDom( goog.dom.TagName.SPAN, {

			'class': zz.ui.mdl.menuitem.enums.CSS.RIPPLE
		} ) ) );
	}
	return goog.base( this, 'decorate', control, element );
};

/**
 * @override
 */
zz.ui.mdl.menuitem.views.MenuItem.prototype.getCssClass = function( ){

	return zz.ui.mdl.menuitem.enums.CSS.ROOT_ELEMENT;
};