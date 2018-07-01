import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Form.css';
import webApi from '../../webModule/webApi';
import decode from 'jwt-decode';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: {},            
            errors: null,
            message: null
        };
    }

    handleChange = (e) => {
        const fieldName = e.target.name;
        this.setState({ payload: Object.assign(this.state.payload, { [fieldName]: e.target.value }) });
    }

    handleSubmit = (e) => {
        e.preventDefault();        

        webApi.post(this.props.endPoint, this.state.payload, (res) => {
            if (res.success) {
                console.log(res);
                console.log(decode(res.token));
                this.props.callback(res);                
                this.props.history.push(this.props.redirect);                
            } else {
                this.setState({
                    errors: res.errors || null,
                    message: res.message || null
                });
            }
        });

    }

    render() {
        const formBody = this.props.fields.map((f, idx) =>
            <div key={idx} className='form-group'>
                <label className='control-label col-sm-4' htmlFor={f.name}>{f.val}</label>
                <input name={f.name} id={f.name} className='form-control' type={f.type} onChange={this.handleChange} />
                {this.state.errors && <span className='error'>{this.state.errors[f.name]}</span>}
            </div>
        );

        return (
            <div className={this.props.formType + '-panel panel-default col-md-4 border'}>
                <div className="panel-heading">
                    <h1 className='panel-title'>{this.props.formType}</h1>
                </div>
                <div className='panel-body'>
                    <form data-page='create' className={this.props.formType + '-form'} onSubmit={this.handleSubmit}>
                        <fieldset>
                            <span className='error'>{this.state.message}</span>
                            {formBody}
                            <input name='submit' id='submit' className='btn btn-sm btn-success' type='submit' value='submit' />
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    };
}

export default withRouter(Form);