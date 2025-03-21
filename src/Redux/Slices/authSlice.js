import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";
const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    role:localStorage.getItem('role') || "",
    data:localStorage.getItem('data') || {}

};
export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const res = axiosInstance.post("user/register", data);
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})
//login: ye ek action h kaise qki hmlog isko dispatch kr rhe h 
export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const res = axiosInstance.post("user/login", data);
        toast.promise(res, {
            loading: "Wait! authentication in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to log in"
        });
        return (await res).data; // yha se jo hm return kr rhe h yo as it is hme payload m milta h
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});
export const logout = createAsyncThunk("/auth/logout", async (data) => {
    try {
        const res = axiosInstance.post("user/logout");
        toast.promise(res, {
            loading: "Wait! logout in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to log out"
        });
        return (await res).data; // yha se jo hm return kr rhe h yo as it is hme payload m milta h
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{

    },
    // extraReducres: ye krte h ki tmhare promise k different state k upr tmhe kya actions krna h tm yo lekh skte ho jaise hmare pas login h
    // login hme ek promise return kr rha h ki agr promise success ho gya kya krna h agr reject ho gya to kya krna h 
    // builder: the builder object provides methods that let us define additional case reducers that will runs in response to actions define outside the slice
    // agr koi bhi action slice or reducers k bhr define hota h to uske liye hmlog extrareducer or builder ka use krte h 
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            // localStorage m add krne ka ye faida h ki jb bhi hmari app dubara load hogi to ye state  localStorage m se load ho jyga
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            // but abhi jo current state of the  app h yo to dubara localStorage m se fetch ni kregi n to uske liye hme state ko update krna hoga
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role
        })
        .addCase(logout.fulfilled,(state)=>{
          localStorage.clear();
          state.isLoggedIn=false;
          state.data={}
          state.role=""
        })
    }
})

export const {} = authSlice.actions;
export default authSlice.reducer;