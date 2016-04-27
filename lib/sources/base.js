/**
 * @fileoverview Provide zz.ui.mdl.menuitem base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov Alexander)
 */

goog.provide( 'zz.ui.mdl.menuitem' );
goog.require( 'zz.ui.mdl.MenuItemRenderer' );

/**
 * Base namespace for zz.ui.mdl.menuitem module.
 * @const
 */
zz.ui.mdl.menuitem = zz.ui.mdl.menuitem || { };

goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.MenuItemRenderer.CSS_CLASS, function( ){

    return new zz.ui.mdl.MenuItemRenderer( );
} );

/**
 * Bootstrap module method.
 */
zz.ui.mdl.menuitem.bootstrap = function( ){

	//
};

goog.exportSymbol( 'zz.ui.mdl.menuitem.bootstrap', zz.ui.mdl.menuitem.bootstrap );