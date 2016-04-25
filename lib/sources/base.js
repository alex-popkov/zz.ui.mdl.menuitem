/**
 * @fileoverview Provide zz.ui.mdl.menuitem base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov Alexander)
 */

goog.provide( 'zz.ui.mdl.menuitem' );
goog.require( 'zz.ui.mdl.menuitem.views.MenuItem' );
goog.require( 'zz.ui.mdl.menuitem.enums.CSS' );

/**
 * Base namespace for zz.ui.mdl.menuitem module.
 * @const
 */
zz.ui.mdl.menuitem = zz.ui.mdl.menuitem || { };



goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.menuitem.enums.CSS.ROOT_ELEMENT, function( ){

    return new zz.ui.mdl.menuitem.views.MenuItem( );
} );

/**
 * Bootstrap module method.
 */
zz.ui.mdl.menuitem.bootstrap = function( ){

	//
};
window[ 'bootstrap' ] = zz.ui.mdl.menuitem.bootstrap;