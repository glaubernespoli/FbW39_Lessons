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
 * @param {object} button the button element
 */
function setCurrentActiveUnit(button) {
    const active = $('div.unit-wrapper').find('.active');
    if (active.length > 0) {
        $(active[0]).removeClass('active');
    }
    $(button).addClass('active');
}

/**
 * Updates the unit-info container with the new information.
 * @param {object} button the button element
 */
function updateInfoDisplay(button) {
    const currentUnitLabel = $(button).data('unit');
    console.log($('.unit-info-wrapper'));
    $('.unit-info-wrapper').replaceWith(buildInfoDisplayFor(currentUnitLabel));
}

/**
 * Builds the informational HTML for the selected unit.
 * @param {string} currentUnitLabel the selected unit
 */
function buildInfoDisplayFor(currentUnitLabel) {
    const currentUnit = units[currentUnitLabel];
    const conversions = currentUnit.conversion;

    let info = `<div class="unit-info-wrapper">
    <div class="unit-info">`;
    info += `<h4>${currentUnit.name} (<label class="${currentUnitLabel}">${currentUnitLabel}</label>)</h4><ul>`;
    for (let key in conversions) {
        info += `<li>1 <label class="${currentUnitLabel}">${currentUnitLabel}</label> = ${conversions[key]} <label class="${key}">${key}</label></li>`;
    }
    info += '</ul></div></div>';

    return info;
}

/**
 * Updates the content area for the selected unit element.
 * @param {object} button the button element
 */
function updateSelectedContent(button) {
    $('.selected-wrapper').fadeOut(300, () => {
        updateInfoDisplay(button);
    }).fadeIn(300);
}

/**
 * Actions to be done once the unit button is clicked.
 */
$('div.unit-wrapper button').click(e => {
    const button = e.target;
    setCurrentActiveUnit(button);
    updateSelectedContent(button);
});

/**
 * Actions to be done once one of the unit range buttons is clicked.
 */
$('div.unit-range-box').click(e => {
    const rangeElement = e.target;
    console.log(rangeElement);
    $(rangeElement).children('span').hide();
    $(rangeElement).children('input').fadeIn(300).focus();
});

/**
 * Actions to be done once one of the unit range inputs loses focus.
 */
$('div.unit-range-box input').focusout(e => {
    const inputElement = e.target;
    const parentDiv = $(inputElement).parent();
    $(inputElement).hide();
    $(parentDiv).children('span').fadeIn(300);
});