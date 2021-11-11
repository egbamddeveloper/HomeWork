import { URL_OF_IMAGES } from './Params';

/**
 * This function return image url by name of coffee
 * Replaced all spaces in name to - and converted the capital letter to small
 */

export function getUrlOfCoffeByName(name) {

    return URL_OF_IMAGES + name.replace(/ /g, '-').toLowerCase() + ".png";
}
