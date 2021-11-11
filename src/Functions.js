import { URL_OF_IMAGES } from './Params';


export function getUrlOfCoffeByName(name) {

    return URL_OF_IMAGES + name.replace(/ /g, '-').toLowerCase() + ".png";
}
