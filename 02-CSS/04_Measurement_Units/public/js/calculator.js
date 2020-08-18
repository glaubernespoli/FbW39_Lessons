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
$('div.unit-range-box').click(e => rangeBoxClickEvent(e));

/**
 * initially setting the focusout and keyup event to the range inputs
 */
$('div.unit-range-box input').on('focusout keyup', e => rangeInputFocusOutEvent(e));

/**
 * Actions to be done once one of the div is clicked. 
 * It should hide the span, fade in the input, focus it, disable the self event and enable the input event.
 */
function rangeBoxClickEvent(e) {
    const rangeBox = e.target;
    $(rangeBox).children('span').hide();
    $(rangeBox).children('input').fadeIn(300).select();
    $(rangeBox).removeClass('clickable').off('click');
    $(rangeBox).children('input').on('focusout keyup', e => rangeInputFocusOutEvent(e));
}

/**
 * Actions to be done once one of the input loses focus or the enter key is pressed. 
 * It should hide the input, fade in the span, reenable the click event on the wrapper and disable self.
 * Should also update the values for the span and for the range input.
 */
function rangeInputFocusOutEvent(e) {
    //ignores any key other than enter key
    if (e.type == 'keyup' && e.keyCode != 13) {
        return;
    }

    const inputElement = e.target;
    const parentDiv = $(inputElement).parent();
    $(inputElement).hide();
    $(parentDiv).children('span').fadeIn(300);
    $(parentDiv).addClass('clickable').click((e) => rangeBoxClickEvent(e));
    $(inputElement).off('focusout keyup');

    updateSpanAndRangeValuesFor(inputElement);

    e.stopImmediatePropagation();
}

function updateSpanAndRangeValuesFor(inputElement) {
    const minInput = $('#unit-range-min');
    const currentInput = $('#unit-range-current');
    const maxInput = $('#unit-range-max');

    const val = $(inputElement).val();
    switch (inputElement.id) {
        case minInput[0].id:
            if (val >= 0 && val <= currentInput.val()) {
                updateSpanAndRangeValues(inputElement.id, 'min');
            }
            break;
        case currentInput[0].id:
            if (val >= minInput.val() && val <= maxInput.val()) {
                updateSpanAndRangeValues(inputElement.id, 'value');
            }
            break;
        case maxInput[0].id:
            if (val >= currentInput.val()) {
                updateSpanAndRangeValues(inputElement.id, 'max');
            }
            break;
        default:
            break;
    }
    revertInputValueIfSpanNotUpdated(inputElement);
}

function revertInputValueIfSpanNotUpdated(inputElement) {
    const span = $(inputElement).parent().children('span');
    const self = $(inputElement);
    if (self.val() != span.text()) {
        self.val(span.text());
    }
}

function updateSpanAndRangeValues(inputID, attr) {
    const input = $(`#${inputID}`);
    const span = $(input).parent().children('span');
    const rangeInput = $('#unit-range');
    const val = input.val();

    span.text(val);
    if (attr == 'value') {
        rangeInput.val(val);
    } else {
        rangeInput.attr(attr, val);
    }
}


/**
 * //TODO:
 * 9. auto select values on the inputs when they get focused --OK
 * 2. only numbers on inputs, no negative numbers; -- OK
 * 3. min <= current <= max; --OK
 * 11. if not updating values (due to not being elegible), keep old value --OK
 * 
 * 12. set max of min input = current, set min of max input = current
 * 
 * 
 * 1. initial values of the spans (not X Y Z);
 * 4. update current value on slide;
 * 5. not trigger change event when using the buttons up and down from the number input ==>>> FOCUS & ENTER should trigger all the events; change & keyup numbers should only update values
 * 6. range silde bar should have the specified color
 * 7. growth input on top of the range bar to specify how much it should grow (step attr)
 * 8. initial min and max should be based on parent div, not vw
 * 10. smoothly change the bg on :hover on the unit buttons
 */