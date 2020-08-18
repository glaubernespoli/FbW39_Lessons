import {
    units
} from './units.js';

/**
 * Determines user's viewport width value in pixels. Used to determine the recommended maximum value on the range slide bar.
 * @param {number} v the desired vw
 */
function vw(v) {
    var w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    );
    return (v * w) / 100;
}

//TODO pegar width do parent?
function getMaxValueRangeFor(unitLabel) {
    const unit = units[unitLabel];
    const maxWidth = vw(88);
    return unitLabel === 'px' ? maxWidth : maxWidth / unit.conversion.px;
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
function updateInfoDisplay(currentUnitLabel) {
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
    const currentUnitLabel = $(button).data('unit');
    $('.selected-wrapper')
        .fadeOut(300, () => {
            updateInfoDisplay(currentUnitLabel);
            updateRangeValues(currentUnitLabel);
        })
        .fadeIn(300);
}

//TODO
function updateRangeValues(currentUnitLabel) {
    const maxWidth = getMaxValueRangeFor(currentUnitLabel);

    $('#unit-range-min').val(0);
    $('#unit-range-current').val(Math.round(maxWidth / 2));
    $('#unit-range-max').val(Math.round(maxWidth));
}
/**
 * Actions to be done once the unit button is clicked.
 */
$('div.unit-wrapper button').click((e) => {
    const button = e.target;
    setCurrentActiveUnit(button);
    updateSelectedContent(button);
});

/**
 * Initially setting the click event to the range box.
 */
$('div.unit-range-box').click(e => rangeBoxClickEvent(e.target));

/**
 * initially setting the focusout and keyup event to the range inputs
 */
$('div.unit-range-box input').on('focusout keyup', e => rangeInputFocusOutEvent(e));

/**
 * Actions to be done once one of the div is clicked. 
 * It should hide the span, fade in the input, focus it, disable the self event and enable the input event.
 */
function rangeBoxClickEvent(rangeBox) {
    $(rangeBox).children('span').hide();
    $(rangeBox).children('input').fadeIn(300).focus();
    $(rangeBox).removeClass('clickable').off('click');
    $(rangeBox).children('input').on('focusout keyup', e => rangeInputFocusOutEvent(e));
}

function rangeInputFocusOutEvent(e) {
    if (e.type == 'keyup' && e.keyCode != 13) {
        return;
    }
    const parentDiv = $(e.target).parent();
    $(parentDiv).children('input').hide();
    $(parentDiv).children('span').fadeIn(300);
    $(parentDiv).addClass('clickable').click(e => rangeBoxClickEvent(e.target));
    $(e.target).off('focusout keyup');
}