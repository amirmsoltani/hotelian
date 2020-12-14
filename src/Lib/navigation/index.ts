export * from './config';
import {navigate} from './navigate';
import {goBack} from './go-back';
import {reset} from './reset';

export const commonActions = {navigate, goBack, reset};

import {push} from './push';
import {pop} from './pop';
import {replace} from './replace';

export const stackActions = {push, pop, replace};

import {openDrawer} from './open-drawer';
import {closeDrawer} from './close-drawer';
import {toggleDrawer} from './toggle-drawer';
import {jumpTo as drawerJumpTo} from './jump-to';

export const drawerActions = {openDrawer, closeDrawer, toggleDrawer, jumpTo: drawerJumpTo};
