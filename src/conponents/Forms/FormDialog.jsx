import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './Textinput';


export default class FormDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            description: ""
        }
        this.inputName = this.inputName.bind(this)
        this.inputemail = this.inputemail.bind(this)
        this.inputDescription = this.inputDescription.bind(this)

    }

    inputName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    inputemail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    inputDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    submithome = () => {
        const name = this.state.name
        const email = this.state.email
        const description = this.state.description


        const payload = {
            text: 'お問い合わせがありました\n' +
                'お名前' + name + '\n' +
                'Twitter ID' + email + '\n' + description
        }

        const url = 'incoming webhooksにて取得'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() => {
            alert('通知が完了しました。追ってご連絡します。')
            this.setState({
                name: "",
                email: "",
                description: "",
            })
            return this.props.handleClose()
        })
    }

    render() {
        return ( <
            Dialog open = {
                this.props.open
            }
            onClose = {
                this.props.handleClose
            }
            aria - labelledby = "alert-dialog-title"
            aria - describedby = "alert-dialog-description" >
            <
            DialogTitle id = "alert-dialog-title" > {
                "問い合わせフォーム"
            } < /DialogTitle> <
            DialogContent >
            <
            DialogContentText >
            <
            TextInput label = {
                "お名前(必須)"
            }
            multilline = {
                false
            }
            rows = {
                1
            }
            value = {
                this.state.name
            }
            type = {
                "text"
            }
            onChange = {
                this.inputName
            }
            /> <
            TextInput label = {
                "Twitter ID(必須)"
            }
            multilline = {
                false
            }
            rows = {
                1
            }
            value = {
                this.state.email
            }
            type = {
                "email"
            }
            onChange = {
                this.inputemail
            }
            /> <
            TextInput label = {
                "お問い合わせ内容"
            }
            multilline = {
                true
            }
            rows = {
                5
            }
            value = {
                this.state.description
            }
            type = {
                "text"
            }
            onChange = {
                this.inputDescription
            }
            /> < /
            DialogContentText > <
            /DialogContent> <
            DialogActions >
            <
            Button onClick = {
                this.props.handleClose
            }
            color = "primary" >
            キャンセル <
            /Button> <
            Button onClick = {
                this.submithome
            }
            color = "primary"
            autoFocus >
            送信 <
            /Button> < /
            DialogActions > <
            /Dialog>
        )
    }
}
