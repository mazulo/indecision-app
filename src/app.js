class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{ this.props.title}</h1>
                <h2>{ this.props.subtitle }</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    handlePick() {
        alert('yo');
    }

    render() {
        return (
            <div>
                <button onClick={ this.handlePick }>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    handleRemoveAll() {
        alert('removed');
    }
    
    render() {
        return (
            <div>
                <button onClick={ this.handleRemoveAll }>remove all</button>
               {
                   this.props.options.map((option) => {
                       return <Option key={ option } optionText={ option } />;
                   })
               }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                { this.props.optionText }
            </div>
        );
    }
}

class AddOption extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        const text = e.target.option.value;
        if (text.trim()) {
            alert(text);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.onSubmit }>
                    <input type="text" name="option" id="option_1"/>
                    <button>add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
