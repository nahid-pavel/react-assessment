import * as requestedServer from './Api';
import { authSlice } from './Slice';
import { toast } from 'react-toastify';
const { actions: slice } = authSlice;



export const signInAction = (payload, setLoading, history, cb) => (dispatch) => {
    const { email, password } = payload;
    console.log(email, password)
    setLoading(true)
    return requestedServer.SignInAPi({ email, password }).then(res => {
        if (res?.status === 200) {
            setLoading(false);
            console.log(res);
            dispatch(slice.setSignIn(res?.data));
            cb();
            toast.success('Signed In Successfully');
            history.push('/')
        }
    }).catch(err => {
        toast.error(err?.response?.data?.message || "Something went wrong");

    })
}
export const signUpAction = (payload, setLoading, history, cb) => (dispatch) => {
    const { name, email, password } = payload;
    setLoading(true)
    return requestedServer.SignUpAPi({ name, email, password }).then(res => {
        if (res?.status === 201) {
            setLoading(false);
            console.log(res);
            dispatch(slice.setSignIn(payload));
            cb();
            toast.success('Signed Up Successfully');
            history.push('/')

        }

    }).catch(err => {
        toast.error(err?.response?.data?.message);

    })

}

export const logoutAction = () => dispatch => {
    dispatch(slice.setLogout());
}