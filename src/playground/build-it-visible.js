const appRoot = document.getElementById('app');

let can_show_details = true;

const toggleDetails = () => {
    let p_elem = document.getElementById('detail');
    if (can_show_details) {
        p_elem.style.display = 'none';
    } else {
        p_elem.style.display = 'block';
    }
    can_show_details = !can_show_details;
    renderTemplate()
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={ toggleDetails }>{ can_show_details ? 'Show details' : 'Hide details'}</button>
            <p id="detail">Exploiting the features of the Python language to produce code that is clear, concise and maintainable.</p>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderTemplate();
