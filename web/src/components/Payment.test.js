import React from "react";
import ReactDOM from "react-dom";
import Payment from "./Payment";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Payment />, div);
});

/*
class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: 'card',
            errMsg: 'Please fill all the fields!!!',
            showPaymentErr: false,
            validateErrMsg: 'Entered data not valid!!!',
            showValidateErr: false,
            cardNo: '',
            cvc: '',
            exp: '',
            phoneNo: '',
            pin: ''
        };
    }

    componentDidMount() {
        if (this.props.location) {
            this.setState({ ...this.props.location.state })
        }
        var user = localStorage.getItem('user')
        if (user) {
            this.setState({ phoneNo: JSON.parse(user).phone })
        }
    }

    componentWillUpdate() {
        var user = localStorage.getItem('user')
        if (!user) {
            this.props.history.push('/')
        }
    }

    handleChange = type => event => {
        var value = event.target.value
        if (type === 'card' || type === 'phone') {
            this.setState({ checked: type })
        } else {
            this.setState({ [type]: value })
        }
    }

    handleSubmit = async  event => {
        event.preventDefault()
        event.stopPropagation()
        this.setState({ showPaymentErr: false, showValidateErr: false })
        const state = this.state;
        if (state.checked === 'card') {
            if (state.cardNo && state.cvc && state.exp) {
                validateCard({ card: state.cardNo, cvc: state.cvc, exp: state.exp, total: state.total })
                    .then(res => {
                        if (res.validated) {
                            this.createReservation({ card: state.cardNo })
                        } else {
                            this.setState({ showValidateErr: true })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })

            } else {
                this.setState({ showPaymentErr: true })
            }
        }
        if (state.checked === 'phone') {
            if (state.phoneNo && state.pin) {
                validatePhone({ phone: state.phoneNo, pin: state.pin, total: state.total })
                    .then(res => {
                        if (res.validated) {
                            this.createReservation({ phone: state.phoneNo })
                        } else {
                            this.setState({ showValidateErr: true })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else {
                this.setState({ showPaymentErr: true })
            }
        }
    }

    createReservation = (paymentMethod) => {
        const state = this.state
        var user = localStorage.getItem('user')
        if (user) {
            user = JSON.parse(user)
            console.log(user);
            const reservation = {
                ...paymentMethod,
                user: user._id,
                email: user.email,
                name: `${user.fname} ${user.lname}`,
                from: state.from.value,
                to: state.to.value,
                train: state.train.value,
                trainClass: state.trainClass.value,
                time: state.time.value,
                qty: state.qty,
                date: state.date,
                amount: state.amount,
                discount: state.discount,
                total: state.total
            }
            makeReservation(reservation)
                .then(res => {
                    toast.success("Successfully paid " + reservation.total)
                    this.props.history.push('/reservations')
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }
    render()
}
*/
