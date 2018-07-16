class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [],
        }
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={ this.state.options.length > 0 }
                    handlePick={ this.handlePick }
                />
                <Options
                    options={this.state.options}
                    hasOptions={ this.state.options.length > 0 }
                    handleDeleteOptions={ this.handleDeleteOptions }
                />
                <AddOption
                    handleAddOption={ this.handleAddOption }
                />
            </div>
        );
    }
};

const Header = (props) => {
    return (
        <div>
            <h1>{ props.title}</h1>
            <h2>{ props.subtitle }</h2>
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={ props.handlePick }
                disabled={ !props.hasOptions }
            >What should I do?</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button
                onClick={ props.handleDeleteOptions }
                disabled={ !props.hasOptions }
            >remove all</button>
            {
                props.options.map((option) => {
                    return <Option key={ option } optionText={ option } />;
                })
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            { props.optionText }
        </div>
    );
};

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined,
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.option.value.trim();

        const error = this.props.handleAddOption(option);
        e.target.option.value = '';
        this.setState(() => ({ error }));
    }

    render() {
        return (
            <div>
                {
                    this.state.error &&
                    <p>{this.state.error}</p>
                }
                <form onSubmit={ this.handleAddOption }>
                    <input type="text" name="option" id="option_1"/>
                    <button>add option</button>
                </form>
            </div>
        );
    }
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))