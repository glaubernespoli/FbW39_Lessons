import {
    units
} from './units.js';

/**
 * Determines user's viewport width value in pixels. Used to determine the recommended maximum value on the range slide bar.
 * @param {number} v the desired vw
 */
function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
}

/**
 * Adds .active class to the button when clicked, and removes from previous .active one.
 */
$('div.unit-wrapper button').click((e) => {
    const active = $('div.unit-wrapper').find('.active');
    if (active.length > 0) {
        $(active[0]).removeClass('active');
    }
    $(e.target).addClass('active');

    // const unit = $($('div.unit-wrapper').find('.active')[0]).data('unit');
    // console.log(units[unit]);
});

$().ready(() => {
    console.log(units);
});