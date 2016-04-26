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
 * @fileoverview Provide zz.ui.mdl.menuitem.controllers.MenuItem class.
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.ui.mdl.menuitem.controllers.MenuItem' );

goog.require( 'goog.style' );
goog.require( 'goog.dom.classlist' );
goog.require( 'goog.events.EventType' );
goog.require( 'goog.ui.Component' );

goog.require( 'zz.ui.mdl.controllers.BaseControl' );
goog.require( 'zz.ui.mdl.menuitem.views.MenuItem' );
goog.require( 'zz.ui.mdl.RippleControl' );
goog.require( 'zz.ui.mdl.menuitem.enums.CSS' );

/**
 * @param {goog.ui.ControlContent=} opt_content Text caption or DOM structure to display as the content of the control.
 * @param {goog.ui.ControlRenderer=} opt_renderer Renderer used to render or decorate the button.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for document interaction.
 * @extends {zz.ui.mdl.controllers.BaseControl}
 * @constructor
 */
zz.ui.mdl.menuitem.controllers.MenuItem = function( opt_content, opt_renderer, opt_domHelper ){

	zz.ui.mdl.Control.call(

		this, opt_content,
		opt_renderer || zz.ui.mdl.menuitem.views.MenuItem.getInstance( ),
		opt_domHelper );

	this.setAutoStates( goog.ui.Component.State.ALL, false );
};
goog.inherits( zz.ui.mdl.menuitem.controllers.MenuItem, zz.ui.mdl.controllers.BaseControl );
goog.tagUnsealableClass( zz.ui.mdl.menuitem.controllers.MenuItem );

/**
 * Called when the component's element is known to be in the document. Anything using document.getElementById etc.
 * should be done at this stage. If the component contains child components, this call is propagated to its children.
 * @override
 */
zz.ui.mdl.menuitem.controllers.MenuItem.prototype.enterDocument = function( ){

	goog.base( this, 'enterDocument' );

	this.getHandler( ).listenWithScope(

		this.getElement( ), [

			goog.events.EventType.MOUSEUP,
			goog.events.EventType.MOUSELEAVE
		],
		this.blurListener_,
		false,
		this
	);
	if( goog.dom.classlist.contains( this.getElement( ), zz.ui.mdl.menuitem.enums.CSS.RIPPLE_EFFECT ) ){

		this.getHandler( ).listenWithScope(

			goog.dom.getElementByClass( zz.ui.mdl.menuitem.enums.CSS.RIPPLE, this.getElement( ) ),
			goog.events.EventType.MOUSEUP,
			this.blurListener_,
			false,
			this
		);
		var  ripple = new zz.ui.mdl.RippleControl( );
		this.addChild( ripple, false );
		ripple.decorate( goog.dom.getElementByClass( zz.ui.mdl.menuitem.enums.CSS.RIPPLE_CONTAINER, this.getElement( ) ) );
	}
};

/**
 * Deletes or nulls out any references to COM objects, DOM nodes, or other disposable objects. Classes that extend
 * {@code goog.Disposable} should override this method. Not reentrant. To avoid calling it twice, it must only be
 * called from the subclass' {@code disposeInternal} method. Everywhere else the public {@code dispose} method must
 * be used.
 * @inheritDoc
 **/
zz.ui.mdl.menuitem.controllers.MenuItem.prototype.disposeInternal = function( ){

	goog.base( this, 'disposeInternal' );

	this.getHandler( ).dispose( );
};

/**
 * Listener for element blur event.
 * @param {goog.events.BrowserEvent} event
 * @this {zz.ui.mdl.menuitem.controllers.MenuItem}
 * @private
 */
zz.ui.mdl.menuitem.controllers.MenuItem.prototype.blurListener_ = function( event ){

	if( event ){

		this.getElement( ).blur( );
	}
};

/**
 * Enable/disable button.
 * @param {boolean} enable
 */
zz.ui.mdl.menuitem.controllers.MenuItem.prototype.setEnabled = function( enable ){

	zz.ui.mdl.menuitem.controllers.MenuItem.superClass_.setEnabled.call( this, enable );
	this.getElement( ).disabled = !enable;
};