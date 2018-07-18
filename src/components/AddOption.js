import React from 'react';

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

export default AddOption;
