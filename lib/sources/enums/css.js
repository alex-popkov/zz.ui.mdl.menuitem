/**
 * @fileoverview Provide zz.ui.mdl.menuitem.enums.CSS.
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.ui.mdl.menuitem.enums.CSS' );

/**
 * Store strings for class names defined by this component that are used in JavaScript. This allows us to simply change
 * it in one place should we decide to modify at a later date.
 * @enum {string}
 */
zz.ui.mdl.menuitem.enums.CSS = {

    RIPPLE_EFFECT: goog.getCssName( 'mdl-js-ripple-effect' ),
    RIPPLE_CONTAINER: goog.getCssName( 'mdl-button__ripple-container' ),
    RIPPLE: goog.getCssName( 'mdl-ripple' ),
    ROOT_ELEMENT: goog.getCssName( 'mdl-menu__item' )
};