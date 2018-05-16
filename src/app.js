console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderOptionsApp();
}

const onRemoval = () => {
    app.options = [];
    renderOptionsApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(app.options[randomNum]);
}

const renderOptionsApp = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app.subtitle && <p>{ app.subtitle }</p> }
            <p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
            <p>{ app.options.length }</p>
            <button disabled={ app.options.length === 0 } onClick={ onMakeDecision }>What should I do?</button>
            <button onClick={ onRemoval }>Remove All</button>
            <ol>
                { app.options.map(option => <li key={ option }>Item { option }</li>) }
            </ol>
            <form onSubmit={ onFormSubmit }>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderOptionsApp()
