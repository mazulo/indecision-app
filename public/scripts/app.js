'use strict';

var appRoot = document.getElementById('app');

var can_show_details = true;

var toggleDetails = function toggleDetails() {
    var p_elem = document.getElementById('detail');
    if (can_show_details) {
        p_elem.style.display = 'none';
    } else {
        p_elem.style.display = 'block';
    }
    can_show_details = !can_show_details;
    renderTemplate();
};

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            can_show_details ? 'Show details' : 'Hide details'
        ),
        React.createElement(
            'p',
            { id: 'detail' },
            'Exploiting the features of the Python language to produce code that is clear, concise and maintainable.'
        )
    );

    ReactDOM.render(template, appRoot);
};

renderTemplate();
