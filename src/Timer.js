import React, { Component } from 'react';
import './App.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const styles = {
    timer: {
        fontSize: 50,
        textAlign: "center"
    }
}
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { secondsRemaining: 30, colorToBeShown: "black", open: false, };
    }

    componentDidMount = () => {
        const context = this;
        let timer = setInterval(function () {
            if (context.state.secondsRemaining > 0) {
                if (context.state.secondsRemaining <= 11) {
                    context.setState({
                        colorToBeShown: "red"
                    })
                }
                context.setState({
                    secondsRemaining: context.state.secondsRemaining - 1
                })
            }
            else {
                clearInterval(timer);
                context.setState({
                    open: true
                })
            }
        }, 1000);
        this.props.setTimerId(timer);
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    tryAgain = () => {
        window.location.reload();
    }

    render() {
        return (

            <div style={styles.timer}>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Arghhhhhhhh!!!!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            The Time is up and you could not complete the Game! Dont Lose Hope, Try Again Now.
                            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.tryAgain} color="primary">
                            Try Again
                         </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <div style={{ color: this.state.colorToBeShown }}> {this.state.secondsRemaining} </div>
            </div>
        );
    }
}

export default Timer;
