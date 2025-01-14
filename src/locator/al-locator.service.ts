import { AlLocatorMatrix } from './al-locator.types';
import { AlLocationDictionary } from './al-location.dictionary';
import { AlGlobalizer } from '../utility/al-globalizer';

/* tslint:disable:variable-name - stupid rule anyhow */
export const AlLocatorService:AlLocatorMatrix = AlGlobalizer.instantiate( 'locator', () => new AlLocatorMatrix( AlLocationDictionary ) );
