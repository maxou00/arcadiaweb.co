/**
 * @author Maximilien COMLAN
 * @description This function is used when I created carousel with replicated items and I am also showing indicators.
 * Without letting the user know that items has been replicated.
 * I am using EgJS. And when circular is true and items total length is not sufficient the circular effect is NOT applied. Design constraints.
 * Therefore my hack is to duplicate items to match the minimum required size. And it gets complex when I am trying to show indicators in such context.
 * Thus, this function is supposed to extract real index.
 * @param size 
 * @param selectedIndex 
 * @param replicas 
 * @returns the real index 
 */
function extractRealIndex(size: number, selectedIndex: number, replicas: number = 1) {
    let realSelectedIndex = selectedIndex;
    for (let i = 1; i <= replicas; i++) {
        if (selectedIndex < i * size) {
            realSelectedIndex = size - (i * size - selectedIndex);
            break;
        }
    }
    return realSelectedIndex;
}

const CarouselUtils = {
    extractRealIndex
}

export default CarouselUtils;